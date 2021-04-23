const hamburger = document.getElementById("hamburger-menu-button");
const navLinks = document.querySelector(".navbar-second-side");
const navbarClose = document.querySelector(".navbar-close");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
navbarClose.addEventListener("click", () => {
  navLinks.classList.remove("show");
});

const infoLink = document.querySelector(".info-link");
const contactLink = document.querySelector(".contact-link");
const priceLink = document.querySelector(".price-link");
const productLink = document.querySelector(".product-link");
const seventhPart = document.querySelector(".seventh-part");
const lastPart = document.querySelector(".last-part");
const eighthPart = document.querySelector(".eighth-part");
const fifthPart = document.querySelector(".fifth-part");

priceLink.addEventListener("click", (event) => {
  event.preventDefault();
  seventhPart.scrollIntoView({ behavior: "smooth", block: "start" });
  navLinks.classList.remove("show");
});

infoLink.addEventListener("click", (event) => {
  event.preventDefault();
  lastPart.scrollIntoView({ behavior: "smooth", block: "start" });
  navLinks.classList.remove("show");
});
contactLink.addEventListener("click", (event) => {
  event.preventDefault();
  eighthPart.scrollIntoView({ behavior: "smooth", block: "start" });
  navLinks.classList.remove("show");
});
productLink.addEventListener("click", (event) => {
  event.preventDefault();
  fifthPart.scrollIntoView({ behavior: "smooth", block: "start" });
  navLinks.classList.remove("show");
});
