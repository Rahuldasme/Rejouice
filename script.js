function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.03,
  });

  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locoScroll();

var tl = gsap.timeline();
tl.from("#loader h3", {
  opacity: 0,
  x: 40,
  duration: 0.5,
  stagger: 0.1,
});

tl.to("#loader h3", {
  opacity: 0,
  x: -40,
  duration: 1,
  stagger: -0.1,
});
tl.to("#loader", {
  opacity: 0,
});
tl.to("#loader", {
  display: "none",
});
tl.from("#pagecontent h1 span", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
  delay: -0.5,
});

function cursorEffect1() {
  var pageContent = document.querySelector("#pagecontent ");

  var cursor = document.querySelector("#cursor");

  pageContent.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      y: dets.y,
      x: dets.x,
    });
  });

  pageContent.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      scale: 1,
      opacity: 1,
    });
  });

  pageContent.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect1();

function Part2n4Animation() {
  gsap.from("#part2-heading,#elem h1", {
    y: 120,
    stagger: 0.3,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: "#part2",
      scroller: "#main",
      start: "top 70%",
      end: "top 37%",
      opacity: 1,
      scrub: 2,
    },
  });

  gsap.from("#part4-heading,#part4-elem h1", {
    y: 120,
    stagger: 0.3,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: "#part4",
      scroller: "#main",
      start: "top 70%",
      end: "top 37%",
      opacity: 1,
      scrub: 2,
    },
  });
}
Part2n4Animation();

function videoPlayOnHover() {
  let clips = document.querySelectorAll(".video");

  clips.forEach((clip) => {
    clip.addEventListener("mouseover", function (e) {
      clip.play();
    });

    clip.addEventListener("mouseout", function (e) {
      clip.pause();
      clip.currentTime = 0;
    });
  });
}
videoPlayOnHover();

function cursorEffect2() {
  var p4b = document.querySelector("#part4-bottom");
  var p4cursor = document.querySelector("#part4-cursor");

  p4b.addEventListener("mousemove", function (dets) {
    gsap.to("#part4-cursor", {
      x: dets.x,
      y: dets.y,
    });
  });

  p4b.addEventListener("mouseenter", function () {
    gsap.to("#part4-cursor", {
      scale: 1,
      opacity: 1,
    });
  });

  p4b.addEventListener("mouseleave", function () {
    gsap.to("#part4-cursor", {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect2();

function sliderAniamtion() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}
sliderAniamtion();

function Part5Animation() {
  gsap.from("#part5-elem h1,#part5-heading h4", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: "#part5",
      scroller: "#main",
      start: "top 80%",
      end: "top 37%",
      opacity: 1,
      scrub: 2,
    },
  });
}
Part5Animation();

function footerAnimation() {
  gsap.from("#footer-bottom h1 span", {
    y: -100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    delay: 3,
    scrollTrigger: {
      trigger: "#footer",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      scrub: 4,
    },
  });
}
footerAnimation();
