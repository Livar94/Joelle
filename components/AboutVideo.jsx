"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutVideo() {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);
  const userPaused = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;

    function syncPlayback() {
      if (preference.matches || userPaused.current || !inView) {
        video.pause();
      } else {
        video.play().catch(() => setPaused(true));
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.1 },
    );

    observer.observe(video);
    preference.addEventListener("change", syncPlayback);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", syncPlayback);
      video.pause();
    };
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => setPaused(true));
    } else {
      userPaused.current = true;
      video.pause();
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        className="about-video"
        aria-hidden="true"
        preload="none"
        playsInline
        muted
        loop
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
      >
        <source
          src="/assets/videos/pexels-jack-sparrow-5977260.mp4"
          type="video/mp4"
        />
      </video>
      <button type="button" className="video-control" onClick={togglePlayback}>
        <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
        {paused ? "تشغيل الخلفية" : "إيقاف الخلفية"}
      </button>
    </>
  );
}
