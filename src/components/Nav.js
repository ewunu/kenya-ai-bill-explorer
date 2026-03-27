import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/explorer", label: "The Bill" },
  { to: "/risk-classifier", label: "Risk Classifier" },
  { to: "/glossary", label: "Glossary" },
  { to: "/about", label: "About" },
];

const SUBSTACK_URL = "https://edemkw.substack.com";

export default function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(255,255,255,0.97)",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: "1px solid #e2e8e0",
      boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
      transition: "box-shadow 0.2s",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "0 24px",
        height: 60,
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <img
            src="/favicon.png"
            alt="Kenya flag"
            style={{ width: 28, height: 19, objectFit: "cover", borderRadius: 2, border: "1px solid rgba(0,0,0,0.1)" }}
          />
          <span style={{
            fontFamily: "var(--font-headline)", fontWeight: 800,
            fontSize: 15, color: "#166534", letterSpacing: "-0.3px",
          }}>
            Kenya AI Bill Explorer
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav style={{ display: "flex", gap: 2, alignItems: "center", flex: 1, justifyContent: "center" }}
          className="desktop-nav">
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to} style={{
              fontFamily: "var(--font-headline)", fontSize: 13, fontWeight: 600,
              color: isActive(l.to) ? "#166534" : "#475569",
              padding: "4px 12px 2px",
              borderBottom: isActive(l.to) ? "2px solid #166534" : "2px solid transparent",
              transition: "color 0.15s",
              whiteSpace: "nowrap",
            }}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}
          className="desktop-actions">
          <a href={SUBSTACK_URL} target="_blank" rel="noreferrer" style={{
            display: "flex", alignItems: "center", gap: 6,
            background: "#296a4d", color: "white",
            padding: "7px 16px", borderRadius: 999,
            fontFamily: "var(--font-headline)", fontSize: 12, fontWeight: 700,
            whiteSpace: "nowrap",
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>mail</span>
            Subscribe
          </a>
        </div>

        {/* Mobile actions */}
        <div style={{ display: "none", alignItems: "center", gap: 8 }}
          className="mobile-actions">
          <a href={SUBSTACK_URL} target="_blank" rel="noreferrer" style={{
            display: "flex", alignItems: "center", gap: 5,
            background: "#296a4d", color: "white",
            padding: "6px 12px", borderRadius: 999,
            fontFamily: "var(--font-headline)", fontSize: 11, fontWeight: 700,
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>mail</span>
            Subscribe
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ padding: 6, color: "#191c1a" }} aria-label="Menu">
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{ borderTop: "1px solid #e2e8e0", background: "white", padding: "8px 24px 20px" }}>
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "13px 0",
              borderBottom: "1px solid #f0f0ec",
              fontFamily: "var(--font-headline)", fontSize: 15, fontWeight: 600,
              color: isActive(l.to) ? "#296a4d" : "#191c1a",
            }}>
              {l.label}
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: "#bfc9c1" }}>
                arrow_forward
              </span>
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .desktop-actions { display: none !important; }
          .mobile-actions { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
