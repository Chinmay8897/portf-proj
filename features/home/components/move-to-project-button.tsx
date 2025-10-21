"use client";

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { useCallback } from "react";

const MoveToProjectButton = () => {
  const scrollToProjects = useCallback(() => {
    document
      .getElementById("projects-section")
      ?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <motion.button
      onClick={scrollToProjects}
      className="group relative isolate mt-3 flex select-none overflow-hidden rounded-xl border border-border py-4 pl-14 pr-7 text-[1.35rem] font-semibold duration-500 ease-in-out"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div
        className="absolute left-0 top-0 -z-10 h-full rounded-s-xl bg-highlight"
        variants={{
          rest: {
            width: "10%",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
          },
          hover: {
            width: "100%",
            borderTopRightRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          },
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.span className="relative z-10 flex items-center mix-blend-difference min-[320px]:text-[1.1rem] sm:text-[1.25rem]">
        View my Projects
        <motion.div
          className="ml-2"
          variants={{
            rest: { rotate: -90 },
            hover: { rotate: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <FaArrowDown />
        </motion.div>
      </motion.span>
    </motion.button>
  );
};

export default MoveToProjectButton;
