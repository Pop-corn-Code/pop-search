import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";
import Prism from "prismjs"; // For syntax highlighting
// import "prismjs/themes/prism-tomorrow.css"; // Prism.js theme for syntax highlighting
import ReactMarkdown from 'react-markdown';

const Loading = ({ isVisible }) =>
  isVisible && <h2 className="mt-4 text-center">Loading ...</h2>;

const Result = ({ result, isVisible }) => {
  useEffect(() => {
    if (result) {
      Prism.highlightAll(); // Highlight syntax when the result updates
    }
  }, [result]);

  return (
    isVisible && (
      //  <p className="mt-5 text-center" style={{ width: "60%" }}>
      //     <ReactMarkdown>{result}</ReactMarkdown>
      // </p>
      <div className="mt-5 text-center" style={{ width: "60%", textAlign: "left" }}>
        <div
          // dangerouslySetInnerHTML={{ __html: result }}
          style={{
            background: "#f9f9f9",
            borderRadius: "8px",
            padding: "16px",
            fontFamily: "monospace",
            overflowX: "auto",
          }}
        />
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

  async function generate() {
    const response = await fetch("/api/gemini-generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw (
        data.error || new Error(`Request failed with status ${response.status}`)
      );
    }
    return { result: data.result };
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await generate();
      setResult(data.result);
      setLoading(false);
      ref.current.value = null;
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <div>
      <Head>
        <title> 🔍 - OpenAI-Pop Search</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
        <h3>
          <span style={{ color: "#1abc9c" }}>Pop</span>
          <span style={{ color: "#e74c3c" }}>~co</span>
          <span style={{ color: "#f1c40f", fontSize: "20px" }}>⭐</span>
          <span style={{ color: "#e74c3c" }}>n's </span>
          <span style={{ color: "#f1c40f" }}>Search</span>
        </h3>
        <form onSubmit={handleOnSubmit}>
          <input
            ref={ref}
            type="text"
            name="title"
            placeholder="search ..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <Loading isVisible={isPending} input={input} />
        <Result isVisible={!isPending} result={result} />
      </main>
    </div>
  );
}
