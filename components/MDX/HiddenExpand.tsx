import { useState } from "react";

export default function HiddenExpand({ summary, children }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <details>
      <summary
        style={{
          color: "white",
          fontSize: "1.1rem",
          cursor: "pointer",
          background: "#22272a",
          padding: "1rem",
          borderRadius: `0.55rem 0.55rem ${isOpen ? 0 : "0.55rem"} ${
            isOpen ? 0 : "0.55rem"
          }`,
        }}
        onClick={() => setOpen((v) => !v)}
      >
        {summary}
      </summary>
      <div
        style={{
          borderTop: "1px solid #262525",
          padding: "1rem",
          background: "#22272a",
          borderRadius: "0 0 0.55rem 0.55rem",
        }}
      >
        {children}
      </div>
    </details>
  );
}
