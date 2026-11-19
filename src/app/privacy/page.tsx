import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "Privacy policy and international data governance at Auvrion Technologies.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
      <span className="eyebrow">Governance & Compliance</span>
      <h1 className="font-display mt-4 text-4xl font-extrabold text-navy sm:text-5xl">
        Corporate Privacy Notice
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: November 2026</p>

      <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">
        <p>
          Auvrion Technologies (&ldquo;Auvrion&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) treats all client, partner,
          and visitor information with the highest degree of confidentiality and commercial rigor.
          This Privacy Notice outlines how we process information gathered through our digital web properties.
        </p>

        <h2 className="font-display text-2xl font-bold text-navy pt-4">
          1. International Data Protection Standards
        </h2>
        <p>
          We operate across multiple sovereign legal jurisdictions including the Kingdom of Saudi Arabia,
          the United Arab Emirates, the United Kingdom, and the United States. Our data handling procedures
          are designed to align with:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Saudi Personal Data Protection Law (PDPL) & National Cybersecurity Authority (NCA) frameworks.</li>
          <li>UAE Federal Decree Law No. 45 of 2021 on Personal Data Protection.</li>
          <li>UK Data Protection Act 2018 and UK GDPR.</li>
          <li>US state and federal data privacy guidelines including California CCPA/CPRA.</li>
        </ul>

        <h2 className="font-display text-2xl font-bold text-navy pt-4">
          2. Scope of Inquiries & Briefs
        </h2>
        <p>
          Information submitted via our RFP estimator, contact forms, or direct correspondence is utilized
          exclusively to evaluate your inquiry, draft technical scopes, and facilitate potential engagements.
          We never sell, rent, or lease corporate or personal information to third parties.
        </p>

        <h2 className="font-display text-2xl font-bold text-navy pt-4">
          3. Confidentiality & Bilateral NDAs
        </h2>
        <p>
          All commercial project briefs are subject to strict bilateral non-disclosure protections.
          Prospective clients can request standard mutual NDAs countersigned by our legal counsel
          prior to transferring technical documentation, architectural schematics, or operational data.
        </p>

        <h2 className="font-display text-2xl font-bold text-navy pt-4">
          4. Contact Our Data Governance Team
        </h2>
        <p>
          For questions regarding our privacy practices, data deletion requests, or compliance audits,
          please contact:{" "}
          <a href={`mailto:${company.email}`} className="font-bold text-brand hover:underline">
            {company.email}
          </a>
        </p>
      </div>
    </article>
  );
}
