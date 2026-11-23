
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Flower2,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

export default function Secret({ onBack }) {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);

  const openLetter = () => {
    setOpened(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.3;

      audioRef.current.play().catch((error) => {
        console.log("Audio playback could not start:", error);
      });
    }
  };

  return (
    <motion.main
      className="secret-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background music */}
      <audio
        ref={audioRef}
        src="/audio/birthday-song.mp3"
        loop
        preload="auto"
      />

      <div className="secret-glow" />

      {/* Floating flowers */}
      <motion.div
        className="secret-decoration secret-flower flower-one"
        animate={{
          rotate: [0, 8, -8, 0],
          y: [0, -8, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🌸
      </motion.div>

      <motion.div
        className="secret-decoration secret-flower flower-two"
        animate={{
          rotate: [0, -8, 8, 0],
          y: [0, 8, 0],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        🌷
      </motion.div>

      <div className="secret-content">
        {/* Heading */}
        <motion.div
          className="secret-heading"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <span>A LITTLE SOMETHING FOR YOU</span>
          <h1>One last surprise, babu 💗</h1>
          <p>Because four memories were never enough...</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!opened ? (
            /* Envelope screen */
            <motion.div
              key="envelope"
              className="envelope-area"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0, y: -30 }}
            >
              <motion.div
                className="secret-envelope"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="envelope-back" />

                <div className="envelope-paper">
                  <Heart
                    size={38}
                    fill="#f28aaf"
                    color="#f28aaf"
                  />
                </div>

                <div className="envelope-flap" />
                <div className="envelope-front" />

                <div className="envelope-seal">
                  <Heart
                    size={25}
                    fill="white"
                    color="white"
                  />
                </div>
              </motion.div>

              <p className="envelope-hint">
                Psst... this one's just for you.
              </p>

              <button
                className="open-letter-button"
                onClick={openLetter}
              >
                <Heart size={17} fill="currentColor" />
                Open your little surprise
              </button>
            </motion.div>
          ) : (
            /* Birthday letter screen */
            <motion.div
              key="letter"
              className="love-letter"
              initial={{ opacity: 0, y: 35, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              {/* Fixed picture */}
              <div className="letter-photo">
                <img
                  src="/images/letter-photo.jpg"
                  alt="A special picture for Mabahoooo"
                />
              </div>

              {/* Scrollable letter */}
              <div className="letter-scroll">
                <div className="letter-top">
                  <Flower2 size={25} />
                  <span>
                    A LETTER FOR MY FAVOURITE PERSON
                  </span>
                  <Flower2 size={25} />
                </div>

                <h2>To my Mabahoooo,</h2>

                <div className="letter-message">
                  <p>
                    Happy birthday, my babuuuu! 💗
                  </p>

                  <p>
                    I wish I could be there right now, annoying you,
                    making you laugh, holding your tightttttt in my arms and giving
                    you the biggest birthday hug ever po.  
                  </p>

                  <p>
                    I know I can't be beside you today, and sometimes
                    that distance really sucks(as i wanna tickle you hehe). But even from miles
                    away, I wanna make you feel how much you are loved and that you not alone anymore as i am always here for you po.
                  </p>

                  <p>
                    I hope your this birthday is filled with all the love, laughter, 
                    and happiness you deserve (hahaha but its filled with work rn). You are such a special person,
                    and I am so grateful to have you in my life. 
                  </p>

                  <p>
                    Keep being the clumsy,silly,lazy ass, bastosssss!!, hardworking, adorable
                    little Mabahoo that I fell for. And please,
                    let me take care of you sometimes too, okay?
                    You don't have to handle everything alone.
                  </p>

                  <p>
                    One day, there won't be a screen between us.
                    No goodnight calls ending with a goodbye.
                    Just you and me, together. ❤️
                  </p>
                </div>

                <div className="letter-signature">
                  <span>With all my love,</span>
                  <strong>
                    Your favourite annoyance hehe ♡
                  </strong>
                </div>

                <div className="letter-bottom">
                  ✿ I LOVE YOU ✿
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.div
          className="secret-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Sparkles size={14} />
          <span>
            Made of little memories and a whole lot of love
          </span>
          <Sparkles size={14} />
        </motion.div>

        <button
          className="secret-back-button"
          onClick={onBack}
        >
          <ArrowLeft size={15} />
          Back to our memories
        </button>
      </div>
    </motion.main>
  );
}
