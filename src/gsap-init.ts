import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHeroFeaturesTimeline = (
  heroRef: React.RefObject<HTMLElement>,
  featuresRef: React.RefObject<HTMLElement>
) => {
  useLayoutEffect(() => {
    if (!heroRef.current || !featuresRef.current) return;

    // Clear any previous
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // Hero pin + subtle parallax glow + subtle drift of 3D
    const heroTl = gsap.timeline({
      scrollTrigger: {
        scroller: window,
        trigger: heroRef.current,
        start: "top top",
        end: "+=120%",
        scrub: 1,
        pin: true,
      },
    });

    heroTl
      .fromTo(
        heroRef.current.querySelector(".hero-glow"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        0
      )
      .to(
        heroRef.current.querySelector(".hero-3d"),
        { yPercent: -5, duration: 1 },
        0
      );

    // Features staged fade/slide in with pin
    const feat = featuresRef.current;
    const cards = feat.querySelectorAll(".card");
    const head = feat.querySelector(".feat-head");

    gsap.set(head, { opacity: 0, y: 40 });
    gsap.set(cards, { opacity: 0, y: 60, rotateX: 6, transformOrigin: "50% 100%" });

    const featsTl = gsap.timeline({
      scrollTrigger: {
        trigger: feat,
        start: "top 70%",
        end: "+=150%",
        scrub: 0.6,
        pin: true,
      },
      defaults: { ease: "power3.out" },
    });

    featsTl
      .to(head, { opacity: 1, y: 0, duration: 0.8 })
      .to(cards[1], { opacity: 1, y: 0, rotateX: 0, duration: 0.8 }, "+=0.2")
      .to(cards[0], { opacity: 1, y: 0, rotateX: 0, duration: 0.7 }, "+=0.2")
      .to(cards[2], { opacity: 1, y: 0, rotateX: 0, duration: 0.7 }, "+=0.2");

    // Generic reveals with stagger
    gsap.utils.toArray("[data-reveal]").forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: i * 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [heroRef, featuresRef]);
};
