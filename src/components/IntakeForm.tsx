const IntakeForm = () => {
  return (
    <section id="intake" className="relative z-10 -mt-8 mb-0 px-4">
      <div className="bg-card rounded-3xl shadow-xl border border-border p-6 md:p-8 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-[40%]">
            <p className="text-xs uppercase tracking-widest text-brass mb-3">Start your project plan</p>
            <h2 className="text-2xl font-medium text-charcoal mb-4">
              Tell us what you're considering.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tell us about your property, project goals, and ideal timing. We'll help you understand
              the next steps, likely scope, and the right path forward.
            </p>
          </div>
          <form className="lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <select className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-olive bg-stone-bg">
              <option value="">Project Type</option>
              <option>ADU</option>
              <option>Kitchen Remodel</option>
              <option>Bathroom Remodel</option>
              <option>Roofing</option>
              <option>Outdoor Living</option>
              <option>Pool & Backyard</option>
              <option>Whole-Home Planning</option>
              <option>Other</option>
            </select>
            <select className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-olive bg-stone-bg">
              <option value="">City</option>
              <option>San Diego</option>
              <option>Oceanside</option>
              <option>Carlsbad</option>
              <option>Encinitas</option>
              <option>San Marcos</option>
              <option>Vista</option>
              <option>Del Mar</option>
              <option>Rancho Santa Fe</option>
              <option>Other</option>
            </select>
            <select className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-olive bg-stone-bg">
              <option value="">Target Timeline</option>
              <option>ASAP</option>
              <option>1–3 months</option>
              <option>3–6 months</option>
              <option>6–12 months</option>
              <option>Just exploring</option>
            </select>
            <select className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-olive bg-stone-bg">
              <option value="">Budget Range</option>
              <option>Under $25K</option>
              <option>$25K–$75K</option>
              <option>$75K–$150K</option>
              <option>$150K–$300K</option>
              <option>$300K+</option>
              <option>Not sure yet</option>
            </select>
            <input
              type="text"
              placeholder="Your Name"
              className="md:col-span-2 w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-olive bg-stone-bg"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-olive bg-stone-bg"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-olive bg-stone-bg"
            />
            <button
              type="submit"
              className="md:col-span-2 w-full bg-olive text-primary-foreground rounded-full px-8 py-3 text-sm font-medium hover:bg-olive-dark transition-all"
            >
              Request My Consultation
            </button>
            <p className="md:col-span-2 text-xs text-muted-foreground text-center">
              No commitment required. We'll follow up within 1 business day.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default IntakeForm;
