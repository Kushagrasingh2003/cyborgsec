"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { remark } from 'remark';
import html from 'remark-html';
import Image from "next/image";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const [data, setData] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    // Parse the HTML content and extract h2 headings
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const Elements = tempDiv.querySelectorAll('h2 , p');
    // const pElements = tempDiv.querySelectorAll('p');
    const h2Data = Array.from(Elements).map(el => ({
      text: el.textContent,
      tag:el.tagName.toLowerCase(),
      id: el.id
    }));
    setData(h2Data);
  }, [content,activeCard]);

  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = data.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = data.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
//   const linearGradients = [
//     "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
//     "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
//     "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
//   ];

//   const [backgroundGradient, setBackgroundGradient] = useState(
//     linearGradients[0]
//   );



  // useEffect(() => {
  //   // setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  // }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[40rem] overflow-y-auto flex justify-center relative space-x-20 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex px-4">
        <div className="max-w-2xl">
          {/* {content.sections.map((item, index) => (
            <div key={item.title + index} className="my-14">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-slate-300 max-w-sm mt-6"
              >
                {item.content}
              </motion.p>
            </div>
          ))} */}
          {data.map((heading, index) => (
            <div key={ index} className="my-14">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {heading.tag ==='h2' && heading.text}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-slate-300 max-w-sm mt-6"
              >
                {heading.tag ==='p' && heading.text}
              </motion.p>
            </div>
        ))}
        </div>
      </div>
      <div
        // style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-52 object-cover w-96 rounded-md bg-white sticky top-28",
          contentClassName
        )}
      >
  
      </div>
    </motion.div>
  );
};
