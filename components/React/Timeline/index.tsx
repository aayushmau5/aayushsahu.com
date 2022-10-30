import styles from "./style.module.css";

interface Step {
  time: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    time: "October 2022",
    title: "Gave talk at DelhiFOSS",
    description:
      "Organized by IndiaFOSS. Talked about Elixir, and what makes it great. My first in-person talk :) Met a lot of awesome folks.",
  },
  {
    time: "June 2022",
    title: "Started exploring elixir",
    description:
      "One of the best decisions I have ever made. I just looooove elixir, and its ecosystem. It felt like home for some reason, and kinda revived my love for programming.",
  },
  {
    time: "April 2022",
    title: "Full-Stack intern at Beatoven.ai",
    description: "Really love working here!",
  },
  {
    time: "November 2021",
    title: "Gave talk at AsyncAPI conf",
    description: "About my GSoC project: AsyncAPI diff",
  },
  {
    time: "June - December 2021",
    title: "Software intern at Basic roots consulting",
    description: "Worked with AWS and lots of JS",
  },
  {
    time: "June - August 2021",
    title: "GSoC mentee at Postman",
    description:
      "Started contributing to AsyncAPI org, and did GSoC there. I worked on the AsyncAPI diff library",
  },
  {
    time: "August 2020",
    title: "Started contributing to Open-Source ❤️",
    description:
      "Fell in love with the concept of open-source and started contributing to various projects",
  },
  {
    time: "2020",
    title: "Global pandemic COVID-19 hit",
    description:
      "Lockdown happened, and I was home for 2 years. Got the perfect opportunity to start learning and exploring web dev and stuff",
  },
  {
    time: "August 2019",
    title: "Got into college",
    description: "At JIIT, Noida",
  },
  {
    time: "2018",
    title: "Took a drop to prepare for JEE",
    description: "Though I didn't get selected lol",
  },
  {
    time: "2017",
    title: "Graduated School",
    description: "Fun days!",
  },
  {
    time: "2000",
    title: "Born",
    description: "lol",
  },
];

export default function Timeline() {
  const stepsLength = steps.length;

  return (
    <div className={styles.container}>
      {steps.map(({ time, title, description }, index) => (
        <>
          <Step time={time} title={title} description={description} />
          {stepsLength - 1 === index ? null : <Divider />}
        </>
      ))}
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
