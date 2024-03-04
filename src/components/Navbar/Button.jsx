import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Navigation from "./Navigation";

export default function Button() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="app__navbar-button"
      >
        <div className={`app__navbar-burger ${isActive ? "active" : ""}`}></div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            className="app__navbar-backdrop"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .2}}
            exit={{opacity: 0, transition: {delay: .2}}}
            
            onClick={() => {
              setIsActive(false);
            }}
          >
            <Navigation />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
