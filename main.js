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
const hideScrollBar = document.querySelector('body')
const worksData = {
  num: 6,
  works: {
    coverImg: './assets/img/Img__Plaholder.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML']
  }
}

for(let i = 0; i < worksData.num; i++) {
  let recentWorksTemp = `
  <div class="img-plaholder">
  <img src="${worksData.works.coverImg}" alt="Multi-Post Stories Gain+Glory">
  <div class="txt-content">
    <h3>Multi-Post Stories<br>+Glory</h3>
      <ul>
        <li><p>${worksData.works.technologies[0]}</p></li>
        <li><p>${worksData.works.technologies[1]}</p></li>
        <li><p>${worksData.works.technologies[2]}</p></li>
        <li><p>${worksData.works.technologies[3]}</p></li> 
      </ul>
      <a class="btn popup " href="#">See Project</a>
  </div>
  `
  document.querySelector('.grid-container').innerHTML += recentWorksTemp;
}
const popupTriggers = document.querySelectorAll('.popup')
const popupWindow = document.querySelector('.pop-up')
const modal = {
  name: 'Keeping track of hundreds of components',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  featuredImage: './assets/img/Snapshoot_Portfolio.png',
  desktopImage: './assets/img/Snapshoot_Portfolio_desktop.png',
  seeLiveImg: './assets/img/see-live.svg',
  seeSourceImg: './assets/img/Vector.svg',
  technologiesMobile: ['Ruby on the rails', 'CSS', 'JavaScript'],
  technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Boostrap', 'Terminal', 'Codepen'],
  linktoliveversion: '#',
  linktosource: '#',
};

function displayPopup() {
  let popupTemplate = ``;
  if(window.innerWidth < 900) {
    popupTemplate = `
      <img class="close" src="./assets/img/Icon.svg" alt="">
      <img class="mobile" src="./assets/img/Snapshoot_Portfolio.png" alt="">
      <div class="btnsh1">
        <h1>${modal.name}</h1>
        <div class="side">
          <a href="${modal.linktoliveversion}" class="btn">See Live<img src="./assets/img/see-live.svg" alt=""></a>
          <a href="${modal.linktosource}" class="btn">See Source<img src="./assets/img/Vector.svg" alt=""></a>
        </div>
      </div>
      <ul>
        <li><p>${modal.technologiesMobile[0]}</p></li>
        <li><p>${modal.technologiesMobile[1]}</p></li>
        <li><p>${modal.technologiesMobile[2]}</p></li>
      </ul>
      <p>${modal.description}</p>
      <div class="btns">
        <a class="btn">See Live<img src="${modal.seeLiveImg}" alt=""></a>
        <a class="btn">See Source<img src="${modal.seeSourceImg}" alt=""></a>
      </div>
    `
  } else {
    popupTemplate = `
    <img class="closeD" src="./assets/img/desktop_modal_close.svg" alt="">
    <img class="desktop" src="./assets/img/Snapshoot_Portfolio_desktop.png" alt="">
    <div class="btnsh1">
      <h1>${modal.name}</h1>
      <div class="side">
        <a class="btn">See Live<img src="${modal.seeLiveImg}" alt=""></a>
        <a class="btn">See Source<img src="${modal.seeSourceImg}" alt=""></a>
      </div>
    </div>
    <ul>
      <li><p>${modal.technologiesDesktop[0]}</p></li>
      <li><p>${modal.technologiesDesktop[1]}</p></li>
      <li><p>${modal.technologiesDesktop[2]}</p></li>
      <li><p>${modal.technologiesDesktop[3]}</p></li>
      <li><p>${modal.technologiesDesktop[4]}</p></li>
      <li><p>${modal.technologiesDesktop[5]}</p></li>
      <li><p>${modal.technologiesDesktop[6]}</p></li>
     </ul>
    <p>${modal.description}</p>
    `
  }
  console.log(popupTemplate)
  return popupTemplate;
}

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
  toolbar.classList.toggle('blur');
}
trigger.addEventListener('click', () => {
  toggleNavShow();
});

window.addEventListener('hashchange', () => {
  toggleNavShow();
});

popupTriggers.forEach(project => {
  project.addEventListener('click', (e) => {
    e.preventDefault();
    popupWindow.innerHTML = displayPopup();
    const popupClose = document.querySelector('.close');
    const popupCloseD = document.querySelector('.closeD');
    popupClose ? popupClose.addEventListener('click', () => {
      popupWindow.innerHTML = displayPopup();
      popupWindow.classList.toggle('showpopup');
      popupClose.classList.toggle('showpopup')
      headline.classList.toggle('blur');
      works.classList.toggle('blur');
      About.classList.toggle('blur');
      form.classList.toggle('blur');
      footer.classList.toggle('blur');
      toolbar.classList.toggle('blur');
      hideScrollBar.classList.toggle('hide-scrollbar')
    }) : null;
    popupCloseD ? popupCloseD.addEventListener('click', () => {
      popupWindow.innerHTML = displayPopup();
      popupWindow.classList.toggle('showpopup');
      popupCloseD.classList.toggle('showpopup')
      headline.classList.toggle('blur');
      works.classList.toggle('blur');
      About.classList.toggle('blur');
      form.classList.toggle('blur');
      footer.classList.toggle('blur');
      toolbar.classList.toggle('blur');
      hideScrollBar.classList.toggle('hide-scrollbar')
    }): null;
    popupWindow ? popupWindow.classList.toggle('showpopup'): null;
    popupClose ? popupClose.classList.toggle('showpopup'): null;
    popupCloseD ? popupCloseD.classList.toggle('showpopup'): null;
    headline ? headline.classList.toggle('blur'): null;
    works ? works.classList.toggle('blur'): null;
    About ? About.classList.toggle('blur'): null;
    form ? form.classList.toggle('blur'): null;
    footer ? footer.classList.toggle('blur'): null;
    toolbar ? toolbar.classList.toggle('blur'): null;
    hideScrollBar ? hideScrollBar.classList.toggle('hide-scrollbar'): null;
  });
});

const formdata = document.querySelector('.form-data');
const mail = document.getElementById('mail');
const errorMessage = document.querySelector('.error-message');
 
formdata.addEventListener('submit', (e) => {
  let RegExp = (/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i)
  if (mail.value === mail.value.match(RegExp)) {
    errorMessage.textContent = '';
  } else {
    e.preventDefault();
    errorMessage.innerHTML = '** FORM NOT SENT <br> ** Invalid Email Address ';
  }
});