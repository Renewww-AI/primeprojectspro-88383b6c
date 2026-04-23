import Seo, { breadcrumbJsonLd } from "@/components/Seo";
import LegalLayout, { TocItem } from "@/components/LegalLayout";

const toc: TocItem[] = [
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "use-of-site", label: "2. Use of the Site" },
  { id: "ip", label: "3. Intellectual Property" },
  { id: "user-content", label: "4. User-Submitted Content" },
  { id: "consultations", label: "5. Consultations & No Guarantee" },
  { id: "warranties", label: "6. Disclaimer of Warranties" },
  { id: "liability", label: "7. Limitation of Liability" },
  { id: "third-party", label: "8. Third-Party Links" },
  { id: "law", label: "9. Governing Law" },
  { id: "changes", label: "10. Changes to Terms" },
  { id: "contact", label: "11. Contact Us" },
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

const Terms = () => {
  return (
    <>
      <Seo
        title="Terms of Service | Prime Projects"
        description="The terms that govern use of PrimeProjects.Pro, including content rights, community submissions, consultations, and limitations of liability."
        path="/terms"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <LegalLayout
        eyebrow="Legal"
        title="Terms of Service"
        intro="These Terms of Service govern your access to and use of PrimeProjects.Pro, including any content, forms, community submissions, and related features. By using the site, you agree to these terms — please read them carefully."
        lastUpdated={today}
        toc={toc}
        otherLinkLabel="View Privacy Policy →"
        otherLinkHref="/privacy-policy"
      >
        <Section id="acceptance" title="1. Acceptance of Terms">
          <p>By accessing or using PrimeProjects.Pro (the "Site"), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use the Site. These terms apply to all visitors, registered users, and contributors to the community blog.</p>
        </Section>

        <Section id="use-of-site" title="2. Use of the Site">
          <p><strong>Permitted use.</strong> You may use the Site for lawful, personal, and non-commercial purposes — including reading articles, exploring service information, and submitting genuine consultation requests or community blog posts.</p>
          <p><strong>Prohibited use.</strong> You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use automated tools, bots, scrapers, or crawlers to extract content or data without our prior written permission.</li>
            <li>Impersonate any person or entity, or misrepresent your affiliation with anyone.</li>
            <li>Submit false, misleading, defamatory, harassing, hateful, or unlawful content.</li>
            <li>Attempt to interfere with, disable, or compromise the security or integrity of the Site or its underlying infrastructure.</li>
            <li>Use the Site to transmit malware, spam, or any other harmful or unwanted content.</li>
            <li>Engage in any activity that violates applicable laws or regulations.</li>
          </ul>
        </Section>

        <Section id="ip" title="3. Intellectual Property">
          <p>All content on the Site — including text, images, photography, graphics, logos, page layouts, design elements, and underlying code — is the property of PrimeProjects.Pro or its licensors and is protected by United States and international copyright, trademark, and other intellectual property laws.</p>
          <p>You may not copy, reproduce, modify, republish, distribute, sell, or use any content from the Site for commercial purposes without prior written permission from PrimeProjects.Pro. Limited personal, non-commercial use — such as sharing a link or quoting a short excerpt with attribution — is permitted.</p>
        </Section>

        <Section id="user-content" title="4. User-Submitted Content">
          <p>The Site includes a community blog ("The Homeowner's Guide") where homeowners can submit posts about their projects and experiences. By submitting any content — including text, images, comments, or other materials — you agree to the following:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You grant PrimeProjects.Pro a worldwide, non-exclusive, royalty-free, sublicensable license to use, reproduce, edit, publish, display, distribute, and promote your submission on the Site, in marketing materials, and on associated channels.</li>
            <li>You confirm that the submission is your original work and does not infringe on the copyright, trademark, privacy, publicity, or other rights of any third party.</li>
            <li>You confirm that any people or property depicted in submitted images are shown with appropriate consent.</li>
            <li>PrimeProjects.Pro reserves the right to edit submissions for clarity, length, accuracy, or style; to reject any submission for any reason; and to remove or unpublish content at any time without notice.</li>
            <li>You retain ownership of your underlying content, but you cannot revoke the license granted above for content already published on the Site.</li>
          </ul>
        </Section>

        <Section id="consultations" title="5. Consultation Requests & No Professional Guarantee">
          <p>Submitting a consultation request, contact form, or any other inquiry through the Site does not create a contract, binding agreement, or guarantee that PrimeProjects.Pro will provide services. Consultations are subject to availability, scope, and mutual agreement.</p>
          <p>Articles, planning guides, project examples, and other content on the Site are provided for general informational purposes only. They are not professional construction, engineering, legal, financial, or design advice. Always consult qualified, licensed professionals before making decisions about your home, structure, or budget.</p>
        </Section>

        <Section id="warranties" title="6. Disclaimer of Warranties">
          <p>The Site and all content are provided "as is" and "as available," without warranties of any kind, whether express or implied — including, without limitation, implied warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement. PrimeProjects.Pro does not warrant that the Site will be uninterrupted, secure, error-free, or free of viruses or other harmful components.</p>
        </Section>

        <Section id="liability" title="7. Limitation of Liability">
          <p>To the fullest extent permitted by law, PrimeProjects.Pro and its owners, employees, contractors, and affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill, arising from or related to your use of (or inability to use) the Site, any content on it, or any actions taken in reliance on the Site. In jurisdictions that do not allow the exclusion of certain warranties or liabilities, our liability will be limited to the maximum extent permitted.</p>
        </Section>

        <Section id="third-party" title="8. Third-Party Links">
          <p>The Site may contain links to third-party websites, products, or services. These links are provided for convenience and informational purposes only. PrimeProjects.Pro does not endorse and is not responsible for the content, accuracy, security, or practices of any third party. Your interactions with third parties are solely between you and that third party.</p>
        </Section>

        <Section id="law" title="9. Governing Law">
          <p>These Terms of Service are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. You agree that any dispute, claim, or controversy arising out of or relating to these terms or your use of the Site will be resolved exclusively in the state or federal courts located in San Diego County, California, and you consent to the personal jurisdiction of those courts.</p>
        </Section>

        <Section id="changes" title="10. Changes to Terms">
          <p>PrimeProjects.Pro reserves the right to modify or update these Terms of Service at any time. When we do, we will revise the "Last Updated" date at the top of this page and, where appropriate, provide additional notice on the Site. Your continued use of the Site after any change constitutes your acceptance of the updated terms.</p>
        </Section>

        <Section id="contact" title="11. Contact Us">
          <p>For questions about these Terms of Service, please contact:</p>
          <p>
            <strong>PrimeProjects.Pro</strong><br />
            San Diego County, California<br />
            Email: <a href="mailto:legal@primeprojects.pro" className="text-olive hover:underline">legal@primeprojects.pro</a>
          </p>
        </Section>
      </LegalLayout>
    </>
  );
};

export default Terms;
