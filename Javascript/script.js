"use strict";

console.log("Link Success");

const homeButton = document.querySelector(".logo");
const buttonContTop = document.querySelector(".buttonContTop");
const buttons = document.querySelectorAll(".intIdent");

document.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    buttonContTop.classList.remove("BCT_hasScrolled");

    for (const button of buttons) {
      button.classList.add("button");
      button.classList.remove("buttonHasScrolled");
    }
  } else {
    buttonContTop.classList.add("BCT_hasScrolled");

    for (const button of buttons) {
      button.classList.add("buttonHasScrolled");
      button.classList.remove("button");
    }

    console.log("yep");
  }
});

document.querySelector(".textButton").addEventListener("click", function () {
  window.location.replace("index/coding.html");
});
