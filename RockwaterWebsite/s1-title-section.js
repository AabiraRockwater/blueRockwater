gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("#des-1").forEach((box) => {
  gsap.fromTo(
    box,
    { x: -30, y: 120, rotation: 0 },
    {
      x: -20,
      y: 70,
      rotation: 10,
      scrollTrigger: {
        trigger: box.parentElement,
        start: "top bottom+900px",
        end: "bottom top",
        scrub: 1,
      },
    }
  );
});

gsap.utils.toArray("#des-2").forEach((box) => {
  gsap.fromTo(
    box,
    { x: 50, y: -10, rotation: 0 },
    {
      x: 0,
      y: -100,
      rotation: -10,
      scrollTrigger: {
        trigger: box.parentElement,
        start: "top bottom+900px",
        end: "bottom top",
        scrub: 1,
      },
    }
  );
});

gsap.utils.toArray("#plus-icon-1").forEach((box) => {
  gsap.fromTo(
    box,
    { y: 0 },
    {
      y: -200,
      scrollTrigger: {
        trigger: box.parentElement,
        start: "top bottom+0px",
        end: "bottom top",
        scrub: 0.7,
      },
    }
  );
});

gsap.utils.toArray("#plus-icon-2").forEach((box) => {
  gsap.fromTo(
    box,
    { y: 0 },
    {
      y: -230,
      scrollTrigger: {
        trigger: box.parentElement,
        start: "top bottom+0px",
        end: "bottom top",
        scrub: 0.7,
      },
    }
  );
});

const tl = gsap.timeline();

tl.fromTo(
  "#des-1",
  { x: -30, y: 70, rotation: 10 },
  { x: -20, y: 120, rotation: 0 }
);

tl.fromTo(
  "#des-2",
  { x: 0, y: -100, rotation: 10 },
  { x: 50, y: -10, rotation: 0 },
  "-=0.5"
);

tl.fromTo(
  "#plus-icon-1",
  { y: -200 },
  { y: 0 },
  "-=0.7"
);

tl.fromTo(
  "#plus-icon-2",
  { y: -230 },
  { y: 0 },
  "-=0.7"
);

gsap.utils
  .toArray(["#des-1", "#des-2", "#plus-icon-1", "#plus-icon-2"])
  .forEach((box) => {
    gsap.fromTo(box, {
      scrollTrigger: {
        trigger: box.parentElement,
        start: "top bottom+900px",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

tl.play();
