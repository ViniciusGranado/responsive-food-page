const menu =  document.querySelector('#menu-bars');
const navbar =  document.querySelector('.navbar');

const toggleMenu = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

menu.addEventListener('click',  toggleMenu);