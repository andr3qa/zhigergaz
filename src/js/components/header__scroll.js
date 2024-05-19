let lastScroll = 0;
const hero = document.querySelector(".hero");
const heroHeight = hero.offsetHeight;
const header = document.querySelector(".header");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("header__hide");

window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > heroHeight
  ) {
    //scroll down
    header.classList.add("header__hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    //scroll up
    header.classList.remove("header__hide");
  }

  lastScroll = scrollPosition();
});
