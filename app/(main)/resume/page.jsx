
import { getResume } from "@/action/resume";
import ResumeBuilder from "./_components/resume_builder";

export default async function ResumePage() {
  const resume = await getResume();

  return (
    <div className="container mx-auto py-6">
      <ResumeBuilder initialContent={resume?.content} />
    </div>
  );
}