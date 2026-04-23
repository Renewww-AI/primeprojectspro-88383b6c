const FinalCta = () => {
  return (
    <section className="bg-charcoal py-24 px-4 md:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-[42px] md:leading-[1.2] text-primary-foreground mb-4">
          Schedule your home project consultation
        </h2>
        <p className="text-lg text-primary-foreground/85 mb-8">
          Whether you're exploring an ADU, planning a remodel, replacing a roof, or rethinking your
          backyard, Prime Projects helps you move forward with more clarity and less guesswork.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#intake"
            className="bg-card text-charcoal rounded-full px-8 py-3 font-medium hover:bg-stone-alt transition-all"
          >
            Schedule a Consultation
          </a>
          <a
            href="tel:6190000000"
            className="border border-primary-foreground text-primary-foreground rounded-full px-8 py-3 text-sm font-medium hover:bg-primary-foreground hover:text-charcoal transition-all"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
