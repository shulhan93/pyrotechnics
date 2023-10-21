import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  pagination: {
    el: '.hero-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.hero-next',
    prevEl: '.hero-prev',
  },
});
