const headerImg = document.querySelector(".imageContent");
const headerText = document.querySelector(".textContent");
const headerMobileImg = document.querySelector(".mobileImageContent");
const headerMobileText = document.querySelector(".secondTextContent");
const computerPhoto = document.querySelector(".computer-photo");
const headerSide = document.querySelector(".header-side");
const adviceSide = document.querySelector(".advice-side");
const computerSideTitle = document.querySelector(".computer-side-title");
const computerSideSubtitle = document.querySelector(".computer-side-subtitle");
const thirdPartButton = document.querySelector(".thirdPart-button");
const contentSide = document.querySelector(".content-side");
const actionSide = document.querySelector(".action-side");
const partnersSide = document.querySelector(".partners");
const clientSide = document.querySelector(".client");
const pricingContent = document.querySelector(".pricing-content");
const firstLittlePriceCard = document.querySelector(".card1");
const secondLittlePriceCard = document.querySelector(".card2");
const thirdLittlePriceCard = document.querySelector(".card3");
const fifthPartButton = document.querySelector(".fifth-part button");
const eighthPartTextContent = document.querySelector(
  ".eighth-part-text-content"
);
const form = document.querySelector(".form-location form");
const icon = document.querySelector(".iconMiniicon");
const footerIcon = document.querySelector(".footerIcon");
const pagesLinks = document.querySelector(".pages-content");
const map = document.getElementById("map");
const options = {
  rootMargin: "20px",
};
function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(headerImg);
observer.observe(headerText);
observer.observe(computerPhoto);
observer.observe(headerMobileImg);
observer.observe(headerMobileText);
observer.observe(headerSide);
observer.observe(adviceSide);
observer.observe(computerSideTitle);
observer.observe(computerSideSubtitle);
observer.observe(thirdPartButton);
observer.observe(contentSide);
observer.observe(actionSide);
observer.observe(clientSide);
observer.observe(partnersSide);
observer.observe(fifthPartButton);
observer.observe(firstLittlePriceCard);
observer.observe(secondLittlePriceCard);
observer.observe(thirdLittlePriceCard);
observer.observe(pricingContent);
observer.observe(eighthPartTextContent);
observer.observe(form);
observer.observe(icon);
observer.observe(footerIcon);
observer.observe(pagesLinks);
observer.observe(map);
