/*
 * CustomCursor — Aethelon Agency
 * Design: Gold dot + ring cursor that follows mouse, hides on mobile
 */
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let ringX = 0,
      ringY = 0;
    let mouseX = 0,
      mouseY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    const interactables = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select"
    );
    interactables.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: hovering ? "#B8922A" : "#1A1510",
          transition: "background-color 0.2s ease, transform 0.05s ease",
          opacity: visible ? 1 : 0,
          willChange: "transform",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: `1px solid ${hovering ? "#B8922A" : "rgba(26,21,16,0.5)"}`,
          opacity: visible ? (hovering ? 0.8 : 0.3) : 0,
          transform: clicking ? "scale(0.8)" : "scale(1)",
          transition: "border-color 0.2s ease, opacity 0.2s ease",
          willChange: "transform",
        }}
      />
      <style>{`
        @media (min-width: 768px) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  );
}
