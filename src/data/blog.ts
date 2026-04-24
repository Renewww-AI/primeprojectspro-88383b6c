import kitchenImg from "@/assets/service-kitchen.jpg";
import bathroomImg from "@/assets/service-bathroom.jpg";
import landscapingImg from "@/assets/service-landscaping.jpg";

export type BlogCategory =
  | "All Posts"
  | "Planning Your Project"
  | "Finding the Right Contractor"
  | "Budgeting & Costs"
  | "North County Spotlight"
  | "DIY vs Hire a Pro"
  | "Seasonal Home Tips";

export const BLOG_CATEGORIES: BlogCategory[] = [
  "All Posts",
  "Planning Your Project",
  "Finding the Right Contractor",
  "Budgeting & Costs",
  "North County Spotlight",
  "DIY vs Hire a Pro",
  "Seasonal Home Tips",
];

export type BlogPost = {
  slug: string;
  title: string;
  category: Exclude<BlogCategory, "All Posts">;
  preview: string;
  readTime: string;
  heroImg: string;
  heroAlt: string;
  body: string[];
  pullQuote: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "5-questions-before-hiring-contractor-san-diego",
    title: "5 Questions You Must Ask Before Hiring Any Contractor in San Diego",
    category: "Finding the Right Contractor",
    preview:
      "The right questions during a first call save more money than any negotiation later.",
    readTime: "6 min read",
    heroImg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80",
    heroAlt: "Contractor reviewing plans with a homeowner",
    body: [
      "There are a lot of contractors in San Diego County, and on paper many of them sound similar. The difference between an organized, accountable build and a stressful one rarely shows up in the bid. It shows up in the first conversation, in how clearly the contractor can answer five very specific questions.",
      "First: who is actually on site every day? On smaller residential projects, the answer matters. A senior project manager who shows up twice a week is different from one who is there at the morning standup. You are not buying a logo — you are buying the people on your job.",
      "Second: how do you handle changes? Every project has them. The question is whether change orders come with a clear price, written description, and your sign-off before any work happens, or whether they show up as line items on the next invoice with no warning.",
      "Third: what is your scheduling process? Vague answers — 'we'll let you know each week' — are a red flag. A real answer involves a written schedule, a single point of contact, and a regular cadence for updates that doesn't depend on you chasing it.",
      "Fourth: how do you protect the home during construction? Dust barriers, floor protection, cleanup at the end of each day, and where the dumpster lives are not minor details. They tell you how the team thinks about the parts of the project you actually live with.",
      "Fifth: what does your punch list and warranty process look like? The last 5% of a project is where reputations are made. Ask for the actual document, the typical timeline, and what happens six months later if something settles or shifts.",
    ],
    pullQuote:
      "The bid tells you what they will charge. The first conversation tells you how they will work.",
  },
  {
    slug: "kitchen-remodel-without-losing-your-mind",
    title: "How to Plan a Kitchen Remodel Without Losing Your Mind (or Your Budget)",
    category: "Planning Your Project",
    preview:
      "Kitchen remodels reward early decisions and punish improvised ones. Here's the order that actually works.",
    readTime: "7 min read",
    heroImg: kitchenImg,
    heroAlt: "Bright, modern kitchen remodel with island and pendant lights",
    body: [
      "Most stressful kitchen remodels share the same root cause: decisions made out of order. Cabinets ordered before the layout is locked. Tile picked before the lighting plan exists. Appliances bought because of a sale, then the kitchen redesigned around them. Each of those choices, in isolation, feels harmless. Together they explain almost every overrun story.",
      "The order that actually works starts with use. Before any showroom, before any Pinterest board, sit at the kitchen table and write down what mornings, weeknights, weekends, and holidays look like in this room. That document drives the layout. Without it, you are designing a stage set instead of a kitchen.",
      "Once the layout is locked, finishes can be specified in the right sequence — cabinetry first because it has the longest lead time, then countertops because they have to be templated against real cabinets, then tile and hardware. Lighting and ventilation are designed alongside, not after.",
      "Budget planning works the same way. The biggest kitchen budget mistakes come from fuzzy allowances on cabinets, counters, and appliances. Tight numbers there protect everything else. If a contractor's bid uses round, generic allowances on those three categories, the final number is going to climb.",
      "Plan, also, for the human side. Most kitchens are unusable for several weeks. A real plan names where the prep zone goes, where the fridge lives, and how meals will work. Pretending that part doesn't exist is how families end up exhausted halfway through the build.",
      "Done in this order, a kitchen remodel becomes a sequence of tight decisions instead of a constant negotiation. That is the real difference between projects that finish on time and projects that don't.",
    ],
    pullQuote: "A kitchen budget is protected by tight allowances, not by hoping for sales.",
  },
  {
    slug: "what-does-home-concierge-actually-do",
    title: "What Does a Home Concierge Actually Do? Here's the Honest Answer",
    category: "Planning Your Project",
    preview:
      "It's not a butler, and it's not a contractor. Here's what the role actually means in practice.",
    readTime: "5 min read",
    heroImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    heroAlt: "Homeowner reviewing a project plan",
    body: [
      "The phrase 'home concierge' gets used loosely, and it deserves a clearer definition. At its core, a home concierge is the person who carries the project context for you — the one who knows the lead times, remembers what the electrician said two weeks ago, and connects the cabinet maker's question back to the lighting designer's plan.",
      "It is not the same as a contractor. A contractor builds. It is also not project management software. A spreadsheet does not call you when a tile pattern needs a final decision so the crew doesn't sit on Friday.",
      "The role exists because residential projects are full of small, time-sensitive decisions, and most homeowners don't want their evenings spent triaging them. A good concierge teases out the questions early, presents real options, and protects you from being asked the same thing three different ways by three different trades.",
      "It also matters for accountability. When something goes sideways — and on every project, something does — the concierge is the single person who owns the next step. There is no 'let me check with the GC, who will check with the sub.' There is one number to call.",
      "The best test for whether a concierge approach is real or marketing language is to ask one question: who, by name, is my single point of contact for the entire project? If the answer is clear and stays the same from sales through punch list, the model is real.",
    ],
    pullQuote:
      "A real concierge is one phone number, one person, and one source of truth.",
  },
  {
    slug: "oceanside-coastal-building-permits",
    title:
      "Oceanside Homeowners: What You Need to Know About Coastal Building Permits",
    category: "North County Spotlight",
    preview:
      "Coastal projects in Oceanside add a permit layer most homeowners don't see until late.",
    readTime: "6 min read",
    heroImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
    heroAlt: "Oceanside coastline with residential homes",
    body: [
      "If your Oceanside home sits inside the Coastal Zone, your project lives under two sets of rules instead of one. The City of Oceanside reviews like any other municipal project, and the Coastal Commission overlay adds its own considerations on top. Most homeowners find this out when their permit timeline doubles unexpectedly.",
      "The Coastal Zone boundary is not intuitive — it does not always match how 'coastal' a property feels. Properties several blocks inland can sit inside it. The first move on any meaningful Oceanside project should be to check the property against the official map before any plans are drawn.",
      "Inside the zone, exterior changes, additions, and any work that affects views or public access generally trigger additional review. Interior remodels often do not. The line is more nuanced than that, but understanding the difference up front shapes the entire schedule.",
      "Practically, this means timelines need to be honest. A project that would permit in eight weeks elsewhere may take twelve to twenty in the Coastal Zone. That is not a problem if it is planned for. It is a problem when it is discovered halfway through.",
      "The good news is that Oceanside has become noticeably more predictable in recent years, especially for ADUs and accessory work. The path is well-trodden — it just needs to be respected from the start.",
    ],
    pullQuote:
      "Coastal Zone timelines are not slower — they are just longer than people expect.",
  },
  {
    slug: "real-cost-bathroom-remodel-carlsbad-2025",
    title: "The Real Cost of a Bathroom Remodel in Carlsbad in 2025",
    category: "Budgeting & Costs",
    preview:
      "Bathroom budgets in Carlsbad have shifted. Here's what the numbers actually look like in 2025.",
    readTime: "7 min read",
    heroImg: bathroomImg,
    heroAlt: "Modern Carlsbad bathroom remodel with stone tile",
    body: [
      "Bathroom remodel pricing in Carlsbad in 2025 sits in a wider range than most homeowners expect. A secondary bathroom refresh can land in the mid-five-figure range, while a full primary suite remodel with custom tile, glass, and stone routinely crosses into six figures. The variables that move that number are surprisingly few.",
      "The first variable is layout change. Keeping plumbing in place is the single biggest cost lever. Moving a toilet, relocating a shower drain, or repositioning a vanity all require subfloor work and rough plumbing changes that compound across trades.",
      "The second is finish tier. Tile is the clearest example — a clean ceramic field tile and a complex stone mosaic with mitered edges can have a 5x cost difference once labor is included. The same logic applies to glass, vanities, and fixtures.",
      "The third is hidden conditions. Older Carlsbad homes — and especially anything coastal — often surface unexpected moisture, subfloor, or drain issues during demo. A serious bid includes a real allowance for these conditions, not a footnote.",
      "Beyond those three, the rest is detail. Lighting layers, vent fan quality, blocking for grab bars and benches, and the quality of the waterproofing system are where bathrooms quietly become great or quietly disappoint.",
      "If you take one thing into a Carlsbad bathroom budget conversation, take this: insist on itemized allowances for tile, plumbing fixtures, vanity, glass, and lighting. Fuzzy line items in those five categories are where almost every overrun comes from.",
    ],
    pullQuote:
      "Keeping plumbing in place is the single largest cost lever in a bathroom remodel.",
  },
  {
    slug: "adu-or-addition-north-county-property-value",
    title:
      "ADU or Addition? How North County Homeowners Are Maximizing Their Property Value",
    category: "Planning Your Project",
    preview:
      "The right answer depends on lot, layout, and how you actually plan to use the space.",
    readTime: "6 min read",
    heroImg: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1600&q=80",
    heroAlt: "Detached ADU in a North County neighborhood",
    body: [
      "ADUs and home additions both add square footage, but they answer different questions. An ADU adds a separate, self-contained unit — useful for rental income, multi-generational living, or long-term flexibility. An addition expands the existing home — useful when the goal is more living space, a primary suite, or a better-flowing layout.",
      "In North County, the math has shifted. ADU rules have been streamlined at the state level, and most cities now permit them faster than full additions. That has made detached ADUs a practical option for lots that previously couldn't accommodate one.",
      "From a property value standpoint, both add real equity, but in different ways. ADUs typically appraise on a combination of the income they can produce and the additional dwelling unit itself. Additions appraise more like core square footage of the primary home. The right financial framing depends on whether you plan to rent, live separately, or eventually sell.",
      "The lot is the deciding vote. Setbacks, slope, utility access, and existing structures all influence which approach is realistic. A feasibility review before any design work answers that question without burning architectural fees.",
      "If the goal is flexibility — rental now, family later, then sale — an ADU usually wins. If the goal is making the house you already love work better for the next decade, an addition usually does. The wrong project on the right lot is still the wrong project.",
    ],
    pullQuote:
      "An ADU is a separate building. An addition is a better version of the one you have.",
  },
  {
    slug: "lowest-bid-not-best-deal",
    title: "Why the Lowest Bid Is Almost Never the Best Deal",
    category: "Finding the Right Contractor",
    preview:
      "There is a reason the lowest bid is the lowest. Sometimes it's good news. Usually it isn't.",
    readTime: "5 min read",
    heroImg: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80",
    heroAlt: "Construction estimate documents and a calculator",
    body: [
      "When three bids land on the same project and one is meaningfully lower than the other two, there is always a reason. Sometimes it's a contractor with lower overhead, a slow week, or a genuine pricing edge. Far more often, it's missing scope, optimistic allowances, or work that quietly didn't make it into the bid.",
      "The first place to look is the line items. Compare not the bottom-line numbers but the categories. If two bids include demolition, dust protection, and dump fees and the third doesn't, that is not a discount — it is a future change order.",
      "The second place to look is allowances. Tile, lighting, plumbing fixtures, and cabinetry are the four categories where soft numbers create most overruns. A low bid often hides aggressive allowances that real selections will blow past.",
      "The third place to look is the schedule. A bid that promises a four-week job everyone else is bidding at eight weeks is either a different scope or a different reality. Schedules and prices have to match.",
      "None of this means the lowest bid is wrong. Sometimes it is genuinely the best value. The point is that the only way to know is to compare scope to scope, allowance to allowance, and schedule to schedule. The bottom line by itself is not enough information to decide anything.",
    ],
    pullQuote:
      "Compare scope to scope before you compare price to price. Otherwise you're not comparing anything.",
  },
  {
    slug: "spring-home-checklist-san-diego",
    title: "Spring Home Checklist for San Diego Homeowners",
    category: "Seasonal Home Tips",
    preview:
      "A short, honest list of what's actually worth doing in spring — and what isn't.",
    readTime: "4 min read",
    heroImg: landscapingImg,
    heroAlt: "San Diego home with spring landscaping",
    body: [
      "San Diego doesn't have a real winter, which makes spring home checklists feel optional. They aren't — they're just different. Sun, salt, marine layer, and wildfire-season prep all matter more here than freeze cycles.",
      "Start with the roof. Walk the perimeter (or have someone do it) and look for displaced tiles, lifted shingles, and any cracking around penetrations. Spring is the right window to address what winter rain exposed, before the dry season takes over.",
      "Check the gutters and downspouts. Even modest leaf load combined with a single heavy rain event can back up flashings and create slow leaks you won't see until much later. Five minutes with a hose tells you most of what you need to know.",
      "Service the HVAC. Spring is the calmest demand window for HVAC contractors, which means easier scheduling and better attention. A real tune-up — not a five-minute filter swap — pays for itself by the first heat wave.",
      "Walk the irrigation. Broken heads, leaky valves, and clogged drip emitters become obvious as planting wakes up. Fixing them now keeps water bills sane through summer.",
      "Skip the pressure washing of stucco unless there's a real reason. Aggressive cleaning shortens stucco life. Almost everything else on a typical spring checklist applies — proportionally — and is worth the afternoon.",
    ],
    pullQuote:
      "Spring in San Diego is a maintenance window, not a deep clean. Use it accordingly.",
  },
  {
    slug: "flooring-showdown-hardwood-lvp-tile",
    title:
      "Flooring Showdown: Hardwood vs LVP vs Tile — What Works Best in San Diego Homes",
    category: "DIY vs Hire a Pro",
    preview:
      "The right floor depends on the room, the slab, and how you actually live. Here's the honest comparison.",
    readTime: "6 min read",
    heroImg: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=1600&q=80",
    heroAlt: "Wide plank wood flooring next to tile in a transition",
    body: [
      "Hardwood, LVP, and tile each have a real case in San Diego homes, and the right answer is rarely 'one of them everywhere.' The choice should follow the room, the substrate, and the household.",
      "Real hardwood — solid or engineered — is still the best look for living rooms, bedrooms, and hallways in most homes. The caveat is moisture. Slabs need to be tested, and ground-floor installations on concrete need engineered, not solid, planks. Done correctly, the result lasts decades.",
      "LVP has earned its place. The good products look convincing, install fast, tolerate moisture, and shrug off pets and kids. The compromises are honest: it doesn't refinish, the lifespan is shorter than wood, and quality varies wildly between brands. Specing the right product is more important than specing the category.",
      "Tile remains the right call in wet areas — bathrooms, laundry rooms, and most entryways. In larger living spaces it can feel cold underfoot in winter mornings, even in San Diego, but for the right design it is unmatched for durability.",
      "The DIY question lands differently for each. Tile demands skill — uneven thinset, wrong grout, or a poor waterproofing detail shows up immediately. LVP is genuinely DIY-friendly on a flat substrate. Hardwood sits in between, and the substrate prep is what trips most people up.",
      "If you can afford one piece of professional help, spend it on substrate evaluation. The slab, subfloor, and moisture story are what determine whether any of these choices actually performs.",
    ],
    pullQuote:
      "The floor you can install yourself depends almost entirely on the substrate underneath it.",
  },
  {
    slug: "how-to-read-contractor-quote",
    title: "How to Read a Contractor's Quote (And What Red Flags to Watch For)",
    category: "Budgeting & Costs",
    preview:
      "A quote should tell you what you're buying, line by line. If it doesn't, that's the first red flag.",
    readTime: "6 min read",
    heroImg: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
    heroAlt: "Reviewing a construction quote on paper",
    body: [
      "A clear contractor quote is a planning document, not just a price. It should describe scope, identify allowances, list exclusions, and outline how changes are handled. A quote that's mostly a single number with a few generic lines underneath isn't a quote — it's a placeholder.",
      "Look first at scope. Every major area of work should have its own section, with enough detail that a different contractor could read it and understand what was being promised. Vague phrases like 'as needed' or 'standard finishes' are warning signs.",
      "Next, allowances. Tile, plumbing fixtures, lighting, cabinetry, and appliances are the categories where quotes most often hide soft numbers. A serious quote names the dollar amount allocated to each, and you (or your concierge) can sanity-check those against actual selections before signing.",
      "Then, exclusions. A bid that excludes nothing is a bid that hasn't thought through the project. Real quotes list what's not included — permit fees, design services, specialty engineering, surface repairs beyond a defined scope. Excluding them honestly is more trustworthy than burying them.",
      "Finally, change order language. The quote should explain how changes are priced, signed, and scheduled. 'Time and materials' as a default, with no markup disclosed, is a red flag. So is a contract that allows verbal change orders.",
      "If a quote is hard to read, the project will be hard to manage. Clarity in the document predicts clarity in the build.",
    ],
    pullQuote:
      "A confusing quote becomes a confusing project. Clarity on paper isn't a luxury — it's a forecast.",
  },
  {
    slug: "encinitas-spotlight-home-improvement-trends-2025",
    title: "Encinitas Spotlight: Top Home Improvement Trends We're Seeing in 2025",
    category: "North County Spotlight",
    preview:
      "What Encinitas homeowners are actually investing in this year — and what they're skipping.",
    readTime: "5 min read",
    heroImg: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
    heroAlt: "Encinitas home with indoor-outdoor living space",
    body: [
      "Encinitas projects in 2025 have a clear personality. The work being done isn't chasing trends — it's chasing usability. Indoor-outdoor flow, primary suite quality, and energy efficiency are showing up in nearly every project we're touching.",
      "Indoor-outdoor is the big one. La Cantina-style doors, expanded patios, and outdoor kitchens are no longer 'nice to have' upgrades — they are core scope. The Encinitas climate genuinely supports it, and homeowners are designing accordingly.",
      "Primary suites are getting serious attention. Bigger walk-in showers, freestanding tubs, dual vanities with quiet storage, and tighter closet design are pulling significant remodel budget away from secondary spaces. The shift makes sense — the room a homeowner spends the most personal time in is finally being prioritized.",
      "ADUs continue to be a major category, but the design language is evolving. Earlier ADU builds were utilitarian; the current wave is being treated as architecture in its own right, with finishes that match or extend the main home's vocabulary.",
      "What's slowing down? Cosmetic-only kitchen refreshes. Most Encinitas homeowners we talk to are choosing to wait and do a meaningful kitchen project rather than spend mid-five figures on paint and counters they'll redo in three years.",
      "The through line: longer thinking, fewer projects, deeper investment in the ones that get done.",
    ],
    pullQuote:
      "Encinitas in 2025 isn't doing more projects. It's doing fewer, better.",
  },
  {
    slug: "hvac-southern-california-repair-vs-replace",
    title: "HVAC in Southern California: When to Repair vs Replace",
    category: "DIY vs Hire a Pro",
    preview:
      "A simple framework for the most common HVAC question — without the upsell.",
    readTime: "5 min read",
    heroImg: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1600&q=80",
    heroAlt: "HVAC condenser unit outside a residential home",
    body: [
      "Southern California HVAC systems lead a relatively easy life. Mild climate, lower runtime hours, and no real freeze cycles mean equipment often outlives its rated lifespan. That makes the repair-vs-replace question more nuanced than it is in harsher regions.",
      "The first lens is age. Modern systems have a realistic lifespan of 12 to 18 years. Inside that window, repairs almost always make sense unless the failure is catastrophic. Past the window, repair money starts becoming bridge spending toward an inevitable replacement.",
      "The second lens is failure type. Capacitors, contactors, and motors are normal wear items and worth replacing on otherwise-healthy systems. Compressor or coil failures on older systems usually push the math toward replacement, because the surrounding components have similar lifespans.",
      "The third lens is the duct system. If a replacement is being considered, evaluating the ducts at the same time is non-negotiable. A new high-efficiency system on undersized or leaky ducts performs worse than the unit it replaced, and disturbing finished spaces twice in two years is the kind of avoidable cost that makes homeowners cynical.",
      "Finally, watch for upsells. 'Your system is on its last legs' as an opening line, without diagnostic data, is a sales pitch. Real recommendations come with measured pressure readings, refrigerant data, and photos.",
      "The honest framework: under 10 years, repair. 10 to 15 years, evaluate component-by-component. 15+ years, plan a replacement on your schedule, not on the day it fails.",
    ],
    pullQuote:
      "Repair under 10 years. Replace past 15. The years in between are where honest contractors earn trust.",
  },
];

export const getBlogPost = (slug?: string) =>
  blogPosts.find((p) => p.slug === slug);

export const getRelatedPosts = (slug: string, limit = 2) => {
  const current = getBlogPost(slug);
  if (!current) return [];
  const sameCat = blogPosts.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const others = blogPosts.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameCat, ...others].slice(0, limit);
};
