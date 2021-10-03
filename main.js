const toolbar = document.querySelector('.toolbar__2')
const topCross = document.querySelector('.top')
const middleCross = document.querySelector('.middle')
const bottomCross = document.querySelector('.bottom')

function toggleNavShow(){
    toolbar.classList.toggle('show');
    topCross.classList.toggle('cross');
    middleCross.classList.toggle('cross');
    bottomCross.classList.toggle('disappear');
}

document.getElementById('btn-trigger').onclick = function() {
    toggleNavShow();
}

window.addEventListener('hashchange', function(){
    toggleNavShow();
});