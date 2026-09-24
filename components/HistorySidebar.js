import { useApp } from "../context/AppContext";
import styles from "./HistorySidebar.module.css";

function timeAgo(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default function HistorySidebar({ onSelect }) {
  const { history, removeHistoryItem, clearHistory, sidebarOpen, setSidebarOpen } = useApp();

  return (
    <>
      {sidebarOpen && (
        <div className={styles.backdrop} onClick={() => setSidebarOpen(false)} />
      )}
      <aside className={`${styles.panel} ${sidebarOpen ? styles.panelOpen : ""}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Your searches</h2>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => setSidebarOpen(false)}
            aria-label="Close history"
          >
            ✕
          </button>
        </div>

        {history.length === 0 ? (
          <p className={styles.empty}>Nothing here yet — run a search and it&apos;ll show up.</p>
        ) : (
          <ul className={styles.list}>
            {history.map((item) => (
              <li key={item.timestamp} className={styles.item}>
                <button
                  type="button"
                  className={styles.itemQuery}
                  onClick={() => {
                    onSelect?.(item.query);
                    setSidebarOpen(false);
                  }}
                >
                  <span className={styles.itemText}>{item.query}</span>
                  <span className={styles.itemTime}>{timeAgo(item.timestamp)}</span>
                </button>
                <button
                  type="button"
                  className={styles.removeBtn}
                  onClick={() => removeHistoryItem(item.timestamp)}
                  aria-label={`Remove "${item.query}" from history`}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}

        {history.length > 0 && (
          <button type="button" className={styles.clearBtn} onClick={clearHistory}>
            Clear all history
          </button>
        )}
      </aside>
    </>
  );
}