import fs from "fs";
import path from "path";

const resumeDirectory = path.join(process.cwd(), "public", "resume");
const fileNames = fs.readdirSync(resumeDirectory);

export default function getResumeLink(): string {
  const resumeFileName = fileNames[0];
  return resumeFileName;
}
