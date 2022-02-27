import { svgIcons } from "./icons";
import styles from "./style.module.css";

export default function CodeBlock({ filename, ...props }) {
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
      <div className={styles.codeContainer}>
        <code {...props} className={styles.code} />
      </div>
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
    case "html":
      return svgIcons.html;
    case "css":
      return svgIcons.css;
    default:
      return svgIcons.regular;
  }
}
