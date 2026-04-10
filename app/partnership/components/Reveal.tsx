"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { stagger } from "motion";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
  immediate?: boolean;
};

type FadeUpProps = {
  children: ReactNode;
  className?: string;
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      when: "beforeChildren",
      delayChildren: stagger(0.1, { startDelay: 0.06 }),
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.82,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

function ImmediateReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

function ScrollReveal({
  children,
  className,
  amount = 0.18,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [72, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.35, 1], [0, 0.35, 1]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [0.985, 1]);
  const rawBlur = useTransform(scrollYProgress, [0, 1], [16, 0]);

  const y = useSpring(rawY, {
    stiffness: 130,
    damping: 24,
    mass: 0.35,
  });

  const opacity = useSpring(rawOpacity, {
    stiffness: 120,
    damping: 26,
    mass: 0.4,
  });

  const scale = useSpring(rawScale, {
    stiffness: 140,
    damping: 24,
    mass: 0.32,
  });

  const filter = useMotionTemplate`blur(${rawBlur}px)`;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={
        reduceMotion
          ? undefined
          : {
            y,
            opacity,
            scale,
            filter,
          }
      }
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount,
        margin: "0px 0px 160px 0px",
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({
  children,
  className,
  amount = 0.18,
  immediate = false,
}: StaggerRevealProps) {
  if (immediate) {
    return <ImmediateReveal className={className}>{children}</ImmediateReveal>;
  }

  return (
    <ScrollReveal className={className} amount={amount}>
      {children}
    </ScrollReveal>
  );
}

export function FadeUp({ children, className }: FadeUpProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}