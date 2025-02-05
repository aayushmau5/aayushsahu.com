import styles from "./style.module.css";

export default function UsersOnline({ usersOnline, websiteViews }) {
  return (
    <div className={styles.container}>
      <svg width="32" height="32" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          fill=""
          r="10"
          strokeWidth="2"
          className={styles.point}
        >
          <animate
            attributeName="r"
            from="8"
            to="20"
            dur="1.5s"
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="1.5s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="20" cy="20" r="10" className={styles.circle} />
      </svg>
      <div className={styles.highlight}>
        <a
          href="https://phoenix.aayushsahu.com/dashboard"
          target="_blank"
          rel="noreferrer"
        >
          Folks currently tuned in: {usersOnline}
        </a>
        <a
          href="https://phoenix.aayushsahu.com/dashboard"
          target="_blank"
          rel="noreferrer"
        >
          Total page views: {websiteViews}
        </a>
      </div>
    </div>
  );
}
