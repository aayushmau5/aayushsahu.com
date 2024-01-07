import { svgIcons } from "./icons";
import styles from "./style.module.css";

export default function Code({ filename, ...props }) {
  return (
    <div className={styles.container}>
      {filename ? (
        <div className={styles.filenameContainer}>
          <Buttons />
          <div className={styles.filename}>
            <span className={styles.iconSvg}>
              <FileIcon type={getFileType(filename)} />
            </span>
            {filename}
          </div>
        </div>
      ) : null}
      {props.children}
    </div>
  );
}

function Buttons() {
  return (
    <div className={styles.buttons}>
      <span className={`${styles.dot} ${styles.red}`}></span>
      <span className={`${styles.dot} ${styles.yellow}`}></span>
      <span className={`${styles.dot} ${styles.green}`}></span>
    </div>
  );
}

function getFileType(filename: string) {
  const filenameArray = filename.split(".");
  return filenameArray[filenameArray.length - 1];
}

function FileIcon({ type }: { type: string }) {
  switch (type) {
    case "js":
      return svgIcons.js;
    case "ts":
      return svgIcons.ts;
    case "tsx":
      return svgIcons.ts;
    case "html":
      return svgIcons.html;
    case "css":
      return svgIcons.css;
    case "exs":
      return svgIcons.ex;
    case "ex":
      return svgIcons.ex;
    case "livemd":
      return svgIcons.ex;
    case "json":
      return svgIcons.json;
    default:
      return svgIcons.regular;
  }
}
