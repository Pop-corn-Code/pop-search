import Link from "next/link";
import { useRouter } from "next/router";
import { useApp } from "../context/AppContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  const { sidebarOpen, setSidebarOpen, theme, toggleTheme, profile } = useApp();

  const initials = (profile?.name || "G")
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <header className={styles.bar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span style={{ color: "var(--pop-teal)" }}>Pop</span>
          <span style={{ color: "var(--pop-coral)" }}>~co</span>
          <span className={styles.star}>★</span>
          <span style={{ color: "var(--pop-coral)" }}>n&apos;s </span>
          <span style={{ color: "var(--pop-yellow)" }}>Search</span>
        </Link>

        <nav className={styles.actions}>
          <button
            type="button"
            className={`${styles.iconBtn} ${sidebarOpen ? styles.iconBtnActive : ""}`}
            onClick={() => setSidebarOpen((open) => !open)}
            aria-label="Toggle search history"
            title="Search history"
          >
            <ClockIcon />
          </button>

          <button
            type="button"
            className={styles.iconBtn}
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <Link
            href="/settings"
            className={`${styles.iconBtn} ${router.pathname === "/settings" ? styles.iconBtnActive : ""}`}
            aria-label="Settings"
            title="Settings"
          >
            <GearIcon />
          </Link>

          <Link
            href="/profile"
            className={styles.avatar}
            aria-label="Profile"
            title="Profile"
          >
            {initials || "G"}
          </Link>
        </nav>
      </div>
    </header>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" strokeLinecap="round" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="12" cy="12" r="3.2" />
      <path
        d="M19.4 13.5c.04-.5.04-1 0-1.5l1.9-1.5-2-3.4-2.2.9a7.6 7.6 0 00-1.3-.75L15.5 5h-4l-.3 2.25a7.6 7.6 0 00-1.3.75l-2.2-.9-2 3.4L7.6 12c-.04.5-.04 1 0 1.5l-1.9 1.5 2 3.4 2.2-.9c.4.3.85.55 1.3.75L11.5 20h4l.3-2.25c.45-.2.9-.45 1.3-.75l2.2.9 2-3.4-1.9-1.5z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M20 14.5A8.5 8.5 0 119.5 4a6.8 6.8 0 1010.5 10.5z" strokeLinejoin="round" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" strokeLinecap="round" />
    </svg>
  );
}