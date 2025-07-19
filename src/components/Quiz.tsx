import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { questions, calculateHouse } from "../data/quizData";
import QuestionCard from "./QuestionCard";
import ProgressBar from "./ProgressBar";
import LoadingScreen from "./LoadingScreen";
import ResultScreen from "./ResultScreen";
import ParticlesBackground from "./ParticlesBackground";

interface QuizProps {
  userName: string;
  onRestart: () => void;
}

const Quiz = ({ userName, onRestart }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [userHouse, setUserHouse] = useState<string>("");

  const handleAnswer = (house: string) => {
    const newAnswers = [...answers, house];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsLoading(true);
      
      setTimeout(() => {
        const calculatedHouse = calculateHouse(newAnswers);
        setUserHouse(calculatedHouse);
        setIsLoading(false);
        setShowResults(true);
      }, 3000);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (showResults) {
    return (
      <ResultScreen 
        userName={userName}
        house={userHouse}
        onRestart={onRestart}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <ParticlesBackground />
      
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 py-8">
        <ProgressBar 
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={questions.length}
        />
        
        <div className="flex-1 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <QuestionCard
              key={currentQuestionIndex}
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Quiz;