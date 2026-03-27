import React, { useState } from "react";

const SECTORS = [
  "Healthcare / Medical","Education","Finance / Credit / Insurance",
  "Security / Law Enforcement / Surveillance","Employment / Recruitment / HR",
  "Public Administration / Government Services","Agriculture",
  "Transportation / Infrastructure","Entertainment / Media / Creative",
  "Customer Service / Retail","Research & Development","Other / General Purpose",
];

const PROHIBITED = [
  "Subliminal manipulation of behaviour to cause harm",
  "Exploiting vulnerable groups (age, disability, social situation)",
  "Social scoring by public authorities",
  "Real-time remote biometric identification in public spaces",
];

const QUESTIONS = [
  { id: "sector", question: "Which sector or domain will your AI system operate in?", type: "select", options: SECTORS },
  { id: "decision_impact", question: "Will the system make or significantly influence decisions that affect individuals' rights, opportunities, or wellbeing?", type: "yesno" },
  { id: "human_oversight", question: "Is there meaningful human oversight before decisions take effect?", type: "yesno" },
  { id: "biometric", question: "Does the system process biometric data (face, voice, fingerprints, etc.)?", type: "yesno" },
  { id: "synthetic_media", question: "Does the system generate or manipulate images, audio, or video of real people?", type: "yesno" },
  { id: "vulnerable_groups", question: "Is the system likely to interact with or affect vulnerable groups (children, elderly, people with disabilities)?", type: "yesno" },
  { id: "public_sector", question: "Will the system be deployed by a public entity or county government?", type: "yesno" },
  { id: "social_scoring", question: "Does the system assign scores or rankings to people based on social behaviour or personal characteristics?", type: "yesno" },
];

const HIGH_RISK_SECTORS = ["Healthcare / Medical","Education","Finance / Credit / Insurance","Security / Law Enforcement / Surveillance","Employment / Recruitment / HR","Public Administration / Government Services","Agriculture"];

function getRiskLevel(answers) {
  if (!answers.sector) return null;
  if (answers.social_scoring === "yes" && answers.human_oversight !== "yes") {
    return { level: "Unacceptable", cls: "risk-unacceptable", icon: "block", color: "#dc2626",
      title: "Unacceptable Risk — Likely Prohibited",
      summary: "Your system appears to match characteristics of a prohibited AI system under Section 25(3).",
      obligations: ["Deployment is prohibited unless specific regulatory exceptions apply","Consult legal counsel before any development or testing","Review whether the system can be redesigned to remove prohibited characteristics"],
      refs: ["Section 25 — Risk Classification","Section 35(a) — Fine up to KES 5M or 2 years imprisonment"] };
  }
  const isHR = HIGH_RISK_SECTORS.includes(answers.sector);
  const signals = [isHR, answers.decision_impact === "yes", answers.biometric === "yes", answers.public_sector === "yes" && answers.decision_impact === "yes"].filter(Boolean).length;
  if (signals >= 2 || (isHR && answers.decision_impact === "yes")) {
    return { level: "High", cls: "risk-high", icon: "warning", color: "#ea580c",
      title: "High-Risk AI System",
      summary: "Your AI system is likely high-risk under Section 25(2)(b) based on its sector and decision-making impact.",
      obligations: ["Pre-deployment risk assessment with mitigation measures (§26(a))","Human rights impact assessment required (§26(b))","Ensure transparency, traceability and explainability (§26(c))","Maintain data records for at least 5 years (§26(d))","Data Protection Act compliance including DPIA (§26(e))","Robustness, accuracy and cybersecurity measures (§26(f))","Explicit consent + AI-labelling for biometric content (§26(g))","Register in the public high-risk AI register (§27)","Annual compliance reports required (§28(3))"],
      refs: ["Section 25 — Risk Classification","Section 26 — High-Risk Obligations","Section 27 — Public Register","Section 28 — Transparency"] };
  }
  if (answers.synthetic_media === "yes" || answers.decision_impact === "yes") {
    return { level: "Limited", cls: "risk-limited", icon: "info", color: "#d97706",
      title: "Limited Risk — Transparency Obligations Apply",
      summary: "Your system falls under limited risk. Primary obligations are transparency and disclosure to users.",
      obligations: ["Disclose to users that they are interacting with an AI system (§28(1))","Explain the nature, purpose and limitations of the system","Disclose the extent of automated decision-making","Describe bias monitoring and fairness measures","If generating images/audio of real people: obtain explicit consent (§26(g))"],
      refs: ["Section 28 — Transparency and Safeguards"] };
  }
  return { level: "Minimal", cls: "risk-minimal", icon: "check_circle", color: "#16a34a",
    title: "Minimal Risk",
    summary: "Your AI system appears to pose minimal risk based on the information provided.",
    obligations: ["Ethical practice and responsible deployment expected (§30)","Human-centric design principles encouraged (§32)","Consider workforce impact assessment if employment is affected (§33)","Monitor for changes in use case that could shift classification"],
    refs: ["Section 30 — Ethical Guidelines","Section 32 — Human-Centric AI"] };
}

