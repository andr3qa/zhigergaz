import Swiper from "swiper";
import { Navigation } from "swiper/modules";

Swiper.use([Navigation]);

const swiper = new Swiper(".licenses__swiper", {
  slidesPerView: 2,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-arrows__button_next",
    prevEl: ".swiper-arrows__button_prev",
  },
});
