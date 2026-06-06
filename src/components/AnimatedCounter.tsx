/*
 * AnimatedCounter — Commerce Atelier
 * Counts up from 0 to target when element enters viewport
 */
import { useEffect, useRef, useState } from "react";

interface Props {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 1800,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
