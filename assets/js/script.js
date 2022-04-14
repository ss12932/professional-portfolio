"use strict";
const introReveal = document.querySelectorAll(".intro-title");
const navLinks = document.querySelector(".nav-bar");

window.addEventListener("load", function (event) {
  event.preventDefault(); //on page load, unintended behaviour of section 1 title expanding to full size. this effect not intended.
  introReveal.forEach(function (span, i) {
    setTimeout(() => {
      span.classList.remove("title-hide");
      span.classList.add("title-reveal");
    }, 1500 * i);
  });
});

navLinks.addEventListener("click", function (event) {
  event.preventDefault(); //needed or smooth scrolling wont work. will instantly go onto next section.
  if (event.target.classList.contains("nav-link")) {
    const linkSection = event.target.getAttribute("href");
    document.querySelector(linkSection).scrollIntoView({ behavior: "smooth" });
  }
});
