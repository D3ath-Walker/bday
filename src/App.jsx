
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Welcome from "./components/Welcome";
import MemoryGame from "./components/MemoryGame";
import Secret from "./components/Secret";

import "./App.css";

function App() {
  const [currentScene, setCurrentScene] = useState("welcome");

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {currentScene === "welcome" && (
          <Welcome
            key="welcome"
            onContinue={() => setCurrentScene("memories")}
          />
        )}

        {currentScene === "memories" && (
          <MemoryGame
            key="memories"
            onBack={() => setCurrentScene("welcome")}
            onContinue={() => setCurrentScene("secret")}
          />
        )}

        {currentScene === "secret" && (
          <Secret
            key="secret"
            onBack={() => setCurrentScene("memories")}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
