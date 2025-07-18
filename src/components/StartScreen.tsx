import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import ParticlesBackground from "./ParticlesBackground";

interface StartScreenProps {
  onStartQuiz: (name: string) => void;
}

const StartScreen = ({ onStartQuiz }: StartScreenProps) => {
  const [name, setName] = useState("");

  const handleStart = () => {
    if (name.trim()) {
      onStartQuiz(name.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticlesBackground />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-md mx-auto px-6"
      >
        <motion.h1
          className="text-6xl font-bold mb-8 glow-text bg-gradient-gold bg-clip-text text-transparent"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hogwarts
        </motion.h1>
        
        <motion.h2
          className="text-3xl font-semibold mb-4 text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Sorting Avatar
        </motion.h2>
        
        <motion.p
          className="text-lg text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Descubre a qué casa de Hogwarts perteneces
        </motion.p>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="magical-border rounded-lg p-1">
            <Input
              type="text"
              placeholder="Ingresa tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-card/50 backdrop-blur-sm border-0 text-center text-lg h-12"
              onKeyDown={(e) => e.key === "Enter" && handleStart()}
            />
          </div>
          
          <Button
            onClick={handleStart}
            disabled={!name.trim()}
            variant="magical"
            size="lg"
            className="w-full h-14 text-lg font-semibold float-animation"
          >
            Start Quiz
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p>El Sombrero Seleccionador te espera...</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StartScreen;