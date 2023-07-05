var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor_blur");

document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  cursorBlur.style.left = dets.x - 150 + "px";
  cursorBlur.style.top = dets.y - 150 + "px";
  cursorBlur.style.transitionDuration = "0.3s";
  // cursor.style.transitionDuration = "0s";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", () => {
    cursor.style.scale = 3;
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor = "transparent";
    // cursor.style.transitionDuration = "0.2s";
  });
});
h4all.forEach(function (elem) {
  elem.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.border = "0";
    cursor.style.backgroundColor = "#95c11e";
    // cursor.style.transitionDuration = "0.2s";
  });
});

// var cardall = document.querySelectorAll(".page4_card");
// cardall.forEach(function (elem) {
//   elem.addEventListener("mouseenter", () => {
//     cursor.style.scale = 3;
//     cursor.style.border = "1px solid #fff";
//     cursor.style.backgroundColor = "transparent";
//     // cursor.style.transitionDuration = "0.2s";
//   });
// });
// cardall.forEach(function (elem) {
//   elem.addEventListener("mouseleave", () => {
//     cursor.style.scale = 1;
//     cursor.style.border = "0";
//     cursor.style.backgroundColor = "#95c11e";
//     // cursor.style.transitionDuration = "0.2s";
//   });
// });

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "90px",
  duration: 0.6,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -30%",
    end: "top -70%",
    scrub: 1,
  },
});

gsap.from("#about_us img,#about_us_in", {
  y: 90,
  opacity: 0,
  duration: 2,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about_us",
    scroller: "body",
    start: "top 80%",
    end: "top 75%",
    scrub: 3,
  },
});

gsap.from("#part3 #colon1", {
  x: -90,
  z: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#part3",
    scroller: "body",
    start: "top 70%",
    end: "top 60%",
    scrub: 4,
  },
});

gsap.from("#part3 #colon2", {
  x: 90,
  z: -50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#part3",
    scroller: "body",
    start: "top 70%",
    end: "top 60%",
    scrub: 4,
  },
});

gsap.from("#page4 h4", {
  y: 90,
  opacity:0,
  scrollTrigger: {
    trigger: "#page4 h4",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 2,
  },
});
