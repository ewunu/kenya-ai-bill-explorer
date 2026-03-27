import React, { useState, useMemo } from "react";
import { parts, allTags } from "../data";

function SectionCard({ section, partTitle, partNumber, isExpanded, onToggle }) {
  return (
    <div className={`section-card${isExpanded ? " expanded" : ""}`}>
      <button
        onClick={onToggle}
        style={{
          width: "100%", textAlign: "left", padding: "16px 20px",
          display: "grid", gridTemplateColumns: "52px 1fr auto",
          alignItems: "center", gap: 12, background: "none", cursor: "pointer",
        }}
      >
        <span className="sec-num-badge">S.{section.number}</span>
        <div>
          <div style={{ fontFamily: "var(--font-headline)", fontWeight: 700, fontSize: 14, color: "var(--on-surface)" }}>
            {section.title}
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--outline)", marginTop: 2 }}>
            Part {partNumber}: {partTitle}
          </div>
        </div>
        <span className="material-symbols-outlined"
          style={{ fontSize: 18, color: "var(--outline)", transition: "transform 0.2s", transform: isExpanded ? "rotate(180deg)" : "none" }}>
          expand_more
        </span>
      </button>

      {isExpanded && (
        <div style={{ padding: "0 20px 20px", borderTop: "1px solid var(--surface-container-high)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.75, color: "var(--on-surface-variant)", margin: "16px 0" }}>
            {section.content}
          </p>
          {section.highlights && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.08em", color: "var(--outline)", marginBottom: 8, textTransform: "uppercase", fontWeight: 700 }}>
                Key Requirements
              </div>
              {section.highlights.map((h, i) => (
                <div key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--on-surface)", marginBottom: 5, alignItems: "flex-start" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 15, color: "var(--primary)", marginTop: 1 }}>check_circle</span>
                  {h}
                </div>
              ))}
            </div>
          )}
          {section.penalties && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.08em", color: "var(--outline)", marginBottom: 10, textTransform: "uppercase", fontWeight: 700 }}>
                Penalty Structure
              </div>
              {section.penalties.map((pen, i) => (
                <div key={i} style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 8, padding: "11px 14px", marginBottom: 8 }}>
                  <div style={{ fontFamily: "var(--font-headline)", fontWeight: 700, fontSize: 12, color: "#9a3412", marginBottom: 3 }}>{pen.category}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#7a3800" }}>Fine: {pen.fine} · Imprisonment: {pen.imprisonment}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#5a2800", marginTop: 3 }}>{pen.description}</div>
                </div>
              ))}
            </div>
          )}
          {section.riskLevels && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.08em", color: "var(--outline)", marginBottom: 10, textTransform: "uppercase", fontWeight: 700 }}>
                Four-Tier Classification
              </div>
              {section.riskLevels.map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 7 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 2, background: r.color, flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-headline)", fontWeight: 700, fontSize: 12, minWidth: 90 }}>{r.level}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--on-surface-variant)" }}>{r.description}</span>
                </div>
              ))}
            </div>
          )}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 12 }}>
            {section.tags.map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Explorer() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState(null);
  const [activePart, setActivePart] = useState(null);
  const [expandedSections, setExpandedSections] = useState(new Set());
  const [expandAll, setExpandAll] = useState(false);

  const allSections = useMemo(() =>
    parts.flatMap((p) => p.sections.map((s) => ({ ...s, partId: p.id, partTitle: p.title, partNumber: p.number }))), []);

  const filtered = useMemo(() => allSections.filter((s) => {
    const matchSearch = !search || [s.title, s.content, ...(s.highlights || [])].join(" ").toLowerCase().includes(search.toLowerCase());
    const matchTag = !activeTag || s.tags.includes(activeTag);
    const matchPart = !activePart || s.partId === activePart;
    return matchSearch && matchTag && matchPart;
  }), [allSections, search, activeTag, activePart]);

  const toggle = (id) => {
    setExpandedSections((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  };
  const handleExpandAll = () => {
    if (expandAll) { setExpandedSections(new Set()); setExpandAll(false); }
    else { setExpandedSections(new Set(filtered.map((s) => s.id))); setExpandAll(true); }
  };

  const grouped = parts.map((p) => ({ ...p, sections: filtered.filter((s) => s.partId === p.id) })).filter((p) => p.sections.length > 0);

  return (
    <main style={{ background: "var(--surface-container-low)", minHeight: "100vh", paddingBottom: 56 }}>
      <div className="page-header">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="page-header-eyebrow">Interactive Bill Explorer</div>
          <h1>Kenya AI Bill 2026</h1>
          <p>{allSections.length} sections · {parts.length} parts</p>
        </div>
      </div>

      <div className="filter-bar">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="search-input-wrap">
            <span className="material-symbols-outlined">search</span>
            <input
              type="text" placeholder="Search sections, obligations, rights…"
              value={search} onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button onClick={() => setSearch("")} style={{
                position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
                color: "var(--outline)", fontSize: 20, lineHeight: 1,
              }}>×</button>
            )}
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }} className="filter-tags-row">
            <select
              value={activePart || ""}
              onChange={(e) => setActivePart(e.target.value || null)}
              style={{ padding: "5px 10px", border: "1px solid var(--outline-variant)", borderRadius: 6, fontSize: 12, background: "white", color: "var(--on-surface)", fontFamily: "var(--font-body)" }}
            >
              <option value="">All Parts</option>
              {parts.map((p) => <option key={p.id} value={p.id}>Part {p.number}: {p.title}</option>)}
            </select>
            {allTags.map((t) => (
              <button key={t} onClick={() => setActiveTag(activeTag === t ? null : t)}
                className={`filter-tag${activeTag === t ? " active" : ""}`}>
                {t}
              </button>
            ))}
            <button onClick={handleExpandAll} style={{
              marginLeft: "auto", padding: "5px 14px", borderRadius: 6, fontSize: 12,
              border: "1px solid var(--outline-variant)", background: "white",
              color: "var(--on-surface-variant)", fontFamily: "var(--font-body)", cursor: "pointer",
            }}>
              {expandAll ? "Collapse All" : "Expand All"}
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 24px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <span className="material-symbols-outlined" style={{ fontSize: 40, color: "var(--outline)", display: "block", margin: "0 auto 12px" }}>search_off</span>
            <div style={{ fontSize: 16, fontFamily: "var(--font-headline)", color: "var(--on-surface-variant)" }}>No sections found</div>
            <button onClick={() => { setSearch(""); setActiveTag(null); setActivePart(null); }}
              style={{ marginTop: 12, color: "var(--primary)", cursor: "pointer", fontSize: 13, fontFamily: "var(--font-body)" }}>
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--outline)", marginBottom: 18 }}>
              {filtered.length} section{filtered.length !== 1 ? "s" : ""} found
            </div>
            {grouped.map((p) => (
              <div key={p.id} style={{ marginBottom: 32 }}>
                <div className="part-header">
                  <span className="part-label-badge">PART {p.number}</span>
                  <h2 style={{ fontFamily: "var(--font-headline)", fontSize: 18, fontWeight: 700 }}>{p.title}</h2>
                  <span style={{ marginLeft: "auto", fontFamily: "var(--font-body)", fontSize: 11, color: "var(--outline)" }}>
                    {p.sections.length} section{p.sections.length !== 1 ? "s" : ""}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.sections.map((s) => (
                    <SectionCard key={s.id} section={s} partTitle={p.title} partNumber={p.number}
                      isExpanded={expandedSections.has(s.id)} onToggle={() => toggle(s.id)} />
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </main>
  );
}
