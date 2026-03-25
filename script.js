const lenis = new Lenis({
  smooth: true,
  duration: 2.8,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

lenis.on("scroll", (e) => {
  ScrollTrigger.update();
});

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
gsap.ticker.fps(60);

document.body.style.scrollBehavior = "smooth";

function loading() {
  const laptopLoader = document.querySelector(".laptoploader");
  const mobileLoader = document.querySelector(".mobileloader");

  const laptopPromise = new Promise((resolve) => {
    laptopLoader.onloadeddata = () => resolve();
  });

  const mobilePromise = new Promise((resolve) => {
    mobileLoader.onloadeddata = () => resolve();
  });

  Promise.all([laptopPromise, mobilePromise]).then(() => {
    var tl = gsap.timeline();

    tl.to("#yellow", {
      top: "-125%",
      delay: 0.2,
      duration: 0.7,
      ease: "expo-out",
    });

    tl.to(".loader", {
      top: "-125%",
      delay: 1,
      duration: 2,
      ease: "expo-out",
    });
  });
}

loading();

const cur = document.querySelector("[data-cursor]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cur.style.left = `${posX}px`;
  cur.style.top = `${posY}px`;
});

function backgrd() {
  VANTA.GLOBE({
    el: ".page1",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 0.9,
    scaleMobile: 0,
    color: 0xff2a2a,
    backgroundColor: 0x181818,
  });
}
backgrd();

function toggleMenu() {
  const menu = document.querySelector(".menu");
  const body = document.body;

  if (menu.style.display === "flex") {
    menu.style.animation = "slideOutToTop 0.5s ease forwards";

    menu.addEventListener(
      "animationend",
      () => {
        if (menu.style.animationName === "slideOutToTop") {
          menu.style.display = "none";
          body.style.overflow = "";
          body.style.position = "";
        }
      },
      {
        once: true
      }
    );
  } else {
    menu.style.display = "flex";
    menu.style.animation = "slideInFromTop 0.7s ease forwards";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
  }
}
document
  .getElementById("about-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleMenu();
    setTimeout(function () {
      document.querySelector("#page2").scrollIntoView({
        behavior: "smooth",
      });
    }, 600);
  });

document
  .getElementById("event-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleMenu();
    setTimeout(function () {
      document.querySelector("#events").scrollIntoView({
        behavior: "smooth",
      });
    }, 600);
  });
document
  .getElementById("blog-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleMenu();
    setTimeout(function () {
      document.querySelector("#blogs").scrollIntoView({
        behavior: "smooth",
      });
    }, 600);
  });
document
  .getElementById("team-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleMenu();
    setTimeout(function () {
      document.querySelector("#teams").scrollIntoView({
        behavior: "smooth",
      });
    }, 600);
  });

function p1arrow() {
  var b = document.querySelector(
    ".page1 .landing-footer .landing-footer-left .btn button"
  );
  var ic = document.querySelector(
    ".page1 .landing-footer .landing-footer-left .btn i"
  );

  b.addEventListener("mouseenter", function () {
    ic.style.transform = "rotate(45deg)";
  });
  b.addEventListener("mouseleave", function () {
    ic.style.transform = "rotate(0deg)";
  });
}
p1arrow();

const menupurchase = document.querySelector(
  ".main .menu .menu-content .left .h4-menu a h4"
);
const menupurchaseicon = document.querySelector(
  ".main .menu .menu-content .left .h4-menu a i"
);

menupurchase.addEventListener("mouseenter", function () {
  menupurchaseicon.style.opacity = "1";
  menupurchaseicon.style.transform = "scale(1.1)";
});

menupurchase.addEventListener("mouseleave", function () {
  menupurchaseicon.style.opacity = "0";
  menupurchaseicon.style.transform = "scale(1)";
});

var wat = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "20% 70%",
    end: "50% 50%",
    markers: false,
    scrub: true,
  },
});

wat.to(".page2 .rounded-div-wrapper", {
  height: 0,
  marginTop: 0,
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "18% 50%",
    end: "90% 50%",
    // markers: true,
    scrub: 1,
  },
});

tl.to(".page2-cont-fill h1", {
  width: "100%",
  duration: 1.8,
});

tl.to(".page2-cont-fill h2", {
  width: "100%",
  duration: 2,
});
tl.to(".page2-cont-fill h3", {
  width: "100%",
  duration: 2.5,
});
tl.to(".page2-cont-fill h4", {
  width: "100%",
  duration: 2.8,
});
tl.to(".page2-cont-fill h5", {
  width: "100%",
  duration: 3,
});

ScrollTrigger.create({
  trigger: ".page2",
  start: "18% 50%",
  end: "90% 50%",
  // markers: true,
  scrub: 1,
  onUpdate: (self) => {
    let rotation = 360 * self.progress;
    gsap.to(".page2-head .page2-head1 img", {
      rotation: rotation,
      ease: "linear",
      overwrite: "auto",
    });
  },
});

