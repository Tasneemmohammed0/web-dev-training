"use strict";

const header = document.querySelector(".header");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav");

// Responsive design of nav items
menuIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Header appearance
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (window.scrollY < lastScrollY) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  nav.classList.remove("active");
  lastScrollY = window.scrollY;
});
