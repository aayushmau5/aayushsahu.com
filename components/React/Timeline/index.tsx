import styles from "./style.module.css";

export default function Timeline() {
  return (
    <div className={styles.container}>
      <Step time={"April 2022"} title={"Full-Stack intern at Beatoven.ai"} />
      <Divider />
      <Step
        time={"November 2021"}
        title={"Gave talk at AsyncAPI conf"}
        description={"About my GSoC project: AsyncAPI diff"}
      />
      <Divider />
      <Step
        time={"June - December 2021"}
        title={"Software intern at Basic roots consulting"}
        description={"Worked with AWS and NodeJS"}
      />
      <Divider />
      <Step
        time={"June - August 2021"}
        title={"Did GSoC at Postman"}
        description={
          "Started contributing to AsyncAPI org, and did GSoC there. I worked on the AsyncAPI diff library"
        }
      />
      <Divider />
      <Step
        time={"August 2020"}
        title={"Started contributing to Open-Source ❤️"}
        description={
          "Loved the concept of open-source and started contributing to various projects"
        }
      />
      <Divider />
      <Step
        time={"2020"}
        title={"Global pandemic COVID-19 hit"}
        description={
          "Lockdown happened, and I was home for 2 years. Got the perfect opportunity to start learning and exploring web dev and stuff"
        }
      />
      <Divider />
      <Step
        time={"August 2019"}
        title={"Got into college"}
        description={"At JIIT, Noida"}
      />
      <Divider />
      <Step
        time={2018}
        title={"Took a drop to prepare for JEE"}
        description={"Though I didn't get selected lol"}
      />
      <Divider />
      <Step time={2017} title={"Graduated school"} />
      <Divider />
      <Step time={2000} title={"Born"} description={"lol"} />
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
