// components/Sidebar/Sidebar.jsx

import styles from "./Sidebar.module.css";

export default function Sidebar({
  chats,
  activeChat,
  onSelectChat,
  onNewChat,
}) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <h3>
          <span>Pop</span> Search
        </h3>
      </div>

      <button
        className={styles.newChat}
        onClick={onNewChat}
      >
        + New Chat
      </button>

      <div className={styles.history}>
        {chats.map(chat => (
          <div
            key={chat.id}
            className={`${styles.chat} ${
              activeChat === chat.id
                ? styles.active
                : ""
            }`}
            onClick={() => onSelectChat(chat.id)}
          >
            {chat.title}
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        ⚙ Settings
      </div>
    </aside>
  );
}