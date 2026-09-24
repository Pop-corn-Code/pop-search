import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";
import Prism from "prismjs";
import ReactMarkdown from "react-markdown";
import HistorySidebar from "../components/HistorySidebar";
import { useApp } from "../context/AppContext";

const Loading = ({ isVisible }) =>
  isVisible && <p className={styles.loading}>Searching …</p>;

const Result = ({ result, isVisible }) => {
  useEffect(() => {
    if (result) {
      Prism.highlightAll();
    }
  }, [result]);

  return (
    isVisible &&
    result && (
      <div className={styles.resultCard}>
        <ReactMarkdown>{result}</ReactMarkdown>
      </div>
    )
  );
};

export default function Home() {
  const ref = useRef(null);
  const [isPending, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [input, setInput] = useState("");
  const { addHistoryItem } = useApp();

  async function generate(query) {
    const response = await fetch("/api/gemini-generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: query }),
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw (
        data.error || new Error(`Request failed with status ${response.status}`)
      );
    }
    return { result: data.result };
  }

  async function runSearch(query) {
    if (!query || !query.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await generate(query);
      setResult(data.result);
      addHistoryItem(query.trim());
    } catch (error) {
      console.error(error);
      setResult("Something went wrong with that search. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    await runSearch(input);
  }

  function handleHistorySelect(query) {
    setInput(query);
    if (ref.current) ref.current.value = query;
    runSearch(query);
  }

  return (
    <div>
      <Head>
        <title>Pop&apos;con&apos;s Search</title>
      </Head>

      <HistorySidebar onSelect={handleHistorySelect} />

      <main className={styles.main}>
        <p className={styles.tagline}>Ask it anything. It&apos;ll pop right back.</p>

        <form className={styles.form} onSubmit={handleOnSubmit}>
          <input
            ref={ref}
            className={styles.input}
            type="text"
            name="title"
            placeholder="search …"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className={styles.submitBtn} type="submit">
            Search
          </button>
        </form>

        <Loading isVisible={isPending} />
        <Result isVisible={!isPending} result={result} />
      </main>
    </div>
  );
}