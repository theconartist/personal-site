const scroll = require('scroll');
const page = require('scroll-doc')();
const AOS = require('aos');
const links = document.querySelectorAll('.side-nav__link');

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    startEvent: 'load',
  });
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href');
      scroll.top(page, document.querySelector(id).offsetTop - 64, { duration: 500 });
    });
  });
});
