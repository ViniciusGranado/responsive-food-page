const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');
const searchIcon = document.querySelector('#search-icon');
const searchForm = document.querySelector('#search-form');
const closeFormIcon = document.querySelector('#close');

const toggleMenu = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};
const closeMenu = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};
const openSearchForm = () => {
  searchForm.classList.add('active');
}
const closeSearchForm = () => {
  searchForm.classList.remove('active');
}


menu.addEventListener('click', toggleMenu);
window.addEventListener('scroll', closeMenu);
searchIcon.addEventListener('click', openSearchForm);
closeFormIcon.addEventListener('click', closeSearchForm);

// Swiper slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
