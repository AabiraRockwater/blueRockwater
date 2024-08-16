// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const height = window.innerHeight;
const width = window.innerWidth;

gsap.utils.toArray(".border-box").forEach((box) => {
  gsap.fromTo(
    box,
    { y: 5 * width * 0.01 },
    {
      y: -6 * width * 0.01,
      scrollTrigger: {
        trigger: box.parentElement,
        start: "top bottom-=100px", // Adjust start position
        end: "bottom top+=100px", // Adjust end position
        scrub: 1,
      },
    }
  );
});

if (width > 800) {
  // Animate .border-box elements
  gsap.utils.toArray(".border-box").forEach((box) => {
    gsap.fromTo(
      box,
      { y: 5 * width * 0.01 },
      {
        y: -6 * width * 0.01,
        scrollTrigger: {
          trigger: box.parentElement,
          start: "top bottom-=100px", // Adjust start position
          end: "bottom top+=100px", // Adjust end position
          scrub: 1,
        },
      }
    );
  });

  // Animate .cell-1-icon elements
  gsap.utils.toArray(".cell-1-icon").forEach((icon) => {
    gsap.fromTo(
      icon,
      { y: 30 },
      {
        y: -1.7 * height * 0.1,
        scrollTrigger: {
          trigger: icon.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      }
    );
  });

  // Animate .cell-1-content-box h1 elements
  gsap.utils.toArray(".cell-1-content-box h1").forEach((title) => {
    gsap.fromTo(
      title,
      { y: 30 },
      {
        y: -1.6 * height * 0.1,
        scrollTrigger: {
          trigger: title.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      }
    );
  });

  // Animate .cell-1-content-box p elements
  gsap.utils.toArray(".cell-1-content-box p").forEach((text) => {
    gsap.fromTo(
      text,
      { y: 30 },
      {
        y: -1 * height * 0.1,
        scrollTrigger: {
          trigger: text.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      }
    );
  });
}
