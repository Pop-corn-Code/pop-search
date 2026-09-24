import Head from "next/head";
import { useState } from "react";
import { useApp } from "../context/AppContext";
import styles from "./settings.module.css";

export default function Settings() {
  const { theme, toggleTheme, clearHistory, history } = useApp();
  const [cleared, setCleared] = useState(false);

  function handleClear() {
    clearHistory();
    setCleared(true);
    setTimeout(() => setCleared(false), 1800);
  }

  return (
    <>
      <Head>
        <title>Settings — Pop&apos;con&apos;s Search</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.heading}>Settings</h1>

        <section className={styles.row}>
          <div>
            <h2 className={styles.rowTitle}>Dark mode</h2>
            <p className={styles.rowDesc}>Switch the whole app to a darker palette.</p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={theme === "dark"}
            className={`${styles.toggle} ${theme === "dark" ? styles.toggleOn : ""}`}
            onClick={toggleTheme}
          >
            <span className={styles.toggleKnob} />
          </button>
        </section>

        <section className={styles.row}>
          <div>
            <h2 className={styles.rowTitle}>Search history</h2>
            <p className={styles.rowDesc}>
              {history.length > 0
                ? `You have ${history.length} saved ${history.length === 1 ? "search" : "searches"}.`
                : "You don't have any saved searches yet."}
            </p>
          </div>
          <button
            type="button"
            className={styles.dangerBtn}
            onClick={handleClear}
            disabled={history.length === 0}
          >
            {cleared ? "Cleared" : "Clear history"}
          </button>
        </section>
      </main>
    </>
  );
}