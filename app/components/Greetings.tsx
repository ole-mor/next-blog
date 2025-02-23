import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  "Heisan sveisan👋",
  "Guten tagen🌞",
  "Sjø sju😉",
  "Hola mundo🌎",
  "Bonjour baguette🥖"
];

export default function Greeting() {
    const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
    const [animationState, setAnimationState] = useState("exiting"); // New state
  
    useEffect(() => {
      let timeoutId: ReturnType<typeof setTimeout>;
  
      if (animationState === "exiting") {
        timeoutId = setTimeout(() => {
          setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
          setAnimationState("entering");
        }, 1000); // Match exit animation duration (or slightly longer)
      } else if (animationState === "entering") {
        timeoutId = setTimeout(() => {
          setAnimationState("exiting");
        }, 6000); // 5 seconds - exit animation duration
      }
  
      return () => clearTimeout(timeoutId);
    }, [animationState, currentGreetingIndex]); // Add animationState to dependency array
  
  
    const currentGreeting = greetings[currentGreetingIndex];
  
    const variants = {
      enter: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeInOut" }
      },
      exit: {
        opacity: 0,
        x: -20,
        transition: { duration: 1, ease: "easeInOut" }
      }
    };
  
    return (
      <div className="text-left">
        <AnimatePresence>
          {animationState === "entering" && ( // Conditionally render
            <motion.h1
              key={currentGreeting}
              className="text-5xl font-bold mb-4 inline-block"
              variants={variants}
              initial="exit"
              animate="enter"
              exit="exit"
            >
              {currentGreeting}
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
    );
  }
  