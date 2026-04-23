const steps = [
  { num: "01", title: "Consultation", body: "We start with your goals, property, priorities, and the type of project you are considering." },
  { num: "02", title: "Scope & Options", body: "We help clarify the project, identify practical options, and align direction with budget, timing, and expectations." },
  { num: "03", title: "Planning & Coordination", body: "Once the path is clear, we move into organized planning, scheduling, and project preparation." },
  { num: "04", title: "Execution & Completion", body: "The goal is a well-managed project and a result that feels finished, considered, and worth the investment." },
];

const ProcessSection = () => {
  return (
    <section className="bg-olive py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-[hsl(36_45%_65%)] mb-4">How it works</p>
        <h2 className="text-3xl md:text-4xl font-medium text-primary-foreground mb-4">
          A more organized path from idea to completed project
        </h2>
        <p className="text-base text-primary-foreground/85 max-w-2xl mx-auto mb-12">
          Homeowners do better when they understand what comes next. Our process is designed to reduce
          uncertainty and create a smoother experience from initial conversation through final delivery.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-primary-foreground/10 rounded-2xl p-6 border border-primary-foreground/25 text-left"
            >
              <span className="text-5xl font-light text-[hsl(36_45%_65%)]">{step.num}</span>
              <h3 className="text-lg font-medium text-primary-foreground mt-4 mb-2">{step.title}</h3>
              <p className="text-sm text-primary-foreground/85 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="#intake"
            className="border border-primary-foreground text-primary-foreground rounded-full px-8 py-3 text-sm font-medium hover:bg-primary-foreground hover:text-charcoal transition-all inline-block"
          >
            Schedule Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