export default function RiskClassifier() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const currentQ = QUESTIONS[step];
  const result = showResult ? getRiskLevel(answers) : null;
  const progress = Math.round((step / QUESTIONS.length) * 100);

  const handleAnswer = (value) => {
    const next = { ...answers, [currentQ.id]: value };
    setAnswers(next);
    if (step < QUESTIONS.length - 1) setStep(step + 1);
    else setShowResult(true);
  };
  const reset = () => { setAnswers({}); setStep(0); setShowResult(false); };

  return (
    <main style={{ background: "var(--surface-container-low)", minHeight: "100vh", paddingBottom: 56 }}>
      <div className="page-header">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="page-header-eyebrow">Section 25 — Risk Classification Tool</div>
          <h1>AI Risk Classifier</h1>
          <p>Answer a few questions to understand how your AI system is likely to be classified under the Kenya AI Bill 2026.</p>
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 24px" }}>
        {/* Prohibited callout */}
        <div className="disclaimer-box" style={{ marginBottom: 28 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: "#92400e", flexShrink: 0, marginTop: 1 }}>block</span>
          <div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "#92400e", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
              Always Prohibited (§25(3))
            </div>
            {PROHIBITED.map((p, i) => (
              <div key={i} style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#78350f", marginBottom: 3 }}>• {p}</div>
            ))}
          </div>
        </div>

        {!showResult ? (
          <div style={{ background: "white", borderRadius: 16, border: "1px solid var(--outline-variant)", overflow: "hidden" }}>
            {/* Progress bar */}
            <div style={{ background: "var(--surface-container-high)", height: 4 }}>
              <div style={{ height: "100%", background: "var(--primary)", width: `${progress}%`, transition: "width 0.3s" }} />
            </div>
            <div style={{ padding: "28px 28px" }}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "var(--outline)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
                Question {step + 1} of {QUESTIONS.length}
              </div>
              <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(16px,3vw,22px)", fontWeight: 700, marginBottom: 24, lineHeight: 1.3, color: "var(--on-surface)" }}>
                {currentQ.question}
              </h2>
              {currentQ.type === "select" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {currentQ.options.map((opt) => (
                    <button key={opt} onClick={() => handleAnswer(opt)} style={{
                      textAlign: "left", padding: "11px 16px",
                      border: "1px solid var(--outline-variant)", borderRadius: 10,
                      fontSize: 14, background: "var(--surface-container-low)",
                      fontFamily: "var(--font-body)", color: "var(--on-surface)", cursor: "pointer",
                      transition: "all 0.12s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.background = "#f0fdf4"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--outline-variant)"; e.currentTarget.style.background = "var(--surface-container-low)"; }}>
                      {opt}
                    </button>
                  ))}
                </div>
              )}
              {currentQ.type === "yesno" && (
                <div style={{ display: "flex", gap: 12 }}>
                  {[["Yes","yes","#f0fdf4","#bbf7d0","#166534"],["No","no","#fef2f2","#fecaca","#991b1b"],["Unsure","unsure","var(--surface-container-low)","var(--outline-variant)","var(--on-surface-variant)"]].map(([label, val, bg, border, color]) => (
                    <button key={val} onClick={() => handleAnswer(val)} style={{
                      flex: 1, padding: "13px", borderRadius: 10,
                      border: `1px solid ${border}`, background: bg,
                      fontFamily: "var(--font-headline)", fontSize: 14, fontWeight: 700,
                      color, cursor: "pointer",
                    }}>
                      {label}
                    </button>
                  ))}
                </div>
              )}
              {step > 0 && (
                <button onClick={() => setStep(step - 1)} style={{
                  marginTop: 18, fontFamily: "var(--font-body)", fontSize: 13,
                  color: "var(--outline)", cursor: "pointer", display: "flex", alignItems: "center", gap: 4,
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
                  Back
                </button>
              )}
            </div>
            {Object.keys(answers).length > 0 && (
              <div style={{ padding: "14px 28px", background: "var(--surface-container-low)", borderTop: "1px solid var(--surface-container-high)" }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "var(--outline)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Your answers</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {Object.entries(answers).map(([k, v]) => (
                    <span key={k} className="chip" style={{ fontSize: 11 }}>{k}: <strong>{v}</strong></span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : result && (
          <div>
            <div className={result.cls} style={{ borderRadius: 12, padding: "24px 24px", marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 28, color: result.color }}>
                  {result.icon}
                </span>
                <div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: result.color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3 }}>
                    Classification Result
                  </div>
                  <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(16px,3vw,22px)", color: result.color }}>
                    {result.title}
                  </h2>
                </div>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.7, color: "var(--on-surface)", marginBottom: 18 }}>{result.summary}</p>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "var(--outline)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
                  Applicable Obligations
                </div>
                {result.obligations.map((o, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7, alignItems: "flex-start" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 15, color: result.color, flexShrink: 0, marginTop: 1 }}>arrow_forward</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.6, color: "var(--on-surface)" }}>{o}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {result.refs.map((r) => <span key={r} className="chip" style={{ fontSize: 11 }}>{r}</span>)}
              </div>
            </div>
            <div className="disclaimer-box" style={{ marginBottom: 24 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: "#92400e", flexShrink: 0 }}>info</span>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#78350f", lineHeight: 1.65 }}>
                This is a preliminary indicative classification only. Final classification is determined by the AI Commissioner under Sections 25–26. Consult legal counsel for compliance decisions.
              </p>
            </div>
            <button onClick={reset} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--primary)", color: "white",
              padding: "12px 24px", borderRadius: 10,
              fontFamily: "var(--font-headline)", fontWeight: 700, fontSize: 14, cursor: "pointer",
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
              Classify Another System
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
