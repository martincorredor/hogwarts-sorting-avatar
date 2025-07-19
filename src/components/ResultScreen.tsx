import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { houses } from '../data/quizData';
import ParticlesBackground from './ParticlesBackground';
import { getVideoStatus } from '../services/heygenService';

interface ResultScreenProps {
  userName: string;
  house: string;
  onRestart: () => void;
}

const ResultScreen = ({ userName, house, onRestart }: ResultScreenProps) => {
  const houseData = houses[house];
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loadingVideo, setLoadingVideo] = useState(true);


  useEffect(() => {
    const fetchVideo = async () => {
      try {
        let ready = false;
        while (!ready) {
          const status = await getVideoStatus(houseData.videoId || '');
          if (status.status === 'completed' && status.video_url) {
            setVideoUrl(status.video_url);
            ready = true;
          } else {
            await new Promise((res) => setTimeout(res, 3000));
          }
        }
      } catch (err) {
        console.error('Error obteniendo video:', err);
      } finally {
        setLoadingVideo(false);
      }
    };

    fetchVideo();
  }, []);

  if (!houseData) return null;

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
            transition={{ delay: 0.7, type: 'spring' }}
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
            {loadingVideo ? (
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-lg">Cargando tu video...</p>
              </div>
            ) : videoUrl ? (
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <video
                  src={videoUrl}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <p>No se pudo cargar el video.</p>
            )}
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
