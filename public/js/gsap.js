const articles = document.querySelectorAll("article ul");

articles.forEach((article) => {
  gsap.fromTo(
    article.children,
    { y: "+=100", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.3,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: article,
        start: "top 50%",
      },
    }
  );
});
