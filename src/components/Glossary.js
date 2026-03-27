import React, { useState } from "react";
import { parts } from "../data";

const statutory = parts.find((p) => p.id === "part-1").sections.find((s) => s.id === "s2").definitions;

const extra = [
  { term: "AI Commissioner", definition: "The head of the Office of the Artificial Intelligence Commissioner, appointed by the President with Parliament's approval for a 5-year term (renewable once). Must hold a master's degree and have 10+ years' relevant experience. (Sections 5–6)" },
  { term: "Conformity Audit", definition: "A formal audit conducted by the Office to verify that an AI system complies with the Act's requirements, particularly for high-risk systems. (Section 10(c))" },
  { term: "Unacceptable Risk", definition: "The highest risk tier under Section 25. Systems in this category are prohibited. Deploying such a system carries a fine of up to KES 5,000,000 or imprisonment up to 2 years, or both. (Section 25(3))" },
  { term: "Workforce Impact Assessment", definition: "A mandatory assessment required of providers and deployers of AI systems likely to affect employment. Must include job displacement analysis and mitigation measures including reskilling programmes. (Section 33)" },
  { term: "Human Rights Impact Assessment", definition: "A pre-deployment assessment required for high-risk AI systems to evaluate potential impacts on fundamental rights. (Section 26(b))" },
  { term: "Annual Compliance Report", definition: "A report that providers of high-risk AI systems must submit annually to the AI Commissioner. Non-confidential portions must be made publicly available. (Section 28(3))" },
  { term: "Data Protection Impact Assessment", definition: "Required where a high-risk AI system processes personal data, per the Data Protection Act (Cap. 411C). Referenced in Section 26(e) of the AI Bill." },
  { term: "Regulatory Sandbox", definition: "A controlled environment established by the Commissioner for testing AI systems before full deployment. Priority is given to innovations addressing national priorities. (Section 29)" },
];

const ALL_TERMS = [...statutory, ...extra].sort((a, b) => a.term.localeCompare(b.term));
const LETTERS = [...new Set(ALL_TERMS.map((t) => t.term[0].toUpperCase()))].sort();

export default function Glossary() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = ALL_TERMS.filter((t) =>
    !search || t.term.toLowerCase().includes(search.toLowerCase()) || t.definition.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = {};
  filtered.forEach((t) => {
    const l = t.term[0].toUpperCase();
    if (!grouped[l]) grouped[l] = [];
    grouped[l].push(t);
  });

  return (
    <main style={{ background: "var(--surface-container-low)", minHeight: "100vh", paddingBottom: 56 }}>
      <div className="page-header">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="page-header-eyebrow">Section 2 — Key Definitions</div>
          <h1>Glossary</h1>
          <p>{ALL_TERMS.length} statutory and contextual definitions</p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 24px" }}>
        {/* Search */}
        <div className="search-input-wrap" style={{ maxWidth: 440, marginBottom: 20 }}>
          <span className="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search terms or definitions…" value={search}
            onChange={(e) => setSearch(e.target.value)} />
        </div>

        {/* Alphabet index */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 28 }}>
          {LETTERS.map((letter) => (
            <button key={letter} onClick={() => {
              document.getElementById(`letter-${letter}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }} style={{
              width: 30, height: 30, border: "1px solid var(--outline-variant)",
              borderRadius: 6, fontSize: 12, fontFamily: "var(--font-headline)", fontWeight: 700,
              background: "white", cursor: "pointer", color: "var(--primary)",
            }}>
              {letter}
            </button>
          ))}
        </div>

        {/* Terms */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <span className="material-symbols-outlined" style={{ fontSize: 40, color: "var(--outline)", display: "block", margin: "0 auto 12px" }}>book</span>
            <div style={{ fontFamily: "var(--font-body)", color: "var(--on-surface-variant)" }}>No terms found for "{search}"</div>
          </div>
        ) : Object.entries(grouped).sort().map(([letter, terms]) => (
          <div key={letter} id={`letter-${letter}`} style={{ marginBottom: 28 }}>
            <div style={{
              fontFamily: "var(--font-headline)", fontSize: 28, fontStyle: "italic",
              color: "var(--primary)", borderBottom: `2px solid var(--primary)`,
              paddingBottom: 4, marginBottom: 12,
            }}>{letter}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {terms.map((t) => (
                <div key={t.term} onClick={() => setSelected(selected === t.term ? null : t.term)}
                  className={`section-card${selected === t.term ? " expanded" : ""}`}
                  style={{ cursor: "pointer", padding: "16px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
                    <div style={{ fontFamily: "var(--font-headline)", fontSize: 16, fontWeight: 700, color: "var(--on-surface)" }}>
                      {t.term}
                    </div>
                    <span className="material-symbols-outlined" style={{
                      fontSize: 18, color: "var(--outline)", flexShrink: 0,
                      transform: selected === t.term ? "rotate(180deg)" : "none", transition: "transform 0.2s",
                    }}>expand_more</span>
                  </div>
                  {selected !== t.term && (
                    <p style={{
                      fontFamily: "var(--font-body)", marginTop: 6, fontSize: 13,
                      color: "var(--on-surface-variant)", lineHeight: 1.55,
                      overflow: "hidden", display: "-webkit-box",
                      WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                    }}>{t.definition}</p>
                  )}
                  {selected === t.term && (
                    <p style={{
                      fontFamily: "var(--font-body)", marginTop: 10, fontSize: 14,
                      color: "var(--on-surface)", lineHeight: 1.75,
                      borderTop: "1px solid var(--surface-container-high)", paddingTop: 10,
                    }}>{t.definition}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
