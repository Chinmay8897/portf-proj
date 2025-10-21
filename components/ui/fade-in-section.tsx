"use client";

import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type FadeInSectionProps = PropsWithChildren<{
  className?: string;
  id?: string;
  amount?: number;
  delay?: number;
}>;

export default function FadeInSection({
  children,
  className,
  id,
  amount = 0.25,
  delay = 0,
}: FadeInSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.section>
  );
}
