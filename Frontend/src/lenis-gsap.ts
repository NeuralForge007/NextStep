import { useLayoutEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useLenisScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    if (lenisRef.current) return;

    const lenis = new Lenis({
      duration: 0.75,
      easing: (t) => t,
      smooth: true,
      wheelMultiplier: 1.4,
      lerp: 0.1,
      smoothTouch: true,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    window.addEventListener("resize", () => {
      lenis.update();
      ScrollTrigger.refresh();
    });

    // Kickstart after mount
    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      gsap.ticker.remove(() => lenis.raf());
      lenis.destroy();
      lenisRef.current = null;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
};
