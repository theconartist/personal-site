const scroll = require('scroll');
const page = require('scroll-doc')();
const AOS = require('aos');
const links = document.querySelectorAll('.side-nav__link');
const introBox = document.querySelector('.intro-box');
const sideNav = document.querySelector('.side-nav__nav');
const age = document.querySelector('.age');
let hue = 0;
let change = 1;

function setSideNavLeft() {
  const introBoxPos = introBox.getBoundingClientRect();
  sideNav.style.left = introBoxPos.x + introBoxPos.width + 35;
}

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    startEvent: 'load',
  });

  const dob = new Date(1999, 7, 1);
  const diffMs = Date.now() - dob.getTime();
  const ageDt = new Date(diffMs);
  age.textContent = ` ${Math.abs(ageDt.getUTCFullYear() - 1970)} `;

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href');
      scroll.top(page, document.querySelector(id).offsetTop - 64, { duration: 500 });
    });
  });

  setSideNavLeft();
  window.addEventListener('resize', () => {
    setSideNavLeft();
  });
});
