// Navbar Scroll-Effect
const navbar = document.querySelector('#navbar-wrapper');
window.onscroll = () => { 
  if (document.documentElement.scrollTop >= 50 ) {
    navbar.style.background = "black";
    navbar.style.transition = '0.8s ease'
  } 
  else {
    navbar.style.background = "transparent";
  }
};

// Automated update Month and Year in footer
const update = () => {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  document.querySelector('.footer-copyright').innerText = `Last update ${months[month]} ${year}`;
};

// mobile navbar
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar-list');
  const navbar = document.querySelector('#navbar-wrapper');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navbar.style.background = "black";
    burger.classList.toggle('toggle');
  });
};

// create skill-grid
const skillBox = document.querySelector('.skill-grid')
const skills = [{'name':'Ruby on Rails', 'icon':'<i class="fas fa-subway"></i>'},
              {'name':'HTML', 'icon':'<i class="fab fa-html5"></i>'},
              {'name':'CSS', 'icon':'<i class="fab fa-css3"></i>'},
              {'name':'JavaScript', 'icon':'<i class="fab fa-js-square"></i>'},
              {'name':'Ruby', 'icon':'<i class="fas fa-gem"></i>'},
              {'name':'Python with<br>Jupyter Notebook', 'icon':'<i class="fab fa-python"></i>'},
              {'name':'Java Basics', 'icon':'<i class="fab fa-java"></i>'},
              {'name':'GitHub', 'icon':'<i class="fab fa-github"></i>'},
              {'name':'SQLite & PostgreSQL', 'icon':'<i class="fas fa-database"></i>'},
              {'name':'Web Scraping<br>API<br>JSON<br>Selenium', 'icon':'<i class="fas fa-globe"></i>'},
              {'name':'Bootstrap', 'icon':'<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bootstrap-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/></svg>'},
              {'name':'UI Design', 'icon':'<i class="fab fa-figma"></i>'},
              {'name':'Test Driven Development', 'icon':'<i class="fas fa-code"></i>'},
              {'name':'German<br>English<br>Spanish', 'icon':'<i class="fas fa-language"></i>'},
              {'name':'continuous<br>learning...', 'icon':'<i class="fas fa-ellipsis-h"></i>'}              
            ] 

const insertSkills = () => {
  skills.forEach((skill) => {
    const mainBox = 
    `<div class="main-box">
      <div class="skill-box">
        <div class="skill">
          ${skill.icon}
        </div>
        <div class="skill-back">
          <p>${skill.name}</p> 
        </div>
      </div>
    </div>`
    skillBox.insertAdjacentHTML('beforeend', mainBox)
  });
};

// pagecount
// const countEl = document.getElementById('count');
const updateVisitCount = () => {
  fetch('https://api.countapi.xyz/update/sven-haider/portfolio/?amount=1')
    .then(res => res.json())
    .then(res => {
      // countEl.innerHTML = res.value;
      console.log('Pagecount: ' + res.value);
    });
}

navSlide();
insertSkills();
update();
updateVisitCount();