let tl99 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "18% 50%",
    end: "90% 50%",
    // markers: true,
    scrub: 1,
  },
});

tl99.to("#page2-mobile-cont h1", {
  opacity: 1,
  duration: 1.5,
});

tl99.to("#page2-mobile-cont h2", {
  opacity: 1,
  duration: 1.8,
});
tl99.to("#page2-mobile-cont h3", {
  opacity: 1,
  duration: 2.1,
});
tl99.to("#page2-mobile-cont h4", {
  opacity: 1,
  duration: 2.4,
});
tl99.to("#page2-mobile-cont h5", {
  opacity: 1,
  duration: 2.7,
});

(function () {
  var slides = document.querySelectorAll(".slider");

  var repeat = function () {
    let currentSlide = 0;

    var repeater = () => {
      setTimeout(function () {
        slides.forEach((slide) => {
          slide.classList.remove("active");
        });

        slides[currentSlide].classList.add("active");

        currentSlide++;
        if (currentSlide >= slides.length) {
          currentSlide = 0;
        }

        repeater();
      }, 3500);
    };

    repeater();
  };

  repeat();
})();

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".page3-left-bottom .counter");
  const duration = 2000;

  function runCounter() {
    counters.forEach((counter) => {
      counter.innerText = "0+";
      let target = +counter.dataset.count;
      let increment = target / (duration / 16);

      function countIt() {
        let displayedCount = parseInt(counter.innerText);
        if (displayedCount < target) {
          counter.innerText = Math.ceil(displayedCount + increment) + "+";
          if (parseInt(counter.innerText) > target) {
            counter.innerText = target + "+";
          }
          requestAnimationFrame(countIt);
        } else {
          counter.innerText = target + "+";
        }
      }

      countIt();
    });
  }

  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.create({
      trigger: ".page3-left-bottom",
      start: "top 80%",
      onEnter: runCounter,
      // markers: true,
    });
  } else {
    console.error("ScrollTrigger is not defined.");
  }
});

function p3arrow() {
  var p3a = document.querySelector(
    ".page3 .page3-left .page3-left-bottom .page3-left-bottom-b .page3-left-bottom-b-2 h4 .rott a"
  );
  var p3i = document.querySelector(
    ".page3 .page3-left .page3-left-bottom .page3-left-bottom-b .page3-left-bottom-b-2 h4 .rott i"
  );

  p3a.addEventListener("mouseenter", function () {
    p3i.style.transform = "rotate(45deg)";
  });
  p3a.addEventListener("mouseleave", function () {
    p3i.style.transform = "rotate(0deg)";
  });
}
p3arrow();

var elems = document.querySelectorAll(".elem");
var pg2 = document.querySelectorAll(".page4");
var txts = document.querySelectorAll(".page4 h2");
var blr = document.querySelector(".page4 .bg-opacity");

elems.forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    var bgimg = ele.getAttribute("data-img");
    pg2.forEach(function (page) {
      page.style.backgroundImage = `url(${bgimg})`;
    });

    txts.forEach(function (txt) {
      txt.style.color = "white";
    });

    if (blr) {
      blr.style.display = "flex";
    }
  });
});

const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper",
    pin: true,
    scrub: 1,
    end: () => "+=3000",
    // markers: true,
  },
});

sections.forEach((section) => {
  let text = section.querySelectorAll(".anim");

  if (text.length === 0) return;

  gsap.from(text, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      // markers: true,
    },
  });
});

// ==========================================
// NEW TEAM SWITCHING LOGIC (2025, 2024, 2023)
// ==========================================

function switchBoard(year) {
  // 1. Switch the Slider Content
  const body1 = document.getElementById("body1"); // 2025
  const body2 = document.getElementById("body2"); // 2024
  const body3 = document.getElementById("body3"); // 2023

  if (body1) body1.style.display = "none";
  if (body2) body2.style.display = "none";
  if (body3) body3.style.display = "none";

  if (year === '2025') {
    if (body1) {
      body1.style.display = "block";
      // Force Swiper update after display change
      setTimeout(() => {
        const swiperEl = body1.querySelector(".mySwiper");
        if (swiperEl && swiperEl.swiper) {
          swiperEl.swiper.update();
        }
      }, 10);
    }
  } else if (year === '2024') {
    if (body2) body2.style.display = "block";
  } else if (year === '2023') {
    if (body3) body3.style.display = "block";
  }

  // 2. Highlight the active button
  const allBtns = document.querySelectorAll(".btnew");
  allBtns.forEach(btn => btn.classList.remove("special"));

  const activeBtn = document.getElementById(`btn-${year}`);
  if (activeBtn) activeBtn.classList.add("special");

  // 3. Update the Left-Side Group Photo & Year Number
  const leftImage = document.getElementById("myImage");
  const yearNumber = document.getElementById("remains");

  // Add fade-out effect using existing CSS class
  leftImage.classList.add("fade-out");

  setTimeout(() => {
    // Change Source based on year
    if (year === '2025') {
      leftImage.src = "./Assets/BoardsGroupPhoto2025.png";
      if (yearNumber) yearNumber.innerText = "5";
    } else if (year === '2024') {
      leftImage.src = "./Assets/24 board photo red.webp";
      if (yearNumber) yearNumber.innerText = "4";
    } else if (year === '2023') {
      leftImage.src = "./Assets/teamspageleftimg2.webp";
      if (yearNumber) yearNumber.innerText = "3";
    }

    // Remove fade-out and add fade-in
    leftImage.classList.remove("fade-out");
    leftImage.classList.add("fade-in");
  }, 300); // 300ms matches the transition timing feel

  // Cleanup fade-in class after animation completes
  setTimeout(() => {
    leftImage.classList.remove("fade-in");
  }, 1000);
}

