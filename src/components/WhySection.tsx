const cards = [
  {
    icon: (
      <svg className="w-8 h-8 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Clear scope from the start",
    body: "We help define the project clearly so you can compare options, understand priorities, and avoid preventable surprises.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "Premium homeowner experience",
    body: "Expect organized communication, guided decisions, and a higher level of attention throughout the process.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Quality-minded coordination",
    body: "From design planning to trade sequencing, we focus on details that protect quality and keep momentum moving.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Practical transparency",
    body: "Budgets, timelines, finishes, and project decisions should feel understandable — not hidden behind vague contractor language.",
  },
];

const WhySection = () => {
  return (
    <section id="about" className="bg-card py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-brass mb-4">A better way to plan home projects</p>
        <h2 className="text-3xl md:text-4xl font-medium text-charcoal mb-6 max-w-3xl mx-auto">
          Concierge-style service for homeowners who want confidence, not confusion.
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
          Large home improvement decisions come with real budget, timeline, and quality concerns. Prime
          Projects is built to make the process easier to understand and easier to manage. We help
          homeowners move from ideas to clear scope, smart options, and well-coordinated execution with
          less guesswork along the way.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="border border-border rounded-2xl p-8 text-left hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-medium text-charcoal mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
