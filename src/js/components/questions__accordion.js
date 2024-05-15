const accordions = document.querySelectorAll(".questions__item");

const openAccordion = (accordion) => {
  const content = accordion.querySelector(".questions__p");
  accordion.classList.add("questions__item_active");
  content.style.maxHeight = content.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
  const content = accordion.querySelector(".questions__p");
  accordion.classList.remove("questions__item_active");
  content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
  const intro = accordion.querySelector(".questions__title");
  const content = accordion.querySelector(".questions__p");

  intro.onclick = () => {
    if (content.style.maxHeight) {
      closeAccordion(accordion);
    } else {
      accordions.forEach((accordion) => closeAccordion(accordion));
      openAccordion(accordion);
    }
  };
});
