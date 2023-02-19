const tl = gsap.timeline({ defaults: { ease: 'power1.in' } });




tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });

tl.fromTo('.stagger1', { opacity: 0 }, { opacity: 1, stagger: .5, duration: 2.4 }, "-=1.4");
// tl.fromTo('.stagger2', { opacity: 0 }, { opacity: 1, stagger: .7, duration: 2 }, "-=1");





const tlIntro = gsap.timeline({
    scrollTrigger: {
      trigger: ".first-page",
      start: "0%",
      end: "100%",
      pin: true,
      pinSpacing: false,
    },
  });

  


//Highlight PAGE 2
const tlH = gsap.timeline({
    scrollTrigger: {
      trigger: ".second-page",
      // markers: { startColor: "blue", endColor: "blue" },
      scrub: true,
      start: "-40%",
      end: "40%",
    },
  });
  
  tlH.fromTo(
    ".highlight",
    { color: "rgba(255,255,255, 0.4" },
    { color: "rgba(255,255,255, 1", stagger: 1 }
  );
  
  const tlHRemove = gsap.timeline({
    scrollTrigger: {
      trigger: ".second-page",
      // markers: { startColor: "pink", endColor: "pink" },
      scrub: true,
      start: "-20%",
      end: "60%",
     
    },
  });
  
  tlHRemove.to(".highlight", { color: "rgba(255,255,255, 0.4", stagger: 1 });


//Highlight PAGE 3


// const section3 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".third",
//       markers: { startColor: "blue", endColor: "blue" },
//       scrub: true,
//       start: "30%",
//       end: "40%",
//       pin: true
//     },
//   });
  


//Page 3
const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "-45%",
    end: "15%",
    // markers: { startColor: "blue", endColor: "blue" },
    scrub: true,
  },
});

tlSplit.fromTo(".left-image", { x: "40%" }, { x: "00%" });
tlSplit.fromTo(".right-image", { x: "-40%" }, { x: "0%" }, "<");
tlSplit.fromTo(
  ".product-text-left",
  { x: 1000, opacity: 0 },
  { opacity: 1, x: 0 },
  "<"
);
tlSplit.fromTo(
  ".product-text-right",
  { x: -1000, opacity: 0 },
  { opacity: 1, x: 0 },
  "<"
);

const tlSplitPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    pin: true,
    pinSpacing: false,
    start: "40%",
    end: "100%",
  },
});

//Carousel

const swatches = document.querySelectorAll(".swatches img");
const gallery = document.querySelector(".phone-gallery");
const slides = document.querySelectorAll(".phone-gallery-container");

let currentSwatch = "blue";
let topIndex = 2;

swatches.forEach((swatch, index) => {
  const coord = slides[index].getBoundingClientRect().left;

  swatch.addEventListener("click", (e) => {
    let swatchName = e.target.getAttribute("swatch");
    let closeUp = document.querySelector("." + swatchName);
    //Check if we are on the same swatch
    if (currentSwatch === swatchName) return;

    gsap.set(closeUp, { zIndex: topIndex });
    gsap.fromTo(closeUp, { opacity: 0 }, { opacity: 1, duration: 1 });

    //Gallery
    gsap.to(gallery, { x: -coord, duration: 1, ease: "back.out(1)" });
    //Increment zIndex
    topIndex++;
    currentSwatch = swatchName;
  });
});


  
 //Page 5 video on scroll
const tlVideo = gsap.timeline({
  scrollTrigger: {
    trigger: ".fifth-page",
    start: "0%",
    end: "150%",
    scrub: true,
    pin: true,
  },
});
tlVideo.fromTo(
  ".product-video",
  { currentTime: 0 },
  { currentTime: 3, duration: 1 }
);

tlVideo.fromTo(
  ".product-info-container h3",
  { opacity: 0 },
  { opacity: 1, stagger: 0.25, duration: 0.5 },
  "<"
);


//Test page

const tlSplitext = gsap.timeline({
  scrollTrigger: {
    trigger: ".test-page",
    start: "-50%",
    end: "20%",
    // markers: { startColor: "blue", endColor: "red" },
    scrub: true,
    
  },
});

tlSplitext.fromTo(".text-scroll-1",  { x: "40%"  }, { x: "00%", duration: 0.8}  );
tlSplitext.fromTo(".text-scroll-2", { x: "-40%" }, { x: "00%", duration: 0.8 });
tlSplitext.fromTo(".text-scroll-3", { x: "40%" }, { x: "0%", duration: 0.8  }, "<");

// Client Images

const tlSplitimages = gsap.timeline({
  scrollTrigger: {
    trigger: ".client-images",
    start: "-20%",
    end: "110%",
    // markers: { startColor: "blue", endColor: "red" },
    scrub: true,
  },
});

tlSplitimages.fromTo(".test-image-section1",  { x: "-70%"  }, { x: "00%", duration: 1.4, stagger: 0.55}   );
tlSplitimages.fromTo(".test-image-section2", { x: "70%" }, { x: "00%", duration: 0.8 }, "<" );
// tlSplitimages.fromTo(".text-scroll-3", { x: "40%" }, { x: "0%", duration: 0.8  }, "<");


const tlSplitPimagesect = gsap.timeline({
  scrollTrigger: {
    trigger: ".client-images",
    pin: true,
    pinSpacing: false,
    start: "50%",
    end: "100%",
  },
});



//6th Page

const tlParallax = gsap.timeline({
  scrollTrigger: {
    trigger: ".sixth-page",
    start: "-25%",
    end: "1%",
    scrub: true,
    // markers: { startColor: "blue", endColor: "green" }
  },
});

// tlParallax.fromTo(".photo-title", { opacity: 0.1 }, { opacity: 1.1, duration: 0.4, stagger: 4 }, "<");
tlParallax.fromTo(".stagger", { opacity: 0.1 }, { opacity: 1.1, duration: 2, stagger: 4 }, "<");
// tlParallax.fromTo(".photo-subtitle", { opacity: 0.1 }, { opacity: 1.1, duration: 4, stagger: 4 }, "<");


// tlParallax.fromTo(".photo-subtitle2", { opacity: 0.6 }, { opacity: 1.1, duration: 4, stagger: 4  }, "<");
// tlParallax.fromTo(".portrait-container", { y: 0 }, { y: -80 }, "<");
// tlParallax.fromTo(".phone-video", { y: -10 }, { y: -180 }, "<");