gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("#des-1").forEach((box) => {
  gsap.fromTo(
    box,
    { x: -15, y: 50, rotation: 0 },
    {
      x: -10,
      y: 0,
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
    { x: 30, y: -1, rotation: 0 },
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





// Initialize GSAP timeline
const tl = gsap.timeline();

tl.fromTo(
  "#des-1",
  { x: -10, y: 20, rotation: 10 },
  { x: -15, y: 50, rotation: 0  }
);

// Animation for des-2
tl.fromTo(
  "#des-2",
  { x: 0, y: -100, rotation: 10 },
  { x: 30, y: -1, rotation: 0 },
  "-=0.5" // Offset to start slightly after des-1 animation
);

// Animation for plus-icon-1
tl.fromTo(
  "#plus-icon-1",
  { y: -200 },
  { y: 0 },
  "-=0.7" // Offset to start after des-1 and des-2 animations
);

// Animation for plus-icon-2
tl.fromTo(
  "#plus-icon-2",
  { y: -230 },
  { y: 0 },
  "-=0.7" // Offset to start after des-1 and des-2 animations
);

// ScrollTrigger for all animations
gsap.utils.toArray(["#des-1", "#des-2", "#plus-icon-1", "#plus-icon-2"]).forEach((box) => {
  gsap.fromTo(
    box,
    { 
      scrollTrigger: {
        trigger: box.parentElement,
        start: "top bottom+900px",
        end: "bottom top",
        scrub: 1
      }
    }
  );
});

// Play the timeline when the page loads
tl.play();
