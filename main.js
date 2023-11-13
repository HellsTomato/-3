const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
const portfolioBtn = document.querySelector(".portfolio__btn");
const portfolioContent = document.querySelector(".portfolio__content");


function toggleMenuVisibility() {
  menuList.classList.toggle("hide");
}


menuBtn.addEventListener("click", toggleMenuVisibility);
portfolioBtn.addEventListener("click", togglePortfolio);

