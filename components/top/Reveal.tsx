"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ElementType,
  type CSSProperties,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  axis?: "y" | "x";
  distance?: number;
  as?: ElementType;
  style?: CSSProperties;
};

/**
 * Fades + slides content in once it enters the viewport (or immediately
 * on mount if already in view, e.g. HERO). No-ops entirely under
 * prefers-reduced-motion via the .reveal CSS rule in globals.css.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  axis = "y",
  distance = 16,
  as: Tag = "div",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform =
    axis === "y" ? `translate3d(0, ${distance}px, 0)` : `translate3d(${distance}px, 0, 0)`;

  const Comp = Tag as ElementType;

  return (
    <Comp
      ref={ref}
      className={`reveal ${className}`}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : hiddenTransform,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Comp>
  );
}
