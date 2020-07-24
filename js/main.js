var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});