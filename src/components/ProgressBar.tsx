import { motion } from "framer-motion";

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar = ({ currentQuestion, totalQuestions }: ProgressBarProps) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex justify-between text-sm text-muted-foreground mb-2">
        <span>Pregunta {currentQuestion} de {totalQuestions}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      
      <div className="h-3 bg-muted rounded-full overflow-hidden magical-border">
        <motion.div
          className="h-full bg-gradient-gold relative"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;