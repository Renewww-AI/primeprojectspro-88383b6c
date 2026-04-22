import { useState } from "react";

const faqs = [
  {
    q: "How much does a home remodel or roof replacement cost in San Diego?",
    a: "Home improvement costs in San Diego County vary widely by scope, materials, and home age. A bathroom remodel typically starts around $25K, kitchen remodels range from $60K–$200K+, and a full roof replacement usually falls between $15K–$45K depending on size and system. We help homeowners build realistic budgets before any contractor quotes are signed.",
  },
  {
    q: "What is the typical timeline for a kitchen, bathroom, or roofing project?",
    a: "Most bathroom remodels run 4–8 weeks of active construction, kitchen remodels 8–16 weeks, and roof replacements 3–7 days. Planning, design, and permitting usually add 4–12 weeks before work begins. We map out a realistic schedule up front so you're not surprised by delays.",
  },
  {
    q: "How does the home concierge process work from start to finish?",
    a: "We start with a free consultation to understand your property, goals, and timing. From there we help define scope, compare qualified contractors, review bids, and provide oversight throughout construction. You stay in control of every decision while we handle the coordination and clarity.",
  },
  {
    q: "Which home improvement services and project types do you cover?",
    a: "We support residential projects across kitchens, bathrooms, roofing, flooring, painting, HVAC, landscaping, outdoor living, pools, home audio and smart home, ADUs, and full general contractor remodels. Our focus is premium home services for homeowners across San Diego North County.",
  },
  {
    q: "What cities in San Diego County do you serve?",
    a: "We serve homeowners across North County San Diego, including Oceanside, Carlsbad, Encinitas, Rancho Santa Fe, San Marcos, and Vista. Staying focused on this region lets us maintain relationships with the best local contractors and respond quickly to project needs.",
  },
  {
    q: "Are your recommended contractors licensed, bonded, and insured?",
    a: "Yes. Every contractor we recommend is verified for active California state licensing, bonding, general liability, and workers' compensation insurance. We also vet recent project history and reviews so you're only choosing between qualified, accountable professionals.",
  },
  {
    q: "How do I get started with a free home project consultation?",
    a: "Getting started is simple — schedule a free consultation through our intake form and tell us about your property, project goals, and timing. We'll follow up within one business day to walk through your options. There's no obligation and no sales pressure.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section id="faq" className="bg-card py-20 px-4 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-charcoal mb-10 text-center">
          Answers for homeowners planning a major project
        </h2>
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-border py-5">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex justify-between items-center w-full text-left cursor-pointer text-base font-medium text-charcoal hover:text-olive transition-colors"
              aria-expanded={openIndex === i}
            >
              {faq.q}
              <svg
                className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: openIndex === i ? "400px" : "0px" }}
            >
              <p className="text-sm text-muted-foreground leading-relaxed pt-3 pr-8">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
