"use strict";
const introReveal = document.querySelectorAll(".intro-title");
const navLinks = document.querySelector(".nav-bar");

window.addEventListener("load", function (event) {
  event.preventDefault(); //on page load, unintended behaviour of section 1 title expanding to full size. this effect not intended.
  introReveal.forEach(function (spn) {
    spn.classList.remove("title-hide");
    spn.classList.add("title-reveal");
  });
});

navLinks.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("nav-link")) {
    const linkSection = event.target.getAttribute("href");
    document.querySelector(linkSection).scrollIntoView({ behavior: "smooth" });
  }
});
