import Swiper from "swiper";
import { Pagination } from "swiper/modules";

Swiper.use([Pagination]);

const swiper = new Swiper(".portfolio__swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
});
