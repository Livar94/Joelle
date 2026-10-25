"use client";

import { useEffect, useRef } from "react";

export default function MotionEffects() {
  const progressRef = useRef(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = [...document.querySelectorAll(".reveal")];
    let observer;
    let frame;

    function configureMotion() {
      observer?.disconnect();
      elements.forEach((element) => element.classList.remove("reveal-pending"));

      if (preference.matches || !("IntersectionObserver" in window)) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove("reveal-pending");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.08 },
      );

      elements.forEach((element) => {
        // Already visible content stays visible; only upcoming content animates.
        if (element.getBoundingClientRect().top < window.innerHeight) return;
        element.classList.add("reveal-pending");
        observer.observe(element);
      });
    }

    function updateProgress() {
      const distance =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
      if (progressRef.current)
        progressRef.current.style.transform = `scaleX(${progress})`;
    }

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateProgress);
    }

    configureMotion();
    updateProgress();
    preference.addEventListener("change", configureMotion);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      elements.forEach((element) => element.classList.remove("reveal-pending"));
      preference.removeEventListener("change", configureMotion);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={progressRef} className="reading-progress" aria-hidden="true" />
  );
}
