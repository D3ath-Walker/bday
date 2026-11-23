
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ArrowLeft,
  X,
  Sparkles,
  LockKeyhole,
  Check
} from "lucide-react";

const memories = [
  {
    id: 1,
    image: "/images/memories/memory-1.jpg",
    title: "Responsibility Freak",
    emoji: "🤓",
    message: `Sooooo Mabahoooo, always ready to take responsibility even when you've got a million things to do, and never asking for help, huhhhh?

Why so mabaho? 😭

I'm here na, babu. Please let me join you and help you out. (And annoy you in the process, mehehehehe. JK!)

Mabahooooo! ❤️`
  },
  {
    id: 2,
    image: "/images/memories/memory-2.jpg",
    title: "My Santa Claus",
    emoji: "🎅",
    message: `Now THIS is going to be my family heirloom LMAOOO.

SOOOOO KAWAIIIIII! 😭💗

(Hehe, she's mine. Don't look so closely, Mabahoooo!) 😝😝😝`
  },
  {
    id: 3,
    image: "/images/memories/memory-3.jpg",
    title: "The Cutest",
    emoji: "🥺",
    message: `Fun fact: I have A LOT of pictures and videos of yours (256 pictures and 56 videos, to be precise).

But I always find myself looking at this one. You know why?

Because you look like an EGG HAHAHAHAHA. 😭

JK, you silly!

I actually look at this picture because you were sick and feeling cold that time, and I wasn't there to hug you, keep you warm, or take care of you.

So whenever I miss you, I look at this picture. Somehow, it reminds me of why I keep working hard every day.

Because I'm coming there soon, po. I'll finally get to hug you, take care of you and be beside you.

Just you wait, Mabahoooo. ❤️`
  },
  {
    id: 4,
    image: "/images/memories/memory-4.jpg",
    title: "Sleepy Babu",
    emoji: "💤",
    message: `HAHAHAHAHAHAHAHA SLEEPYYYY HEADDD!

I KNOW YOU DROOL. 😭😭

If I were there, I'd probably kiss your forehead and hug you really, really tight, you Mabahoooo.

Mahaaal kita, my Filipinaaaaa! ❤️`
  }
];

export default function MemoryGame({ onBack, onContinue }) {
  const [selected, setSelected] = useState(null);
  const [discovered, setDiscovered] = useState([]);

  const openMemory = (memory) => {
    setDiscovered((previous) =>
      previous.includes(memory.id)
        ? previous
        : [...previous, memory.id]
    );

    setSelected(memory);
  };

  const progress = discovered.length * 25;

  return (
    <motion.main
      className="memory-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="memory-container">

        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={18} />
          Back
        </button>

        <motion.div
          className="memory-heading"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <span className="memory-eyebrow">
            <Heart size={13} fill="currentColor" />
            A LITTLE GAME FOR YOU
            <Heart size={13} fill="currentColor" />
          </span>

          <h1>
            Guess which picture
            <span>I like the most? 💗</span>
          </h1>

          <p>
            Hehehe, let's see how well you know me!
            Open all four pictures to discover something special.
          </p>
        </motion.div>

        <div className="memory-progress">
          <div className="progress-label">
            <span>Memories discovered</span>
            <strong>{discovered.length} / 4</strong>
          </div>

          <div className="progress-track">
            <motion.div
              className="progress-fill"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        
<div className="memory-grid">
  {memories.map((memory, index) => {
    const isDiscovered = discovered.includes(memory.id);

    return (
      <motion.button
        key={memory.id}
        className={`memory-card ${isDiscovered ? "discovered" : ""}`}
        onClick={() => openMemory(memory)}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.12 }}
        whileTap={{ scale: 0.96 }}
        whileHover={{ y: -5 }}
      >
        <div className="polaroid">
          <div className="polaroid-image">
            {isDiscovered ? (
              <motion.img
                src={memory.image}
                alt={memory.title}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            ) : (
              <div className="hidden-memory">
                <Heart size={35} fill="currentColor" />
                <span>?</span>
              </div>
            )}

            {isDiscovered && (
              <span className="discovered-mark">
                <Check size={15} />
              </span>
            )}
          </div>

          <div className="polaroid-caption">
  {isDiscovered ? (
    <>
      <span>{memory.title}</span>
      <span className="memory-emoji">{memory.emoji}</span>
    </>
  ) : (
    <span className="hidden-name">??? 💗</span>
  )}
</div>
        </div>

        <span className="tap-hint">
          {isDiscovered ? "Discovered ♡" : "Tap to reveal ♡"}
        </span>
      </motion.button>
    );
  })}
</div>


        <AnimatePresence>
          {discovered.length === 4 && (
            <motion.button
              className="secret-unlock"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              onClick={onContinue}
            >
              <Sparkles size={19} />
              <span>YOU UNLOCKED THE SECRET MESSAGE 🥳</span>
              <Heart size={17} fill="currentColor" />
            </motion.button>
          )}
        </AnimatePresence>

        {discovered.length !== 4 && (
          <p className="memory-footer">
            <LockKeyhole size={13} />
            A little surprise is waiting for you...
          </p>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="memory-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="memory-modal"
              initial={{ opacity: 0, y: 35, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close message"
              >
                <X size={20} />
              </button>

              <div className="modal-heart">♡</div>

              <div className="modal-photo">
                <img src={selected.image} alt={selected.title} />
              </div>

              <span className="modal-eyebrow">
                A LITTLE MEMORY FOR YOU
              </span>

              <h2>
                {selected.title} {selected.emoji}
              </h2>

              <div className="modal-message">
                {selected.message.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="modal-signature">
                For my Fillipnaaaaa!! ♡
              </div>

              
<button
  className="modal-done"
  onClick={() => setSelected(null)}
>
  {selected.id === 3
    ? "you found it!! so mabahoo 💗"
    : "hehe its good but not my favorite"}
</button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
