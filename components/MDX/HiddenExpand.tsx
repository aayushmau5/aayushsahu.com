import { useState } from "react";

import styles from "@/styles/MdxComponentStyles/HiddenExpand.module.css";

export default function HiddenExpand({ summary, children }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <details className={styles.details}>
      <summary
        className={styles.summary}
        style={{
          borderRadius: `0.55rem 0.55rem ${isOpen ? 0 : "0.55rem"} ${
            isOpen ? 0 : "0.55rem"
          }`,
        }}
        onClick={() => setOpen((v) => !v)}
      >
        {summary}
      </summary>
      <div className={styles.children}>{children}</div>
    </details>
  );
}
