import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  gsap.fromTo(
    section.children,
    { y: "+=100", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: section,
        start: "top 20%",
      },
    }
  );
});
