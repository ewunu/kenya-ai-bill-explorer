import React from "react";
import { Link } from "react-router-dom";
import { billMeta, parts } from "../data";

const BILL_DOWNLOAD_URL =
  "https://new.kenyalaw.org/akn/ke/bill/senate/2026-02-19/the-artificial-intelligence-bill-2026/eng@2026-02-19/source";

const STATS = [
  { number: "6", label: "Parts" },
  { number: "37", label: "Sections" },
  { number: "4", label: "Risk Tiers" },
  { number: "8", label: "Advisory Members" },
  { number: "5yr", label: "Commissioner Term" },
  { number: "3yr", label: "Review Cycle" },
];

const PILLARS = [
  {
    icon: "policy",
    title: "Regulatory Oversight",
    body: "Establishing the Office of the AI Commissioner to register systems, certify providers, and enforce ethical standards across all AI deployments in Kenya.",
    tags: ["Compliance Audits", "Risk Categorisation", "Annual Reporting"],
    style: "white",
  },
  {
    icon: "shield_person",
    title: "Citizen Protection",
    body: "Robust safeguards against algorithmic bias, privacy violations, and automated discrimination for every Kenyan citizen.",
    learnMore: "/explorer",
    style: "green",
  },
  {
    icon: "rocket_launch",
    title: "Innovation Hubs",
    body: "Regulatory sandboxes for local startups to test AI solutions under Commissioner guidance without immediate full compliance burdens.",
    style: "sage",
  },
  {
    icon: "visibility",
    title: "Transparency Mandates",
    body: "Mandatory disclosure when interacting with high-risk AI systems and clear labelling of synthetic media.",
    style: "dim",
  },
];

const PARTICIPATION = [
  {
    icon: "download",
    title: "Download the Gazetted Bill",
    sub: "Kenya Gazette Supplement No. 15 · 19 February 2026",
    href: BILL_DOWNLOAD_URL,
    external: true,
    credit: true,
  },
  {
    icon: "manage_search",
    title: "Explore the Bill Interactively",
    sub: "Navigate all 37 sections with our Bill Explorer tool",
    to: "/explorer",
  },
  {
    icon: "verified_user",
    title: "Check Your Risk Classification",
    sub: "Use the Risk Classifier to understand your AI obligations",
    to: "/risk-classifier",
  },
];

const LEGISLATIVE_STEPS = ["Drafting", "Public Review", "Parliamentary Debate", "Presidential Assent"];

