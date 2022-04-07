import Timeline from "@/components/React/Timeline";
import { PageSEO } from "@/components/SEO";

export default function Life() {
  return (
    <>
      <PageSEO
        title="Life | Aayush Kumar Sahu"
        description="High level view of my life."
      />
      <div>
        <h1>Life</h1>
        <p>Things I have been upto</p>
        <Timeline />
      </div>
    </>
  );
}
