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
const hideScrollBar = document.querySelector('body');
const worksData = [
  6,
  {
    coverImg: './assets/img/Img__Plaholder.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },
];

for (let i = 0; i < worksData[0]; i += 1) {
  const recentWorksTemp = `
  <div class="img-plaholder">
  <img src="${worksData[1].coverImg}" alt="Multi-Post Stories Gain+Glory">
  <div class="txt-content">
    <h3>Multi-Post Stories<br>+Glory</h3>
      <ul>
        <li><p>${worksData[1].technologies[0]}</p></li>
        <li><p>${worksData[1].technologies[1]}</p></li>
        <li><p>${worksData[1].technologies[2]}</p></li>
        <li><p>${worksData[1].technologies[3]}</p></li> 
      </ul>
      <a class="btn popup " href="#">See Project</a>
  </div>
  `;
  document.querySelector('.grid-container').innerHTML += recentWorksTemp;
}
const popupTriggers = document.querySelectorAll('.popup');
const popupWindow = document.querySelector('.pop-up');
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
  let popupTemplate = '';
  if (window.innerWidth < 900) {
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
    `;
  } else {
    popupTemplate = `
    <img class="close" src="./assets/img/desktop_modal_close.svg" alt="">
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
    `;
  }

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

popupTriggers.forEach((project) => {
  project.addEventListener('click', (e) => {
    e.preventDefault();
    popupWindow.innerHTML = displayPopup();
    popupWindow.classList.add('showpopup');
    headline.classList.add('blur');
    works.classList.add('blur');
    About.classList.add('blur');
    form.classList.add('blur');
    footer.classList.add('blur');
    toolbar.classList.add('blur');
    hideScrollBar.classList.add('hide-scrollbar');
    const popupClose = document.querySelector('.close');
    popupClose.addEventListener('click', () => {
      popupWindow.classList.remove('showpopup');
      headline.classList.remove('blur');
      works.classList.remove('blur');
      About.classList.remove('blur');
      form.classList.remove('blur');
      footer.classList.remove('blur');
      toolbar.classList.remove('blur');
      hideScrollBar.classList.remove('hide-scrollbar');
    });
    popupClose.addEventListener('click', () => {
      popupWindow.classList.remove('showpopup');
      headline.classList.remove('blur');
      works.classList.remove('blur');
      About.classList.remove('blur');
      form.classList.remove('blur');
      footer.classList.remove('blur');
      toolbar.classList.remove('blur');
      hideScrollBar.classList.remove('hide-scrollbar');
    });
  });
});

const formdata = document.querySelector('.form-data');
const mail = document.getElementById('mail');
const errorMessage = document.querySelector('.error-message');

formdata.addEventListener('submit', (e) => {
  const Regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (mail.value.match(Regex)) {
    errorMessage.textContent = '';
  } else {
    e.preventDefault();
    errorMessage.innerHTML = '** FORM NOT SENT <br> ** Invalid Email Address ';
  }
});

const getData = (e) => {
  const Regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (mail.value.match(Regex)) {
    let formLocalStorageData = {
      id: Date.now(),
      name: document.getElementById('name').value,
      email: document.getElementById('mail').value,
      message: document.getElementById('msg').value,
    };

    localStorage.setItem(formLocalStorageData.id, JSON.stringify(formLocalStorageData));
  } else {
    e.preventDefault();
  }
}
formdata.addEventListener('submit', getData);
