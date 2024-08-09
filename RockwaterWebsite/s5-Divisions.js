// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate .border-box elements
gsap.utils.toArray(".border-box").forEach((box) => {
  gsap.fromTo(
    box,
    { y: 80 },
    {
      y: -70,
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
    { y: 10 },
    {
      y: -90,
      scrollTrigger: {
        trigger: icon.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    }
  );
});

// Animate .cell-1-content-box h1 elements
gsap.utils.toArray(".cell-1-content-box h1").forEach((title) => {
  gsap.fromTo(
    title,
    { y: 10 },
    {
      y: -80,
      scrollTrigger: {
        trigger: title.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    }
  );
});

// Animate .cell-1-content-box p elements
gsap.utils.toArray(".cell-1-content-box p").forEach((text) => {
  gsap.fromTo(
    text,
    { y: 10 },
    {
      y: -55,
      scrollTrigger: {
        trigger: text.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    }
  );
});
