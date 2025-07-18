import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Question } from "../data/quizData";

interface QuestionCardProps {
  question: Question;
  onAnswer: (house: string) => void;
}

const QuestionCard = ({ question, onAnswer }: QuestionCardProps) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="magical-border rounded-xl p-8 bg-card/50 backdrop-blur-sm">
        <motion.h2
          className="text-2xl font-bold text-center mb-8 text-foreground"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {question.question}
        </motion.h2>
        
        <div className="grid gap-4">
          {question.options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Button
                onClick={() => onAnswer(option.house)}
                variant="house"
                className="w-full p-6 text-left justify-start h-auto text-wrap"
              >
                <span className="text-lg">{option.text}</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default QuestionCard;