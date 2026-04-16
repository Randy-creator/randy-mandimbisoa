"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../context/theme-context";

const navLinks = [
  {
    label: "home",
    href: "/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "skills",
    href: "/skills",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    label: "projects",
    href: "/projects",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "blog",
    href: "/blog",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    label: "contact",
    href: "/contact",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <style>{`
        @keyframes nb-ripple {
          0%   { transform: scale(0); opacity: 0.4; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        @keyframes nb-pulse {
          0%,100% { opacity:1; } 50% { opacity:0.35; }
        }

        :root {
          --nb-bg:         #1a1625;
          --nb-border:     rgba(180,160,220,0.12);
          --nb-accent:     #c4a8f0;
          --nb-accent-dim: #8b6bbf;
          --nb-text:       #e8dff8;
          --nb-muted:      #7a6a99;
          --nb-hover-bg:   rgba(196,168,240,0.08);
          --nb-active-bg:  rgba(196,168,240,0.15);
          --nb-section:    rgba(180,160,220,0.06);
        }
        [data-theme="light"] {
          --nb-bg:         #faf8ff;
          --nb-border:     rgba(140,100,200,0.14);
          --nb-accent:     #7c4dcc;
          --nb-accent-dim: #b08ee0;
          --nb-text:       #1a1230;
          --nb-muted:      #a090c0;
          --nb-hover-bg:   rgba(124,77,204,0.07);
          --nb-active-bg:  rgba(124,77,204,0.12);
          --nb-section:    rgba(124,77,204,0.05);
        }

        .nb-sidebar {
          width: 250px;
          height: 100vh;
          background: var(--nb-bg);
          border-right: 0.5px solid var(--nb-border);
          display: flex;
          flex-direction: column;
          padding: 18px 12px 16px;
          gap: 4px;
          position: fixed;
          top: 0; left: 0;
          z-index: 50;
          font-family: 'JetBrains Mono','Fira Code',monospace;
          font-size: 12.5px;
        }

        .nb-dots {
          display: flex; gap: 5px;
          padding: 0 2px 8px;
        }
        .nb-dot {
          width: 10px; height: 10px; border-radius: 50%;
        }

        .nb-profile {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 10px 14px;
          border-bottom: 0.5px solid var(--nb-border);
          margin-bottom: 4px;
        }
        .nb-avatar {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: var(--nb-active-bg);
          border: 1px solid var(--nb-accent-dim);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 700;
          color: var(--nb-accent);
          flex-shrink: 0;
          transition: border-color .2s;
        }
        .nb-profile:hover .nb-avatar { border-color: var(--nb-accent); }
        .nb-profile-info { display: flex; flex-direction: column; gap: 2px; overflow: hidden; }
        .nb-name { font-size: 11.5px; font-weight: 600; color: var(--nb-text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .nb-sub  { font-size: 10px; color: var(--nb-muted); }
        .nb-online {
          width: 7px; height: 7px; border-radius: 50%;
          background: #7ee8a2;
          margin-left: auto; flex-shrink: 0;
          animation: nb-pulse 2.5s ease-in-out infinite;
        }

        .nb-section-label {
          font-size: 9.5px; letter-spacing: .08em;
          color: var(--nb-muted); opacity: .6;
          padding: 8px 10px 4px;
          text-transform: uppercase;
        }

        .nb-link {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 10px;
          border-radius: 10px;
          color: var(--nb-muted);
          text-decoration: none;
          position: relative; overflow: hidden;
          transition: background .18s, color .18s, transform .12s;
        }
        .nb-link:hover {
          background: var(--nb-hover-bg);
          color: var(--nb-text);
          transform: translateX(2px);
        }
        .nb-link:active { transform: scale(0.97) translateX(2px); }
        .nb-link.active {
          background: var(--nb-active-bg);
          color: var(--nb-accent);
        }
        .nb-link.active::before {
          content: '';
          position: absolute; left: 0; top: 20%; bottom: 20%;
          width: 3px; border-radius: 0 3px 3px 0;
          background: var(--nb-accent);
        }
        .nb-link-ripple {
          position: absolute; border-radius: 50%;
          width: 40px; height: 40px;
          background: rgba(196,168,240,0.25);
          pointer-events: none;
          transform: scale(0);
          animation: nb-ripple .5s ease-out forwards;
        }

        .nb-icon {
          width: 30px; height: 30px;
          border-radius: 8px;
          background: var(--nb-section);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background .18s, transform .18s;
        }
        .nb-link:hover .nb-icon  { background: rgba(196,168,240,0.14); transform: scale(1.1); }
        .nb-link.active .nb-icon { background: rgba(196,168,240,0.2); }
        .nb-icon svg { width: 15px; height: 15px; transition: color .18s; }

        .nb-bottom {
          margin-top: auto;
          border-top: 0.5px solid var(--nb-border);
          padding-top: 10px;
        }
        .nb-toggle {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 10px;
          border-radius: 10px;
          background: transparent; border: none;
          color: var(--nb-muted);
          cursor: pointer;
          font-family: inherit; font-size: 12.5px;
          width: 100%;
          transition: background .18s, color .18s, transform .12s;
        }
        .nb-toggle:hover { background: var(--nb-hover-bg); color: var(--nb-text); transform: translateX(2px); }
        .nb-toggle:active { transform: scale(0.97); }

        .nb-page-offset { margin-left: 220px; }

        /* Mobile*/
        @media (max-width: 900px) {
          .nb-sidebar { transform: translateX(-100%); transition: transform .25s ease; }
          .nb-sidebar.open { transform: translateX(0); }
          .nb-page-offset { margin-left: 0; }
          .nb-hamburger {
            display: flex !important;
            position: fixed; top: 14px; right: 14px; z-index: 60;
          }
        }

        .nb-hamburger {
          display: none;
          flex-direction: column; gap: 4px;
          background: var(--nb-bg);
          border: 0.5px solid var(--nb-border);
          border-radius: 8px;
          padding: 8px;
          cursor: pointer;
        }
        .nb-hamburger span {
          display: block; width: 18px; height: 1.5px;
          background: var(--nb-muted); border-radius: 2px;
          transition: transform .2s, opacity .2s;
        }
        .nb-hamburger.open span:nth-child(1) { transform: translateY(5.5px) rotate(45deg); }
        .nb-hamburger.open span:nth-child(2) { opacity: 0; }
        .nb-hamburger.open span:nth-child(3) { transform: translateY(-5.5px) rotate(-45deg); }

        .nb-overlay {
          display: none;
          position: fixed; inset: 0; z-index: 40;
          background: rgba(0,0,0,0.4);
        }
        .nb-overlay.open { display: block; }
      `}</style>

      <HamburgerButton />

      <aside className="nb-sidebar" id="nb-sidebar" data-theme={theme}>
        <div className="nb-dots">
          <div className="nb-dot" style={{ background: "#ff7b7b" }} />
          <div className="nb-dot" style={{ background: "#ffc96f" }} />
          <div className="nb-dot" style={{ background: "#7ee8a2" }} />
        </div>

        <div className="nb-profile">
          <div className="nb-avatar">MR</div>
          <div className="nb-profile-info">
            <span className="nb-name">Mandimbisoa Randy</span>
            <span className="nb-sub">❯ portfolio</span>
          </div>
          <div className="nb-online" />
        </div>

        <span className="nb-section-label">Menu</span>

        {navLinks.map(({ label, href, icon }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`nb-link${isActive ? " active" : ""}`}
              onClick={(e) => addRipple(e)}
            >
              <div className="nb-icon">{icon}</div>
              <span>{label}</span>
            </Link>
          );
        })}

        <div className="nb-bottom">
          <button className="nb-toggle" onClick={toggleTheme}>
            <div className="nb-icon">
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </div>
            <span>{theme === "dark" ? "light mode" : "dark mode"}</span>
          </button>
        </div>
      </aside>

      <div className="nb-overlay" id="nb-overlay" onClick={closeSidebar} />
    </>
  );
}

function HamburgerButton() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((v) => {
      const next = !v;
      document.getElementById("nb-sidebar")?.classList.toggle("open", next);
      document.getElementById("nb-overlay")?.classList.toggle("open", next);
      return next;
    });
  };
  return (
    <button
      className={`nb-hamburger${open ? " open" : ""}`}
      onClick={toggle}
      aria-label="Menu"
    >
      <span />
      <span />
      <span />
    </button>
  );
}

function closeSidebar() {
  document.getElementById("nb-sidebar")?.classList.remove("open");
  document.getElementById("nb-overlay")?.classList.remove("open");
}

function addRipple(e: React.MouseEvent<HTMLAnchorElement>) {
  const el = e.currentTarget;
  const r = document.createElement("span");
  r.className = "nb-link-ripple";
  const rect = el.getBoundingClientRect();
  r.style.left = e.clientX - rect.left - 20 + "px";
  r.style.top = e.clientY - rect.top - 20 + "px";
  el.appendChild(r);
  setTimeout(() => r.remove(), 520);
}
