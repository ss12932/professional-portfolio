"use strict";
const titleReveal = document.querySelectorAll(".title-hide");
const navLinks = document.querySelector(".header");
const flipIcon = document.querySelector(".nav-link");
const section2 = document.querySelector("#section-2");
const anchorLink = document.querySelector(".anchor-link");

window.addEventListener("load", function (event) {
  event.preventDefault(); //on page load, unintended behaviour of section 1 title expanding to full size. this effect not intended.
  titleReveal.forEach(function (span, i) {
    setTimeout(() => {
      span.classList.remove("title-hide");
      span.classList.add("title-reveal");
    }, 1200 * i);
  });
});

navLinks.addEventListener("click", function (event) {
  event.preventDefault(); //needed or smooth scrolling wont work. will instantly go onto next section.
  if (event.target.classList.contains("nav-link")) {
    const linkSection = event.target.getAttribute("href");
    document.querySelector(linkSection).scrollIntoView({ behavior: "smooth" });
  }
});

anchorLink.addEventListener("click", function (event) {
  event.preventDefault();
  section2.scrollIntoView({ behavior: "smooth" });
});
