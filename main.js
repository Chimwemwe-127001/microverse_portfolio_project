const toolbar = document.querySelector('.toolbar__2')
const topCross = document.querySelector('.top')
const middleCross = document.querySelector('.middle')
const bottomCross = document.querySelector('.bottom')
const headline = document.querySelector('.headline')
const works = document.querySelector('.works');
const About = document.querySelector('.about-me');
const form = document.querySelector('.form')
const footer = document.querySelector('.footer')

function toggleNavShow(){
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

document.getElementById('btn-trigger').onclick = function() {
    toggleNavShow();
}

window.addEventListener('hashchange', function(){
    toggleNavShow();
});