import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);

const HISTORY_KEY = "pop-search:history";
const THEME_KEY = "pop-search:theme";
const PROFILE_KEY = "pop-search:profile";
const MAX_HISTORY = 50;

export function AppProvider({ children }) {
  const [history, setHistory] = useState([]);
  const [theme, setTheme] = useState("light");
  const [profile, setProfile] = useState({ name: "Guest", email: "" });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load persisted state on first mount (client only)
  useEffect(() => {
    try {
      const storedHistory = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
      const storedTheme = localStorage.getItem(THEME_KEY) || "light";
      const storedProfile = JSON.parse(
        localStorage.getItem(PROFILE_KEY) || '{"name":"Guest","email":""}'
      );
      setHistory(storedHistory);
      setTheme(storedTheme);
      setProfile(storedProfile);
    } catch (err) {
      console.error("Failed to load saved data:", err);
    }
    setHydrated(true);
  }, []);

  // Reflect theme on <html> and persist
  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }, [history, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  }, [profile, hydrated]);

  function addHistoryItem(query) {
    if (!query || !query.trim()) return;
    setHistory((prev) => {
      const withoutDupes = prev.filter(
        (item) => item.query.toLowerCase() !== query.toLowerCase()
      );
      const next = [
        { query, timestamp: Date.now() },
        ...withoutDupes,
      ].slice(0, MAX_HISTORY);
      return next;
    });
  }

  function removeHistoryItem(timestamp) {
    setHistory((prev) => prev.filter((item) => item.timestamp !== timestamp));
  }

  function clearHistory() {
    setHistory([]);
  }

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  const value = {
    history,
    addHistoryItem,
    removeHistoryItem,
    clearHistory,
    theme,
    setTheme,
    toggleTheme,
    profile,
    setProfile,
    sidebarOpen,
    setSidebarOpen,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within an AppProvider");
  return ctx;
}