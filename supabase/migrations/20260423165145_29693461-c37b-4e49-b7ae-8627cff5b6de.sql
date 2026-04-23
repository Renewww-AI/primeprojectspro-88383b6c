-- Roles
create type public.app_role as enum ('admin', 'moderator', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  created_at timestamp with time zone not null default now(),
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

create policy "Users can view their own roles"
on public.user_roles for select
to authenticated
using (auth.uid() = user_id);

create policy "Admins can view all roles"
on public.user_roles for select
to authenticated
using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can manage roles"
on public.user_roles for all
to authenticated
using (public.has_role(auth.uid(), 'admin'))
with check (public.has_role(auth.uid(), 'admin'));

-- Submissions
create type public.submission_status as enum ('pending', 'approved', 'rejected');

create table public.blog_submissions (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  author_email text not null,
  author_city text not null,
  author_bio text,
  title text not null,
  slug text unique,
  category text not null,
  cover_image_url text not null,
  body_html text not null,
  read_time text not null,
  status submission_status not null default 'pending',
  rejection_note text,
  published boolean not null default false,
  submitted_at timestamp with time zone not null default now(),
  reviewed_at timestamp with time zone,
  published_at timestamp with time zone
);

create index blog_submissions_status_idx on public.blog_submissions (status);
create index blog_submissions_published_idx on public.blog_submissions (published, published_at desc);
create index blog_submissions_slug_idx on public.blog_submissions (slug);

alter table public.blog_submissions enable row level security;

-- Anyone (anon or authed) can insert a submission
create policy "Anyone can submit a post"
on public.blog_submissions for insert
to anon, authenticated
with check (true);

-- Public can read approved + published posts
create policy "Public can read published posts"
on public.blog_submissions for select
to anon, authenticated
using (status = 'approved' and published = true);

-- Admins can read everything
create policy "Admins can read all submissions"
on public.blog_submissions for select
to authenticated
using (public.has_role(auth.uid(), 'admin'));

-- Admins can update / delete
create policy "Admins can update submissions"
on public.blog_submissions for update
to authenticated
using (public.has_role(auth.uid(), 'admin'))
with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete submissions"
on public.blog_submissions for delete
to authenticated
using (public.has_role(auth.uid(), 'admin'));

-- Storage bucket for cover images
insert into storage.buckets (id, name, public)
values ('post-covers', 'post-covers', true)
on conflict (id) do nothing;

create policy "Public can read covers"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'post-covers');

create policy "Anyone can upload a cover"
on storage.objects for insert
to anon, authenticated
with check (bucket_id = 'post-covers');

create policy "Admins can manage covers"
on storage.objects for all
to authenticated
using (bucket_id = 'post-covers' and public.has_role(auth.uid(), 'admin'))
with check (bucket_id = 'post-covers' and public.has_role(auth.uid(), 'admin'));
