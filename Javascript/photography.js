"use strict";

var r = document.querySelector(":root");

console.log(document.querySelector(".helloHolder").getBoundingClientRect().y);

const isMobile = navigator.userAgentData.mobile;
if (isMobile == true) {
  document.querySelector(".hello").classList.add("downsize");
}
console.log(isMobile);

console.log(screen.width);

if (screen.width > 1000) {
  r.style.setProperty(
    "--screenWidth",
    4080 / (4080 / screen.width) - 0.73 * (4080 / (4080 / screen.width)) + "px"
  );
} else {
  r.style.setProperty(
    "--screenWidth",
    4080 / (4080 / screen.width) - 0.8 * (4080 / (4080 / screen.width)) + "px"
  );
}

document.querySelector(".logo").addEventListener("click", function () {
  window.location.replace("../../index.html");
});

const helloDistFromTop = document
  .querySelector(".helloHolder")
  .getBoundingClientRect().y;

document.addEventListener("scroll", function () {
  if (window.scrollY > helloDistFromTop) {
    document
      .querySelector(".helloHolder")
      .classList.add("helloHolderWidthIncrease");
  } else {
    document
      .querySelector(".helloHolder")
      .classList.remove("helloHolderWidthIncrease");
  }
});
