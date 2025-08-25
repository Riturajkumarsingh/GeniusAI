import { Brain, Target, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StatsCards({ assessments }) {
  const getAverageScore = () => {
    if (!assessments?.length) return 0;
    const total = assessments.reduce(
      (sum, assessment) => sum + assessment.quizScore,
      0
    );
    return (total / assessments.length).toFixed(1);
  };

  const getLatestAssessment = () => {
    if (!assessments?.length) return null;
    return assessments[0];
  };

  const getTotalQuestions = () => {
    if (!assessments?.length) return 0;
    return assessments.reduce(
      (sum, assessment) => sum + assessment.questions.length,
      0
    );
  };

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Score</CardTitle>
          <Trophy className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{getAverageScore()}%</div>
          <p className="text-xs text-muted-foreground">
            Across all assessments
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Questions Practiced
          </CardTitle>
          <Brain className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{getTotalQuestions()}</div>
          <p className="text-xs text-muted-foreground">Total questions</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Latest Score</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {getLatestAssessment()?.quizScore.toFixed(1) || 0}%
          </div>
          <p className="text-xs text-muted-foreground">Most recent quiz</p>
        </CardContent>
      </Card>

      {/* Interview Preparation Section */}
      <Card>
        <CardHeader className="flex flex-col items-center justify-center space-y-2 pb-2">
          <CardTitle className="text-lg font-semibold text-blue-700">Interview Preparation</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <p className="text-gray-700 mb-2 text-center">
            Valuable resources for students and professionals to prepare effectively for job opportunities. Explore mock data and links below to boost your preparation!
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-2 text-left">
            <li>✅ Structured place for aptitude, coding, and technical interview materials</li>
            <li>✅ Guidance for freshers and job seekers to practice and build confidence</li>
            <li>✅ Mock Interview Questions & Answers</li>
            <li>✅ Tips for HR, Technical, and Coding Rounds</li>
          </ul>
          <div className="w-full mb-2">
            <h4 className="font-semibold text-blue-600 mb-1">Helpful Resources:</h4>
            <ul className="list-disc list-inside text-sm text-blue-700">
              <li><a href="https://www.geeksforgeeks.org/aptitude-questions-and-answers/" target="_blank" rel="noopener noreferrer">Aptitude Practice (GeeksforGeeks)</a></li>
              <li><a href="https://leetcode.com/explore/interview/" target="_blank" rel="noopener noreferrer">Coding Interview Practice (LeetCode)</a></li>
              <li><a href="https://www.interviewbit.com/hr-interview-questions/" target="_blank" rel="noopener noreferrer">HR Interview Questions (InterviewBit)</a></li>
              <li><a href="https://www.tutorialspoint.com/technical-interview-questions/index.htm" target="_blank" rel="noopener noreferrer">Technical Interview Q&A (TutorialsPoint)</a></li>
            </ul>
          </div>
          <div className="w-full mb-2">
            <h4 className="font-semibold text-blue-600 mb-1">Mock Data:</h4>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li><b>Aptitude:</b> What is the next number in the sequence: 2, 4, 8, 16, ? <i>Answer: 32</i></li>
              <li><b>Coding:</b> Write a function to reverse a string in JavaScript. <i>Answer: function reverse(str) {'{'} return str.split('').reverse().join(''); {'}'}</i></li>
              <li><b>Technical:</b> What is a closure in JavaScript? <i>Answer: A closure is a function that has access to its own scope, the outer function's scope, and the global scope.</i></li>
              <li><b>HR:</b> Tell me about yourself. <i>Answer: Briefly introduce your education, skills, and career goals.</i></li>
            </ul>
          </div>
          <a
            href="/interview"
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Start Practicing
          </a>
        </CardContent>
      </Card>
    </div>
  );
}