import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.8 }}
      onAnimationComplete={onComplete}
    >
      <div className="text-center">
        <div className="relative flex items-center justify-center mb-6">
          <motion.div
            className="absolute w-32 h-32 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.3, 1], opacity: [0, 0.4, 0.15] }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            style={{ background: 'radial-gradient(circle, hsl(28 95% 55% / 0.3), transparent)' }}
          />
          <motion.img
            src={logo}
            alt="AJ Logo"
            className="h-24 w-auto relative z-10"
            style={{ filter: 'drop-shadow(0 0 15px hsl(28 95% 55% / 0.5))' }}
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              rotate: [-180, 10, 0],
              opacity: [0, 1, 1],
            }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 150, damping: 15 }}
          />
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 160 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeInOut' }}
          className="h-0.5 mx-auto rounded-full overflow-hidden"
          style={{ backgroundImage: 'var(--gradient-primary)' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground text-sm mt-4"
        >
          {'<AJ/>'.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="text-primary font-bold"
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {' '}Loading...
          </motion.span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
