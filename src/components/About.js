import React from "react";
import { Link } from "react-router-dom";

const SERVICES = [
  { icon: "manage_search", title: "AI Assurance", tagline: "Transparent, fair, and compliant AI systems.", items: ["Algorithmic Auditing","Impact & Risk Assessment","Regulatory Readiness","Data Insight & Analytics","Cybersecurity & Systems Integrity"] },
  { icon: "account_balance", title: "AI Governance", tagline: "Ethics embedded in decisions and organisational systems.", items: ["AI & Digital Policy Development","AI Governance Frameworks","Ethical Maturity Diagnostics","Change & Capability Management","AI & Digital Tool Selection"] },
  { icon: "shield_person", title: "Digital Rights", tagline: "Privacy, fairness, and human dignity in the digital economy.", items: ["Digital Rights Strategy & Advisory","Responsible Data Practices","Impact Research & Thought Leadership","Ethics Training"] },
];

const CREDS = [
  { code: "AIGP", label: "AI Governance Professional (IAPP)" },
  { code: "ISO", label: "ISO/IEC 42001 Lead Implementer" },
  { code: "LSS", label: "Lean Six Sigma Black Belt" },
  { code: "MIT", label: "Data Science (MIT IDSS)" },
  { code: "MBA", label: "Hochschule Anhalt, Germany" },
];

const QUICK = [
  { to: "/explorer", icon: "article", label: "Bill Explorer" },
  { to: "/risk-classifier", icon: "warning", label: "Risk Classifier" },
  { to: "/glossary", icon: "book", label: "Glossary" },
];

function FormField({ label, placeholder, type = "text" }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label className="form-label">{label}</label>
      <input className="form-input" type={type} placeholder={placeholder} />
    </div>
  );
}

