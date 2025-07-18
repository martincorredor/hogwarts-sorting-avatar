import { useState } from "react";
import StartScreen from "../components/StartScreen";
import Quiz from "../components/Quiz";

type AppState = "start" | "quiz";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("start");
  const [userName, setUserName] = useState<string>("");

  const handleStartQuiz = (name: string) => {
    setUserName(name);
    setAppState("quiz");
  };

  const handleRestart = () => {
    setUserName("");
    setAppState("start");
  };

  return (
    <div className="min-h-screen">
      {appState === "start" && <StartScreen onStartQuiz={handleStartQuiz} />}
      {appState === "quiz" && <Quiz userName={userName} onRestart={handleRestart} />}
    </div>
  );
};

export default Index;
