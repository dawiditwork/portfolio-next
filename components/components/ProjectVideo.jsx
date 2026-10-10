"use client";

import { useEffect, useRef } from "react";

export default function ProjectVideo({ src, poster, title, reducedMotion = false }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reduced-motion users see the poster, without automatic playback.
    if (reducedMotion) {
      video.pause();
      return;
    }

    let inView = false;
    const syncPlayback = () => {
      if (inView && !document.hidden) {
        const result = video.play();
        if (result && typeof result.catch === "function") result.catch(() => {});
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, [reducedMotion, src]);

  if (reducedMotion) {
    return <img className="project-cinematic-video" src={poster} alt={`${title} preview`} />;
  }

  return (
    <video
      ref={videoRef}
      className="project-cinematic-video"
      src={src}
      poster={poster}
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={`${title} — application demonstration`}
    />
  );
}