// ==========================================
// END NEW LOGIC
// ==========================================

function blogmediumarrow() {
  var bloggggarrow = document.querySelector(
    "  .blogspage .headerblogs .headerblogsmailsection i"
  );
  let blogggmediumdiv = document.querySelector(
    ".blogspage .headerblogs .headerblogsmailsection .headerblogsmail"
  );

  blogggmediumdiv.addEventListener("mouseenter", function () {
    bloggggarrow.style.transform = "rotate(45deg)";
    bloggggarrow.style.color = "red";
  });
  blogggmediumdiv.addEventListener("mouseleave", function () {
    bloggggarrow.style.transform = "rotate(0deg)";
    bloggggarrow.style.color = "black";
  });
}
blogmediumarrow();

function blogss() {
  var swiper = new Swiper(".slide-content", {
    effect: "coverflow",
    spaceBetween: 20,
    autoHeight: true,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination.blog-page",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.custom-next-arrow",
      prevEl: ".swiper-button-prev.custom-prev-arrow",
    },
    coverflowEffect: {
      spaceBetween: 20,
      rotate: 0,
      stretch: -18,
      depth: 35,
      slidesPerView: 3,
      modifier: 3,
      slideShadows: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
}
blogss();

ScrollTrigger.create({
  trigger: ".faqpage",
  start: "18% 50%",
  end: "90% 50%",
  scrub: 1,
  onUpdate: (self) => {
    let rotation = 360 * self.progress;
    gsap.to(" .imageroatephedfaq img", {
      rotation: rotation,
      ease: "linear",
      overwrite: "auto",
    });
  },
});

function faqq() {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      if (faq.classList.contains("active")) {
        faq.classList.remove("active");
      } else {
        faqs.forEach((otherFaq) => {
          otherFaq.classList.remove("active");
        });
        faq.classList.add("active");
      }
    });
  });
}
faqq();

function p10() {
  gsap.from(".n1", {
    y: "-100%",
    delay: 0.1,
    duration: 1.4,
    scrollTrigger: {
      trigger: ".n1",
      scroller: "body",
      start: "bottom 80%",
    },
  });
  gsap.from(".n2", {
    y: "-100%",
    delay: 0.4,
    duration: 1.4,
    scrollTrigger: {
      trigger: ".n1",
      scroller: "body",
      start: "bottom 80%",
    },
  });
  gsap.from(".n3", {
    y: "-100%",
    delay: 0.5,
    duration: 1.4,
    scrollTrigger: {
      trigger: ".n1",
      scroller: "body",
      start: "bottom 80%",
    },
  });
  gsap.from(".n4", {
    y: "-100%",
    delay: 0.6,
    duration: 1.4,
    scrollTrigger: {
      trigger: ".n1",
      scroller: "body",
      start: "bottom 80%",
    },
  });

  document
    .querySelector(".page10 .part2 .footer-last .last-right")
    .addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
}
p10();

document
  .getElementById("footer-about-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#page2").scrollIntoView({
      behavior: "smooth",
    });
  });
document
  .getElementById("footer-event-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#events").scrollIntoView({
      behavior: "smooth",
    });
  });
document
  .getElementById("footer-blog-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#blogs").scrollIntoView({
      behavior: "smooth",
    });
  });

// Initialize Team Swipers (Targeting class instead of ID to handle multiple instances)
var teamSwiper = new Swiper(".mySwiper", {
  effect: "creative",
  grabCursor: false,
  observer: true,
  observeParents: true,
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500],
    },
  },
  pagination: {
    el: ".swiper-pagination.teams-page",
    type: "fraction",

    formatFractionCurrent: function (index) {
      return index;
    },
    formatFractionTotal: function (total) {
      return total;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Initialize default state (2025) to fix refresh issue
window.addEventListener("load", function () {
  switchBoard('2025');
});