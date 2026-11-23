
import { motion } from "framer-motion";
import { Gift, Heart, Sparkles, Flower2 } from "lucide-react";

export default function Welcome({ onContinue }) {
  return (
    <motion.main
      className="welcome-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.8 }}
    >
      <div className="floating-decor decor-one">♡</div>
      <div className="floating-decor decor-two">✿</div>
      <div className="floating-decor decor-three">✨</div>
      <div className="floating-decor decor-four">♡</div>

      <motion.div
        className="welcome-content"
        initial={{ y: 35, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          className="gift-illustration"
          animate={{ y: [0, -9, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="gift-ribbon">🎀</div>
          <Gift size={76} strokeWidth={1.3} />
          <Sparkles className="gift-sparkle" size={25} />
        </motion.div>

        <div className="welcome-label">
          <Heart size={13} fill="currentColor" />
          A LITTLE GIFT FOR YOU
          <Heart size={13} fill="currentColor" />
        </div>

        <h1>
          Happy Birthday
          <span>Mabahoooo!</span>
        </h1>

        <p className="welcome-description">
          Today is all about you, my favourite person.
          I made a little something just for you.
        </p>

        <motion.button
          className="gift-button"
          onClick={onContinue}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Here's your gift</span>
          <Gift size={19} />
        </motion.button>

        <p className="welcome-footer">
          Made with love, just for you ♡
        </p>
      </motion.div>

      <div className="flower-decoration flower-left">
        <Flower2 size={85} strokeWidth={0.8} />
      </div>

      <div className="flower-decoration flower-right">
        <Flower2 size={105} strokeWidth={0.8} />
      </div>

      <div className="bottom-hearts">♡  ♡  ♡</div>
    </motion.main>
  );
}
