"use strict";

const header = document.querySelector(".header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScrollY) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  lastScrollY = window.scrollY;
});
