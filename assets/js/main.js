const animatedClassesLeft = ['.contact-information', '#heading'];

function animateOnScrollLeft() {
  animatedClassesLeft.forEach(className => {
    const elements = document.querySelectorAll(className);
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const viewPortHeight = window.innerHeight;

      if (elementPosition < viewPortHeight - 1 && elementBottom > 0) {
        element.classList.add('landing-from-left');
      } 
      else{
        element.classList.remove('landing-from-left');
      }
    });
  });
}

window.addEventListener('scroll', animateOnScrollLeft);

window.addEventListener('scroll', e => {
  const scrollY = window.scrollY;
  const previousScrollY = window.previousScrollY || 0;

  isScrollingUp = scrollY < previousScrollY;

  animateOnScrollLeft();

  window.previousScrollY = scrollY;
});

const animatedClassesRight = ['.contact-form'];

function animateOnScrollRight() {
  animatedClassesRight.forEach(className => {
    const elements = document.querySelectorAll(className);
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const viewPortHeight = window.innerHeight;

      if (elementPosition < viewPortHeight - 1 && elementBottom > 0) {
        element.classList.add('landing-from-right');
      } 
      else{
        element.classList.remove('landing-from-right');
      }
    });
  });
}

const animatedClassesUp= [];

function animateOnScrollUp() {
  animatedClassesUp.forEach(className => {
    const elements = document.querySelectorAll(className);
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const viewPortHeight = window.innerHeight;

      if (elementPosition < viewPortHeight - 1 && elementBottom > 0) {
        element.classList.add('landing-from-up');
      } 
      else{
        element.classList.remove('landing-from-up');
      }
    });
  });
}

const animatedClassesDown = ['.fieldset', '.box','.boxes1','.banners'];

function animateOnScrollDown() {
  animatedClassesDown.forEach(className => {
    const elements = document.querySelectorAll(className);
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const viewPortHeight = window.innerHeight;

      if (elementPosition < viewPortHeight + 100 && elementBottom > 0) {
        element.classList.add('landing-from-down');
      } 
      else{
        element.classList.remove('landing-from-down');
      }
    });
  });
}
// call the animateOnScroll function on initial page load
animateOnScrollUp();

// call the animateOnScroll function on window scroll
window.addEventListener('scroll', animateOnScrollUp);

// call the animateOnScroll function on initial page load
animateOnScrollDown();

// call the animateOnScroll function on window scroll
window.addEventListener('scroll', animateOnScrollDown);

// call the animateOnScroll function on initial page load
animateOnScrollLeft();

// call the animateOnScroll function on window scroll
window.addEventListener('scroll', animateOnScrollLeft);

// call the animateOnScroll function on initial page load
animateOnScrollRight();

// call the animateOnScroll function on window scroll
window.addEventListener('scroll', animateOnScrollRight);

const emailInput = document.getElementById('email');

emailInput.addEventListener('input', function() {
  const email = emailInput.value;
  if (email === '') {
    emailInput.classList.remove('invalid');
  } 
  else if (validateEmail(email) == false) {
    emailInput.classList.add('invalid');
  } 
  else {
    emailInput.classList.remove('invalid');
  }
});

function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

const subjectInput = document.getElementById('subject');

subjectInput.addEventListener('input', function() {
  const link = subjectInput.value;
  const isLink = /https?:\/\/[\w-]+\.[\w-]+\S*/.test(link);

  if (isLink) {
    subjectInput.classList.add('invalid');
  } else {
    subjectInput.classList.remove('invalid');
  }
});

/*window.AcquaintedWidgetDomain = 'https://getacquainted.co';
    window.AcquaintedWidgetId = 'ff153c83-f590-4e95-bd01-b89025f64e4f';
    var s = document.createElement('script'); 
    s.src = AcquaintedWidgetDomain + '/js/widget-loader.js';
    s.async = true;
    document.body.appendChild(s);
*/
    let menuBox = document.getElementById("menuBox");
    let menuIcon = document.getElementById("menuIcon");

    menuIcon.onclick = function(){
      menuBox.classList.toggle("open-menu");

      if(menuBox.classList.contains("open-menu")){
        menuIcon.src = "assets/img/iks.png";
      }
      else{
        menuIcon.src="assets/img/hamburger.png"
      }
    }

    const responsiveMenus = document.querySelectorAll('.responsiveMenu');
    for (let i = 0; i < responsiveMenus.length; i++) {
      responsiveMenus[i].addEventListener('click', function() {
        menuBox.classList.toggle('open-menu');
        if (menuBox.classList.contains('open-menu')) {
          menuIcon.src = 'assets/img/iks.png';
        } else {
          menuIcon.src = 'assets/img/hamburger.png';
        }
      });
    }

    const documentHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
     }
     window.addEventListener('resize', documentHeight)
     documentHeight()


