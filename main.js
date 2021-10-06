const toolbar = document.querySelector('.toolbar__2');
const topCross = document.querySelector('.top');
const middleCross = document.querySelector('.middle');
const bottomCross = document.querySelector('.bottom');
const headline = document.querySelector('.headline');
const works = document.querySelector('.works');
const About = document.querySelector('.about-me');
const form = document.querySelector('.form');
const footer = document.querySelector('.footer');
const trigger = document.getElementById('btn-trigger');

function toggleNavShow() {
  toolbar.classList.toggle('show');
  topCross.classList.toggle('cross');
  middleCross.classList.toggle('cross');
  bottomCross.classList.toggle('disappear');
  headline.classList.toggle('blur');
  works.classList.toggle('blur');
  About.classList.toggle('blur');
  form.classList.toggle('blur');
  footer.classList.toggle('blur');
}

trigger.addEventListener('click', () => {
  toggleNavShow();
});

window.addEventListener('hashchange', () => {
    toggleNavShow();
});

const formdata = document.querySelector('.form-data');
const mail = document.getElementById('mail');
const errorMessage = document.querySelector('.error-message');
 
formdata.addEventListener('submit', (e) => {
  if (mail.value === mail.value.toLowerCase()) {
    errorMessage.textContent = '';
  } else {
    e.preventDefault();
    errorMessage.innerHTML = '** FORM NOT SENT <br> ** Email must be in <strong>lowercase</strong> ';
  }
});