function Icon({ name, size = 20, color }) {
  return (
    <span
      className="material-symbols-outlined"
      style={{ fontSize: size, color: color || "inherit" }}
    >
      {name}
    </span>
  );
}

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section style={{
        background: "var(--surface)",
        padding: "56px 24px 48px",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48, alignItems: "center",
        }} className="hero-grid">
          {/* Left */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--secondary-container)", color: "#095137",
              padding: "4px 12px", borderRadius: 999,
              fontSize: 11, fontWeight: 700, fontFamily: "var(--font-body)",
              letterSpacing: "0.04em", marginBottom: 20,
            }}>
              <span style={{
                width: 8, height: 8, background: "#296a4d", borderRadius: "50%", flexShrink: 0,
                animation: "ping 1.5s ease-in-out infinite",
              }} />
              STATUS: PUBLIC REVIEW OPEN
            </div>

            <h1 style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 800, lineHeight: 1.1,
              letterSpacing: "-0.5px",
              color: "var(--on-surface)", marginBottom: 16,
            }}>
              Architecting Kenya's{" "}
              <span style={{ color: "var(--primary)" }}>AI Governance</span>{" "}
              Future Together.
            </h1>

            <p style={{
              fontSize: 16, color: "var(--on-surface-variant)",
              lineHeight: 1.7, marginBottom: 28, maxWidth: 480,
            }}>
              The Kenya AI Bill 2026 establishes a comprehensive legal framework
              for the responsible development, deployment, and oversight of
              Artificial Intelligence across the Republic.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href={BILL_DOWNLOAD_URL}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#448365", color: "white",
                  padding: "12px 22px", borderRadius: 12,
                  fontFamily: "var(--font-headline)", fontSize: 14, fontWeight: 700,
                }}
              >
                <Icon name="description" size={18} color="white" />
                Read the Full Bill
              </a>
              <Link
                to="/risk-classifier"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "white", border: "1px solid var(--outline-variant)",
                  color: "var(--on-surface)",
                  padding: "12px 22px", borderRadius: 12,
                  fontFamily: "var(--font-headline)", fontSize: 14, fontWeight: 700,
                }}
              >
                <Icon name="verified_user" size={18} />
                Risk Classifier
              </Link>
            </div>

            <p style={{
              marginTop: 14, fontSize: 11, color: "var(--outline)",
              fontFamily: "var(--font-body)",
            }}>
              Document hosted by{" "}
              <a href="https://new.kenyalaw.org" target="_blank" rel="noreferrer"
                style={{ color: "var(--primary)", fontWeight: 600 }}>
                Kenya Law
              </a>
              {" "}· All rights reserved by the Republic of Kenya
            </p>
          </div>

          {/* Right — hero image */}
          <div style={{
            borderRadius: 24, overflow: "hidden",
            aspectRatio: "4/3", position: "relative",
            boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
          }}>
            <img
              src="/hero-flag.jpg"
              alt="Kenya flag close-up"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, rgba(41,106,77,0.15) 0%, transparent 60%)",
            }} />
          </div>
        </div>

        <style>{`
          @keyframes ping { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .hero-grid > div:last-child { display: none; }
          }
        `}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#647d6e" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(6, 1fr)",
        }} className="stats-bar">
          {STATS.map((s, i) => (
            <div key={i} style={{
              textAlign: "center", padding: "16px 8px",
              borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
            }}>
              <div style={{
                fontFamily: "var(--font-headline)", fontSize: 24, fontWeight: 800,
                color: "white",
              }}>{s.number}</div>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: 10,
                textTransform: "uppercase", letterSpacing: "0.07em",
                color: "rgba(255,255,255,0.65)", marginTop: 3,
              }}>{s.label}</div>
            </div>
          ))}
          <style>{`
            @media (max-width: 640px) {
              .stats-bar { grid-template-columns: repeat(3, 1fr) !important; }
            }
            @media (max-width: 360px) {
              .stats-bar { grid-template-columns: repeat(2, 1fr) !important; }
            }
          `}</style>
        </div>
      </div>

      {/* ── BILL AT A GLANCE ── */}
      <section style={{ padding: "56px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{
            textAlign: "center", fontFamily: "var(--font-headline)",
            fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800,
            color: "var(--on-surface)", marginBottom: 6,
          }}>
            The Bill at a Glance
          </h2>
          <p style={{
            textAlign: "center", color: "var(--on-surface-variant)",
            fontSize: 15, marginBottom: 36,
          }}>
            Core pillars of the proposed legislation — balancing innovation with ethical safeguards.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: 16,
          }} className="pillars-grid">
            {PILLARS.map((p, i) => {
              const isGreen = p.style === "green";
              const isSage = p.style === "sage";
              const isDim = p.style === "dim";
              const isWhite = p.style === "white";

              const bg = isGreen ? "#296a4d" : isSage ? "#cbe6d4" : isDim ? "#d8dbd6" : "white";
              const border = isWhite || isSage || isDim ? "1px solid var(--outline-variant)" : "none";
              const textColor = isGreen ? "white" : "var(--on-surface)";
              const bodyColor = isGreen ? "rgba(255,255,255,0.78)" : "var(--on-surface-variant)";
              const iconBg = isGreen ? "rgba(255,255,255,0.15)" : isSage ? "rgba(255,255,255,0.55)" : isDim ? "rgba(255,255,255,0.6)" : "var(--surface-container-low)";
              const iconColor = isGreen ? "white" : isWhite ? "#296a4d" : "#095137";

              return (
                <div key={i} style={{
                  background: bg, border, borderRadius: 24,
                  padding: "28px 28px",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                }}>
                  <div>
                    <div style={{
                      width: 52, height: 52, borderRadius: 14,
                      background: iconBg,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 18,
                    }}>
                      <Icon name={p.icon} size={28} color={iconColor} />
                    </div>
                    <h3 style={{
                      fontFamily: "var(--font-headline)", fontSize: 18, fontWeight: 700,
                      color: textColor, marginBottom: 10,
                    }}>{p.title}</h3>
                    <p style={{
                      fontSize: 14, lineHeight: 1.65, color: bodyColor,
                    }}>{p.body}</p>
                    {p.tags && (
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 16 }}>
                        {p.tags.map((t) => (
                          <span key={t} style={{
                            background: "var(--surface-container-high)",
                            color: "var(--on-surface-variant)",
                            fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 500,
                            padding: "3px 10px", borderRadius: 6,
                          }}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  {p.learnMore && (
                    <Link to={p.learnMore} style={{
                      marginTop: 20, display: "inline-flex", alignItems: "center", gap: 4,
                      fontFamily: "var(--font-headline)", fontSize: 13, fontWeight: 700,
                      color: "white",
                    }}>
                      Learn more <Icon name="arrow_forward" size={16} color="white" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <style>{`
            @media (max-width: 640px) {
              .pillars-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ── LEGISLATIVE STATUS ── */}
      <section style={{ padding: "0 24px 48px", background: "white" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{
            background: "white", borderRadius: 999,
            border: "1px solid var(--outline-variant)",
            display: "flex", overflow: "hidden",
          }}>
            {LEGISLATIVE_STEPS.map((step, i) => {
              const active = step === "Public Review";
              return (
                <div key={i} style={{
                  flex: 1, padding: "13px 8px", textAlign: "center",
                  fontFamily: "var(--font-headline)", fontSize: 12, fontWeight: 700,
                  color: active ? "#296a4d" : "rgba(64,73,67,0.4)",
                  background: active ? "rgba(41,106,77,0.08)" : "transparent",
                  borderRadius: active ? 999 : 0,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
                }}>
                  {active && <Icon name="radio_button_checked" size={15} color="#296a4d" />}
                  <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
          <p style={{
            textAlign: "center", marginTop: 16,
            fontFamily: "var(--font-body)", fontSize: 13,
            color: "var(--on-surface-variant)",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
          }}>
            <Icon name="info" size={15} color="var(--outline)" />
            The bill is currently in Stage 2: pending introduction to the Senate.
          </p>
        </div>
      </section>

      {/* ── PUBLIC PARTICIPATION ── */}
      <section style={{ background: "#edf2ef", padding: "56px 24px" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 48, alignItems: "start",
        }} className="participation-grid">
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 800,
              color: "var(--on-surface)", marginBottom: 12, lineHeight: 1.2,
            }}>
              Have Your Say in the{" "}
              <span style={{ color: "var(--primary)" }}>Governance Process</span>
            </h2>
            <p style={{
              fontSize: 15, color: "var(--on-surface-variant)",
              lineHeight: 1.7, marginBottom: 28,
            }}>
              We invite practitioners, organisations, and citizens to engage with the Bill
              before it becomes law. Use the tools below to explore, assess, and understand
              your obligations.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {PARTICIPATION.map((item, i) => {
                const inner = (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: "50%",
                      background: "#296a4d",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon name={item.icon} size={18} color="white" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-headline)", fontSize: 14, fontWeight: 700, color: "var(--on-surface)" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: 12, color: "var(--on-surface-variant)", marginTop: 2 }}>
                        {item.sub}
                      </div>
                      {item.credit && (
                        <div style={{ fontSize: 11, color: "var(--outline)", marginTop: 3 }}>
                          Document courtesy of{" "}
                          <span style={{ color: "var(--primary)", fontWeight: 600 }}>Kenya Law</span>
                          {" "}· © Republic of Kenya
                        </div>
                      )}
                    </div>
                  </div>
                );
                if (item.href) {
                  return (
                    <a key={i} href={item.href} target="_blank" rel="noreferrer"
                      style={{ display: "block", color: "inherit" }}>
                      {inner}
                    </a>
                  );
                }
                return <Link key={i} to={item.to} style={{ display: "block", color: "inherit" }}>{inner}</Link>;
              })}
            </div>
          </div>

          {/* Right — newsletter form */}
          <div style={{
            background: "white", borderRadius: 24,
            border: "1px solid var(--outline-variant)",
            padding: "32px 28px",
          }}>
            <h3 style={{
              fontFamily: "var(--font-headline)", fontSize: 18, fontWeight: 700,
              marginBottom: 6,
            }}>
              Subscribe to the Newsletter
            </h3>
            <p style={{ fontSize: 13, color: "var(--on-surface-variant)", marginBottom: 20 }}>
              The African AI Governance Brief — practitioner-focused coverage of AI policy across Africa.
            </p>
            {[
              { label: "Full Name", placeholder: "Your name", type: "text" },
              { label: "Email Address", placeholder: "you@example.com", type: "email" },
              { label: "Organisation (Optional)", placeholder: "Company, NGO, Government…", type: "text" },
            ].map((f) => (
              <div key={f.label} style={{ marginBottom: 14 }}>
                <label style={{
                  display: "block", fontFamily: "var(--font-body)",
                  fontSize: 10, fontWeight: 700, color: "var(--outline)",
                  textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6,
                }}>
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  style={{
                    width: "100%", background: "var(--surface-container)",
                    border: "none", borderRadius: 12, padding: "12px 14px",
                    fontSize: 13, color: "var(--on-surface)",
                    fontFamily: "var(--font-body)", outline: "none",
                  }}
                />
              </div>
            ))}
            <a
              href="https://edemkw.substack.com"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block", width: "100%",
                background: "#296a4d", color: "white",
                fontFamily: "var(--font-headline)", fontWeight: 700, fontSize: 14,
                padding: "14px", borderRadius: 12, textAlign: "center",
                marginTop: 4,
              }}
            >
              Subscribe to African AI Governance Brief
            </a>
            <p style={{
              fontSize: 10, color: "var(--outline)", textAlign: "center",
              marginTop: 10, fontFamily: "var(--font-body)", lineHeight: 1.6,
            }}>
              By subscribing you agree to receive updates via Substack. Unsubscribe any time.
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .participation-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#f8fafc", borderTop: "1px solid #e2e8f0",
        padding: "28px 24px",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 16,
        }}>
          <div>
            <div style={{
              fontFamily: "var(--font-headline)", fontSize: 14, fontWeight: 700,
              color: "#166534", marginBottom: 4,
            }}>Kenya AI Bill Explorer</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#94a3b8" }}>
              Educational resource · Not an official government site · © 2026
            </div>
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Use", "Accessibility", "Sitemap"].map((l) => (
              <span key={l} style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#94a3b8" }}>{l}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <Link to="/about" style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#166534", fontWeight: 600 }}>
              About this project
            </Link>
            <Icon name="language" size={18} color="#94a3b8" />
            <Icon name="share" size={18} color="#94a3b8" />
          </div>
        </div>
      </footer>
    </main>
  );
}
