// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const articles = document.querySelectorAll("article");

articles.forEach((article) => {
  gsap.fromTo(
    article.children,
    { y: "+=100", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: article,
        start: "top 50%",
      },
    }
  );
});
