"use strict";
console.log("Link Success");

const isMobile = navigator.userAgentData.mobile;
console.log(isMobile);

if (isMobile == true) {
  setTimeout(function () {
    inputData = prompt(
      "Do you want to:\n\n1) View my JavaScript experience\n2) View my Web Development experience\n3) View my Python experience\n4) Go back to home page"
    );
  }, 20000);
}

document.querySelector(".welcomeImage").addEventListener("click", function () {
  window.location.replace("../index.html");
});

const messages = {
  javascript:
    'My JavaScript skills are unmatched. I learned by using the Udemy Course "The Complete JavaScript Course 2023: From Zero to Expert!" by Jonas Schmedtmann. I have been using JS for 3 years now.',
  webDev:
    'My web development skills are also unmatched! I learned by using the Udemy Course "The Complete 2023 Web Development Bootcamp" by Dr. Angela Yu. I have been using HTML and CSS for 4 years now.',
  python:
    'My python skills are also unmatched! I learned by using the Udemy Course "100 Days of Code: The Complete Python Pro Bootcamp for 2023" by Dr. Angela Yu. I have been using Python for 4 years now.',
};

const bootUpText = document.querySelector(".bootUpText");
const bootUpTextContent = "Boot-Up Initialized";

const bootUpText2 = document.querySelector(".bootUpText2");
const bootUpTextContent2 = "Version 1.1 of Russell's Website";

const welcomeText = document.querySelector(".welcomeText");
const welcomeTextContent =
  "Welcome to the coding section of this website! This is where you can learn all about my coding abilities!";

const externalWebsite = document.querySelector(".externalWebsite");

const externalWebsiteTextContent = {
  JSandWebDev: "Click here to see my past websites!",
  python: "Click here to see my past Python programs!",
};

const questionText = document.querySelector(".questionText");
const questionTextContent = "Do you want to:";

const questionText1 = document.querySelector(".questionText1");
const questionTextContent1 = "1) View my JavaScript experience";

const questionText2 = document.querySelector(".questionText2");
const questionTextContent2 = "2) View my Web Development experience";

const questionText3 = document.querySelector(".questionText3");
const questionTextContent3 = "3) View my Python experience";

const questionText4 = document.querySelector(".questionText4");
const questionTextContent4 = "4) Go back to home page";

const queryOutput = document.querySelector(".queryOutput");

const flashingIcon = document.querySelector(".flashingIcon");
const flashingIconTextContent = "█ ";

function textDelay(i, inp, output, waitTime) {
  setTimeout(function () {
    let int = "";
    setTimeout(function () {
      if (i < inp.length) {
        int = output.textContent + inp.substring(i, i + 1);
        output.textContent = int;
        i++;
        textDelay(i, inp, output);
      }
    }, 55);
  }, waitTime);
}

let delayTorF = false;
let inputData = "";

textDelay(0, bootUpTextContent, bootUpText, 3000);
textDelay(0, bootUpTextContent2, bootUpText2, 5000);
textDelay(0, welcomeTextContent, welcomeText, 8000);
textDelay(0, questionTextContent, questionText, 15000);
textDelay(0, questionTextContent1, questionText1, 17000);
textDelay(0, questionTextContent2, questionText2, 17000);
textDelay(0, questionTextContent3, questionText3, 17000);
textDelay(0, questionTextContent4, questionText4, 17000);
textDelay(0, flashingIconTextContent, flashingIcon, 20000);
setTimeout(function () {
  delayTorF = true;
  focus();
}, 20000);

document.addEventListener("keydown", function (event) {
  if (delayTorF) {
    if (String(event.key).length == 1) {
      if (flashingIcon.textContent.substring(0, 1) == "█") {
        flashingIcon.textContent = ">";
      }
      flashingIcon.textContent = flashingIcon.textContent + String(event.key);
    } else if (String(event.key) == "Backspace") {
      if (flashingIcon.textContent.length > 1) {
        flashingIcon.textContent = flashingIcon.textContent.substring(
          0,
          flashingIcon.textContent.length - 1
        );
      }
    } else if (String(event.key) == "Enter") {
      if (flashingIcon.textContent.length > 1) {
        inputData = flashingIcon.textContent.substring(
          1,
          flashingIcon.textContent.length
        );
        delayTorF = false;
        if (inputData == 1) {
          queryOutput.textContent = "";
          externalWebsite.textContent = "";
          textDelay(0, messages.javascript, queryOutput, 100);
          textDelay(
            0,
            externalWebsiteTextContent.JSandWebDev,
            externalWebsite,
            13000
          );
          setTimeout(function () {
            delayTorF = true;
            flashingIcon.textContent = ">";
          }, 15000);
        } else if (inputData == 2) {
          queryOutput.textContent = "";
          externalWebsite.textContent = "";
          textDelay(0, messages.webDev, queryOutput, 100);
          textDelay(
            0,
            externalWebsiteTextContent.JSandWebDev,
            externalWebsite,
            13000
          );
          setTimeout(function () {
            delayTorF = true;
            flashingIcon.textContent = ">";
          }, 15000);
        } else if (inputData == 3) {
          queryOutput.textContent = "";
          externalWebsite.textContent = "";
          textDelay(0, messages.python, queryOutput, 100);
          textDelay(
            0,
            externalWebsiteTextContent.python,
            externalWebsite,
            13000
          );
          setTimeout(function () {
            delayTorF = true;
            flashingIcon.textContent = ">";
          }, 15000);
        } else if (inputData == 4) {
          window.location.replace("../index.html");
        } else {
          flashingIcon.textContent = ">";
          delayTorF = true;
        }
      }
    }
  }
});

externalWebsite.addEventListener("click", function () {
  if (externalWebsite.textContent == externalWebsiteTextContent.JSandWebDev) {
    window.open("https://github.com/TheStickLord", "_blank");
  } else if (externalWebsite.textContent == externalWebsiteTextContent.python) {
    window.open("https://replit.com/@TheStickLord", "_blank");
  }
});
