import Head from "next/head";
import { useState } from "react";
import { useApp } from "../context/AppContext";
import styles from "./profile.module.css";

export default function Profile() {
  const { profile, setProfile, history } = useApp();
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [saved, setSaved] = useState(false);

  const initials = (name || "G")
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  function handleSave(event) {
    event.preventDefault();
    setProfile({ name: name.trim() || "Guest", email: email.trim() });
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  }

  const searchCount = history.length;
  const lastSearch = history[0]?.query;

  return (
    <>
      <Head>
        <title>Profile — Pop&apos;con&apos;s Search</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.avatarLarge}>{initials || "G"}</div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{searchCount}</span>
              <span className={styles.statLabel}>searches saved</span>
            </div>
            {lastSearch && (
              <div className={styles.stat}>
                <span className={styles.statNumberSmall}>&ldquo;{lastSearch}&rdquo;</span>
                <span className={styles.statLabel}>most recent</span>
              </div>
            )}
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSave}>
          <label className={styles.label} htmlFor="name">
            Display name
          </label>
          <input
            id="name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />

          <label className={styles.label} htmlFor="email">
            Email (optional)
          </label>
          <input
            id="email"
            className={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />

          <button type="submit" className={styles.saveBtn}>
            {saved ? "Saved!" : "Save changes"}
          </button>
        </form>
      </main>
    </>
  );
}