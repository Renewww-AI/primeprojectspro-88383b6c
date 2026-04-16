import { useState } from "react";

const faqs = [
  { q: "What types of home projects do you help with?", a: "We focus on premium residential improvement projects, including ADUs, kitchens, bathrooms, roofing, outdoor living areas, pool-related upgrades, and broader home improvement planning." },
  { q: "Do you only work in certain cities?", a: "Yes. We focus on defined service areas across San Diego County so we can provide a stronger level of support, coordination, and project attention to each client we work with." },
  { q: "Can you help if I'm still early in the planning stage?", a: "Yes. Many homeowners reach out before they're ready to build. Early guidance can help you define scope, compare options, and make smarter decisions before committing to anything." },
  { q: "Do you handle premium projects only?", a: "We're best aligned with homeowners who value thoughtful planning, clear communication, and quality execution over the lowest bid. If that fits what you're looking for, we're a strong fit." },
  { q: "Can you help with ADU planning and feasibility?", a: "Yes. We can help homeowners think through use case, property fit, scope direction, and early planning considerations for ADUs of all types — detached, attached, garage conversions, and more." },
  { q: "How do I get started?", a: "Schedule a consultation and tell us about your property, project goals, and timing. We'll help you understand the best next step with no obligation or sales pressure." },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-card py-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-charcoal mb-10 text-center">
          Answers for homeowners planning a major project
        </h2>
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-border py-5">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex justify-between items-center w-full text-left cursor-pointer text-base font-medium text-charcoal hover:text-olive transition-colors"
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
              style={{ maxHeight: openIndex === i ? "200px" : "0px" }}
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
