import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { houses } from "../data/quizData";
import ParticlesBackground from "./ParticlesBackground";

interface ResultScreenProps {
  userName: string;
  house: string;
  onRestart: () => void;
}

const ResultScreen = ({ userName, house, onRestart }: ResultScreenProps) => {
  const houseData = houses[house];
  
  if (!houseData) {
    return null;
  }

  const houseClass = `house-${house}`;

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticlesBackground />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl mx-auto px-6"
      >
        <motion.div
          className="magical-border rounded-2xl p-8 bg-card/50 backdrop-blur-sm"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.h1
            className="text-4xl font-bold mb-4 glow-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            ¡Felicidades, {userName}!
          </motion.h1>
          
          <motion.div
            className={`${houseClass} text-white p-6 rounded-xl mb-6`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
          >
            <h2 className="text-5xl font-bold mb-2">{houseData.name}</h2>
            <p className="text-xl opacity-90">Tu casa en Hogwarts</p>
          </motion.div>
          
          <motion.p
            className="text-lg text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {houseData.description}
          </motion.p>
          
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">Tus cualidades:</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {houseData.traits.map((trait, index) => (
                <motion.span
                  key={trait}
                  className="px-4 py-2 bg-accent/50 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-lg"
                poster="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop"
              >
                <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            <Button
              onClick={onRestart}
              variant="magical"
              size="lg"
              className="w-full h-14 text-lg font-semibold"
            >
              Tomar el Quiz Nuevamente
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResultScreen;