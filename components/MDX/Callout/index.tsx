import { AiOutlineInfoCircle, AiOutlineWarning } from "react-icons/ai";
import { TiInfoOutline } from "react-icons/ti";

import styles from "./style.module.css";

type CalloutTypes = "info" | "danger";

interface Props {
  type: CalloutTypes;
  children: any;
}

export default function Callout({ type, children }: Props) {
  return (
    <aside
      className={`${styles.aside} ${
        type === "info" ? styles.info : styles.danger
      }`}
    >
      <div
        className={`${styles.icon} ${
          type === "info" ? styles.info : styles.danger
        }`}
      >
        {ShowIcon(type)}
      </div>
      {children}
    </aside>
  );
}

function ShowIcon(type: CalloutTypes) {
  if (type === "info") {
    return <AiOutlineInfoCircle />;
  } else if (type === "danger") {
    return <TiInfoOutline />;
  }
}
