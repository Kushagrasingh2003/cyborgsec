"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/home-page/main";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight className=" w-full md:mt-10 z-0">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=" top-10 text-3xl md:text-left text-center md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug "
      >
        Leading Cyber  <br/>{" "}
        <Highlight className="text-black dark:text-white">
        Security Courses
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
