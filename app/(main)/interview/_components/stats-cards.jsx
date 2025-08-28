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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Average Score */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center border border-gray-200">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Average Score</h3>
        <Trophy className="h-6 w-6 text-yellow-500 mb-2" />
        <div className="text-3xl font-bold text-gray-900">{getAverageScore()}%</div>
        <p className="text-xs text-gray-500 mt-2">Across all assessments</p>
      </div>

      {/* Questions Practiced */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center border border-gray-200">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Questions Practiced</h3>
        <Brain className="h-6 w-6 text-blue-500 mb-2" />
        <div className="text-3xl font-bold text-gray-900">{getTotalQuestions()}</div>
        <p className="text-xs text-gray-500 mt-2">Total questions</p>
      </div>

      {/* Latest Score */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center border border-gray-200">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Latest Score</h3>
        <Target className="h-6 w-6 text-green-500 mb-2" />
        <div className="text-3xl font-bold text-gray-900">{getLatestAssessment()?.quizScore.toFixed(1) || 0}%</div>
        <p className="text-xs text-gray-500 mt-2">Most recent quiz</p>
      </div>

      {/* Interview Preparation Section */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center border border-gray-200">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">Interview Preparation</h3>
        <p className="text-gray-700 mb-4 text-center">
          Valuable resources for students and professionals to prepare effectively for job opportunities. Explore mock data and links below to boost your preparation!
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4 text-left">
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
      </div>
    </div>
  );
}