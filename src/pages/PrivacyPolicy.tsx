import Seo, { breadcrumbJsonLd } from "@/components/Seo";
import LegalLayout, { TocItem } from "@/components/LegalLayout";

const toc: TocItem[] = [
  { id: "information-we-collect", label: "1. Information We Collect" },
  { id: "how-we-use", label: "2. How We Use Your Information" },
  { id: "cookies", label: "3. Cookies & Tracking" },
  { id: "sharing", label: "4. How We Share Information" },
  { id: "retention", label: "5. Data Retention" },
  { id: "your-rights", label: "6. Your Rights" },
  { id: "third-party-links", label: "7. Third-Party Links" },
  { id: "children", label: "8. Children's Privacy" },
  { id: "changes", label: "9. Changes to This Policy" },
  { id: "contact", label: "10. Contact Us" },
];

const today = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-28 mb-12">
    <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-5">{title}</h2>
    <div className="space-y-4 text-charcoal/85">{children}</div>
  </section>
);

const PrivacyPolicy = () => {
  return (
    <>
      <Seo
        title="Privacy Policy | Prime Projects"
        description="How PrimeProjects.Pro collects, uses, and protects information from visitors and homeowners across San Diego County."
        path="/privacy-policy"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <LegalLayout
        eyebrow="Legal"
        title="Privacy Policy"
        intro="This Privacy Policy explains, in plain English, what information PrimeProjects.Pro collects when you visit our website, how we use it, and the choices you have. It applies to everyone who visits primeprojects.pro or interacts with our forms, content, or services."
        lastUpdated={today}
        toc={toc}
        otherLinkLabel="View Terms of Service →"
        otherLinkHref="/terms"
      >
        <Section id="information-we-collect" title="1. Information We Collect">
          <p><strong>Information you give us.</strong> When you submit a consultation request, contact form, blog submission, or other inquiry, we collect the details you provide — typically your name, email address, phone number, city, and a description of your project or message.</p>
          <p><strong>Information collected automatically.</strong> When you visit our site, we automatically receive certain technical information, including your IP address, browser type and version, device type, operating system, referring URL, pages viewed, time spent on each page, and approximate geographic location.</p>
          <p><strong>Information from third parties.</strong> We use analytics and advertising tools — such as Google Analytics and similar services — that may provide aggregated or pseudonymous information about how visitors find and use our site. If you arrive through a paid ad campaign, the ad platform may share basic attribution data with us.</p>
        </Section>

        <Section id="how-we-use" title="2. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to consultation requests, questions, and other inquiries you send us.</li>
            <li>Schedule, prepare for, and follow up on project consultations.</li>
            <li>Improve site performance, navigation, content quality, and overall user experience.</li>
            <li>Send relevant follow-up communications about your project, with a clear opt-out in every message.</li>
            <li>Detect, prevent, and address technical issues, fraud, or abuse.</li>
            <li>Comply with applicable legal obligations, court orders, or government requests.</li>
          </ul>
          <p>We do not use your information for automated decision-making that produces legal effects on you.</p>
        </Section>

        <Section id="cookies" title="3. Cookies & Tracking Technologies">
          <p>Cookies are small text files stored on your device that help websites function and gather analytics. PrimeProjects.Pro uses a limited number of cookies and similar technologies for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential cookies</strong> that keep the site functional, secure, and fast.</li>
            <li><strong>Analytics cookies</strong> (e.g., Google Analytics) that help us understand which content is useful and where we can improve.</li>
            <li><strong>Attribution cookies</strong> that help us measure the effectiveness of our marketing campaigns in aggregate.</li>
          </ul>
          <p>You can manage or disable cookies at any time through your browser settings. Most browsers let you block all cookies, accept only first-party cookies, or be notified before a cookie is set. Disabling cookies may affect parts of the site, such as form submissions or remembered preferences.</p>
        </Section>

        <Section id="sharing" title="4. How We Share Your Information">
          <p><strong>We do not sell your personal information.</strong> Period.</p>
          <p>We share information only in limited circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service providers</strong> who help us operate the site and our business — such as web hosting, database, analytics, email delivery, and customer relationship tools — and who are contractually bound to handle your data securely.</li>
            <li><strong>Legal disclosure</strong> when required by law, subpoena, court order, or to protect the rights, property, or safety of PrimeProjects.Pro, our customers, or the public.</li>
            <li><strong>Business transfers</strong> in connection with a merger, acquisition, financing, or sale of assets, in which case any successor will be bound by the commitments in this policy.</li>
          </ul>
        </Section>

        <Section id="retention" title="5. Data Retention">
          <p>We retain personal information only for as long as is reasonably necessary to fulfill the purposes for which it was collected, including legitimate business and legal requirements. Consultation request data is typically kept for up to 36 months so we can reference prior conversations and project history. Analytics data is retained according to the defaults of the underlying analytics provider, generally 14–26 months. You may request earlier deletion at any time using the contact information below.</p>
        </Section>

        <Section id="your-rights" title="6. Your Rights">
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access</strong> the personal information we hold about you.</li>
            <li><strong>Correct</strong> information that is inaccurate or out of date.</li>
            <li><strong>Delete</strong> personal information, subject to limited legal exceptions.</li>
            <li><strong>Opt out</strong> of marketing communications at any time.</li>
            <li><strong>Object to or restrict</strong> certain processing of your information.</li>
          </ul>
          <p>To make a request, email us at <a href="mailto:consult@primeprojects.pro" className="text-olive hover:underline">consult@primeprojects.pro</a>. We will respond within 30 days.</p>
          <p><strong>California Residents (CCPA/CPRA).</strong> If you are a California resident, you have additional rights under the California Consumer Privacy Act, including the right to know what categories of personal information we collect, the sources of that information, the business purposes for collection, and the categories of third parties with whom we share it. You also have the right to request deletion of your personal information, the right to correct inaccurate information, and the right to opt out of any "sale" or "sharing" of your personal information for cross-context behavioral advertising. PrimeProjects.Pro does not sell personal information. You will not be discriminated against for exercising any of these rights.</p>
        </Section>

        <Section id="third-party-links" title="7. Third-Party Links">
          <p>Our site may link to third-party websites — for example, manufacturer pages, partner businesses, or industry resources. These third parties operate independently and have their own privacy policies and terms. PrimeProjects.Pro is not responsible for the content, security, or practices of any third-party site, and we encourage you to review the privacy policy of any site you visit.</p>
        </Section>

        <Section id="children" title="8. Children's Privacy">
          <p>PrimeProjects.Pro is a residential improvement business and is not directed to children under the age of 13. We do not knowingly collect personal information from anyone under 13. If you believe a child has provided us with personal information, please contact us so we can delete it promptly.</p>
        </Section>

        <Section id="changes" title="9. Changes to This Policy">
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we do, we will revise the "Last Updated" date at the top of this page. Material changes will be highlighted on the site or, where appropriate, communicated to you directly. Your continued use of the site after an update constitutes acceptance of the revised policy.</p>
        </Section>

        <Section id="contact" title="10. Contact Us">
          <p>For privacy-related questions, requests, or concerns, please contact:</p>
          <p>
            <strong>PrimeProjects.Pro</strong><br />
            San Diego County, California<br />
            Email: <a href="mailto:consult@primeprojects.pro" className="text-olive hover:underline">consult@primeprojects.pro</a>
          </p>
        </Section>
      </LegalLayout>
    </>
  );
};

export default PrivacyPolicy;
