var w = window.innerWidth;
var t1 = new TimelineMax();
var size = w > 768 ? "big" : "small";
if (size === "big") {
  makeScrollMagic();
}

function makeScrollMagic() {

      TweenMax.from(".sticky", 4, {
            delay: 4,
            opacity: 0,
            ease: Expo.easeInOut
      });
      TweenMax.from(".header", 4, {
            delay: 3,
            opacity: 0,
            ease: Expo.easeInOut
      });
      TweenMax.to(".loading-screen", 4, {
            delay: 4,
            opacity: 0,
            ease: Expo.easeInOut
      });

      TweenMax.from(".bottom-text", 3, {
            delay: 6,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".ml7", 3, {
            delay: 6,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".p1", 3, {
            delay: 7.1,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".p2", 3, {
            delay: 7.2,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from("#one", 3, {
            delay: 7,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from("#two", 3, {
            delay: 7,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      t1.from(".ringOne", 4, {
            delay: 0.4,
            opacity: 0,
            ease: Expo.easeInOut
      }).from(".ringTwo", 4, {
            delay: 0.9,
            opacity: 0,
            ease: Expo.easeInOut
      }, "-=5").from(".ringThree", 4, {
            delay: 0.9,
            opacity: 0,
            ease: Expo.easeInOut
      }, "-=5").to(".ringOne", 4, {
            delay: 0.4,
            x: 40,
            ease: Expo.easeInOut
      }).to(".ringTwo", 4, {
            delay: 0.9,
            x: 40,
            ease: Expo.easeInOut
      },"-=5").to(".ringThree", 4, {
            delay: 0.9,
            x: 40,
            ease: Expo.easeInOut
      },"-=5");

}

function sizeIt() {
  w = window.innerWidth;
  var newSize = w > 768 ? "big" : "small";
  if (newSize != size) {
    size = newSize;
    if (newSize === "small") {
      TweenMax.set("#target", { clearProps: "all" });
      t1.clear();
      controller.destroy(true);
    } else {
      makeScrollMagic();
    }
  }
}

window.addEventListener("resize", sizeIt);


