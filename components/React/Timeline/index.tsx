import styles from "./style.module.css";

export default function Timeline() {
  return (
    <div className={styles.container}>
      <Step time={2012} title={"Title"} />
      <Divider />
      <Step time={2012} title={"Title"} description={"Description"} />
      <Divider />
      <Step time={2012} title={"Title"} />
      <Divider />
      <Step time={2012} title={"Title"} description={"Description"} />
      <Divider />
      <Step time={2012} title={"Title"} />
      <Divider />
      <Step
        time={2012}
        title={"Title"}
        description={
          "DescriptionLorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi veritatis blanditiis aspernatur pariatur? Rerum ipsa, provident illum numquam esse assumenda, nulla porro inventore unde optio similique ex quos molestias. Delectus!"
        }
      />
    </div>
  );
}

function Step({ title, description = undefined, time }) {
  return (
    <div className={styles.stepsContainer}>
      <p className={styles.time}>{time}</p>

      <Dot />

      <div className={styles.details}>
        <p className={styles.title}>{title}</p>
        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </div>
    </div>
  );
}

function Divider() {
  return <div className={styles.divider} />;
}

function Dot() {
  return <div className={styles.dot} />;
}