export default function About() {
  return (
    <main style={{ background: "var(--surface-container-low)", minHeight: "100vh", paddingBottom: 56 }}>
      <div className="page-header">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="page-header-eyebrow">About this project</div>
          <h1>Making Kenya's AI Bill <span style={{ color: "#86efac" }}>accessible to everyone</span></h1>
          <p>An independent educational resource built to help practitioners, organisations, and citizens understand Kenya's first AI governance legislation — before it becomes law.</p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "36px 24px" }}>
        {/* Disclaimer */}
        <div className="disclaimer-box" style={{ marginBottom: 36 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: "#92400e", flexShrink: 0, marginTop: 1 }}>info</span>
          <div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "#92400e", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 5 }}>Educational Purpose</div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#78350f", lineHeight: 1.65 }}>
              This site is an independent educational tool built in anticipation of the Kenya Artificial Intelligence Bill 2026 passing into law. It is not an official government resource. All content is derived from the publicly gazetted Senate Bill (Gazette Supplement No. 15, 19 February 2026). For legal compliance decisions, always refer to the official gazette and consult qualified legal counsel.
            </p>
          </div>
        </div>

        {/* About the project */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(18px,3vw,24px)", marginBottom: 14 }}>About the Project</h2>
          <div style={{ background: "white", border: "1px solid var(--outline-variant)", borderRadius: 16, padding: "24px" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.8, color: "var(--on-surface-variant)", marginBottom: 14 }}>
              The Kenya AI Bill 2026 Explorer was built to do what dense legislative text rarely does — make governance accessible. Inspired by the EU AI Act interactive explorer, this site structures the Bill's 37 sections across searchable, filterable pages so that developers, compliance teams, executives, civil society, and curious citizens can navigate it without a law degree.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.8, color: "var(--on-surface-variant)", marginBottom: 18 }}>
              This resource connects directly to the <strong style={{ color: "var(--on-surface)" }}>African AI Governance Brief</strong> — a practitioner-focused newsletter covering AI policy, regulation, and governance developments across Africa.
            </p>
            <a href="https://edemkw.substack.com" target="_blank" rel="noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--surface-container-low)", border: "1px solid var(--secondary-container)",
              color: "var(--primary)", padding: "9px 16px", borderRadius: 8,
              fontFamily: "var(--font-headline)", fontSize: 13, fontWeight: 700,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>newspaper</span>
              Read the African AI Governance Brief
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
            </a>
          </div>
        </section>

        {/* About Edem */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(18px,3vw,24px)", marginBottom: 14 }}>The Practitioner Behind This</h2>
          <div style={{ background: "white", border: "1px solid var(--outline-variant)", borderRadius: 16, padding: "24px" }}>
            <div className="about-bio-grid" style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, alignItems: "start" }}>
              {/* ID card */}
              <div style={{ background: "var(--surface-container-low)", border: "1px solid var(--outline-variant)", borderRadius: 12, padding: "18px" }}>
                <img
                  src="/edem-wunu.jpg"
                  alt="Edem Kwasi Wunu"
                  style={{
                    width: 80, height: 80, borderRadius: "50%",
                    objectFit: "cover", objectPosition: "center top",
                    border: "3px solid var(--secondary-container)",
                    marginBottom: 10,
                  }}
                />
                <div style={{ fontFamily: "var(--font-headline)", fontSize: 15, fontWeight: 700, marginBottom: 2 }}>Edem Kwasi Wunu</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 9, color: "var(--outline)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 14 }}>AI Governance & Risk Practitioner</div>
                {CREDS.map((c) => (
                  <div key={c.code} style={{ display: "flex", gap: 7, alignItems: "flex-start", marginBottom: 6 }}>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700, background: "var(--primary)", color: "white", padding: "1px 5px", borderRadius: 3, flexShrink: 0, marginTop: 1 }}>{c.code}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--on-surface-variant)", lineHeight: 1.4 }}>{c.label}</span>
                  </div>
                ))}
                <a href="https://www.linkedin.com/in/ekwunu/" target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "#0077b5", color: "white", padding: "8px 12px", borderRadius: 8, fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, marginTop: 14 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>link</span>
                  Connect on LinkedIn
                </a>
                <a href="https://www.algoviva.com/contact" target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "white", border: "1px solid var(--outline-variant)", color: "var(--on-surface)", padding: "8px 12px", borderRadius: 8, fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, marginTop: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>language</span>
                  Contact via Algoviva
                </a>
              </div>
              {/* Bio */}
              <div>
                {[
                  "Edem is an independent AI governance and risk practitioner based in Africa, advising organisations on responsible AI deployment, regulatory compliance, and governance framework design. He holds the AI Governance Professional (AIGP) certification from the IAPP, ISO/IEC 42001, Lean Six Sigma Black Belt, an MIT IDSS Data Science credential, and an MBA from Hochschule Anhalt (Germany).",
                  "His advisory work spans financial services, public sector institutions, and technology companies across Africa and the Middle East. He previously served as Lead for AI and Automation Engineering at GCB Bank PLC (Ghana), where he built enterprise AI governance frameworks, deployed generative AI systems, and led automation programmes across the organisation.",
                  "He publishes the African AI Governance Brief on Substack and is an active conference speaker and panelist on AI governance in emerging markets. His practitioner lens — combining policy, risk, and implementation experience — informs everything on this site.",
                  "If your organisation needs support navigating the Kenya AI Bill, building an AI governance programme, or preparing for regulatory compliance in Africa, reach out directly through LinkedIn or Algoviva.",
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.8, color: "var(--on-surface-variant)", marginBottom: 12 }}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Algoviva services */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(18px,3vw,24px)", marginBottom: 8 }}>Need Hands-On Support?</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface-variant)", marginBottom: 20 }}>
            <a href="https://www.algoviva.com" target="_blank" rel="noreferrer" style={{ color: "var(--primary)", fontWeight: 700 }}>Algoviva</a>{" "}
            delivers AI assurance, governance, and digital rights services to help organisations build AI systems that are compliant, ethical, and trusted.
          </p>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 20 }}>
            {SERVICES.map((s) => (
              <div key={s.title} style={{ background: "white", border: "1px solid var(--outline-variant)", borderTop: `3px solid var(--primary)`, borderRadius: 12, padding: "20px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--surface-container-low)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: "var(--primary)" }}>{s.icon}</span>
                </div>
                <div style={{ fontFamily: "var(--font-headline)", fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{s.title}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--on-surface-variant)", fontStyle: "italic", marginBottom: 12, lineHeight: 1.5 }}>{s.tagline}</div>
                {s.items.map((item) => (
                  <div key={item} style={{ display: "flex", gap: 7, marginBottom: 5, alignItems: "flex-start" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14, color: "var(--primary)", flexShrink: 0, marginTop: 1 }}>arrow_forward</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--on-surface)" }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* USP block */}
          <div style={{ background: "linear-gradient(135deg, #052e16 0%, #166534 100%)", color: "white", borderRadius: 12, padding: "24px" }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Why Algoviva</div>
            <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(16px,2.5vw,20px)", marginBottom: 10, fontWeight: 700 }}>African context. Global standards. Practical results.</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.82)", lineHeight: 1.7, marginBottom: 18, maxWidth: 580 }}>
              Most AI governance consultancies apply frameworks built for Europe or North America without adaptation. Algoviva is grounded in African regulatory realities while fully aligned to global standards including the EU AI Act, NIST AI RMF, and ISO/IEC 42001.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="https://www.algoviva.com/contact" target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#ca8a04", color: "white", padding: "10px 20px", borderRadius: 8, fontFamily: "var(--font-headline)", fontSize: 13, fontWeight: 700 }}>
                Start a Conversation
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_forward</span>
              </a>
              <a href="https://www.algoviva.com/services" target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "white", padding: "10px 20px", borderRadius: 8, fontFamily: "var(--font-headline)", fontSize: 13, fontWeight: 600 }}>
                View All Services
              </a>
            </div>
          </div>
        </section>

        {/* Quick links */}
        <section>
          <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(16px,2.5vw,20px)", marginBottom: 14 }}>Explore the Bill</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 10 }}>
            {QUICK.map((l) => (
              <Link key={l.to} to={l.to} style={{
                display: "flex", alignItems: "center", gap: 10,
                background: "white", border: "1px solid var(--outline-variant)",
                borderRadius: 10, padding: "14px 16px",
                fontFamily: "var(--font-headline)", fontSize: 14, fontWeight: 700,
                color: "var(--on-surface)", transition: "border-color 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--primary)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--outline-variant)"}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: "var(--primary)" }}>{l.icon}</span>
                {l.label}
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="site-footer" style={{ marginTop: 32 }}>
        <div className="site-footer-inner">
          <div><div className="footer-logo">Kenya AI Bill 2026</div><div className="footer-copy">Educational resource · Not legal advice</div></div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <a href="https://www.linkedin.com/in/ekwunu/" target="_blank" rel="noreferrer" style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--primary)", fontWeight: 600 }}>LinkedIn</a>
            <a href="https://www.algoviva.com" target="_blank" rel="noreferrer" style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--primary)", fontWeight: 600 }}>Algoviva</a>
            <a href="https://edemkw.substack.com" target="_blank" rel="noreferrer" style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--primary)", fontWeight: 600 }}>Newsletter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
