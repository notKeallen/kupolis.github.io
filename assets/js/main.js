
const img3 = document.querySelectorAll(".small-img3");

img3.forEach((button) => {
  button.addEventListener("click", () => {
    
    // Remove active class from all buttons
    img3.forEach((btn) => {
      btn.classList.remove("img-active");
    });
    
    // Add active class to clicked button
    button.classList.add("img-active");
  });
});

const img2 = document.querySelectorAll(".small-img2");

img2.forEach((button) => {
  button.addEventListener("click", () => {
    
    // Remove active class from all buttons
    img2.forEach((btn) => {
      btn.classList.remove("img-active");
    });
    
    // Add active class to clicked button
    button.classList.add("img-active");
  });
});

function change1(){
  document.getElementById("type1-picture").src="assets/img/tip11.JPG";
}
function change2(){
  document.getElementById("type1-picture").src="assets/img/tip12.JPG";
}
function change3(){
  document.getElementById("type1-picture").src="assets/img/tip13.JPG";
}
function change4(){
  document.getElementById("type1-picture").src="assets/img/tip14.JPG";
}
function change5(){
  document.getElementById("type1-picture").src="assets/img/tip11.JPG";
}
function change6(){
  document.getElementById("type2-picture").src="assets/img/voda1.jpg";
}
function change7(){
  document.getElementById("type2-picture").src="assets/img/voda2.jpg";
}
function change8(){
  document.getElementById("type2-picture").src="assets/img/voda3.jpg";
}
function change9(){
  document.getElementById("type2-picture").src="assets/img/voda4.jpg";
}
function change10(){
  document.getElementById("type2-picture").src="assets/img/voda1.jpg";
}
function change11(){
  document.getElementById("type3-picture").src="assets/img/naselje1.jpg";
}
function change12(){
  document.getElementById("type3-picture").src="assets/img/naselje2.jpg";
}
function change13(){
  document.getElementById("type3-picture").src="assets/img/naselje3.jpg";
}
function change14(){
  document.getElementById("type3-picture").src="assets/img/naselje4.jpg";
}
function change15(){
  document.getElementById("type3-picture").src="assets/img/naselje5.jpg";
}
/*
const btnScrollToTop = document.querySelector(".btnScrollToTop");

// scroll to top of page when button clicked
btnScrollToTop.addEventListener("click", e => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});
*/
// toggle 'scroll to top' based on scroll position
/*window.addEventListener('scroll', e => {
  if (window.scrollY > 275) {
    btnScrollToTop.classList.add('show');
  } else {
    btnScrollToTop.classList.remove('show');
  }
});
*/
const arrows = document.querySelector(".arrows-animation")

window.addEventListener('scroll', e => {
  if (window.scrollY > 10) {
    arrows.classList.add('hide');
  } else {
    arrows.classList.remove('hide');
  }
});

const animatedClassesLeft = ['.model-text', '#text', '.contact-information', '.proba1', '#heading'];

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

const animatedClassesRight = ['.image', '.buttons','.picture','.contact-form'];

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

const animatedClassesDown = ['.spec', '#about-us-link', '.box'];

function animateOnScrollDown() {
  animatedClassesDown.forEach(className => {
    const elements = document.querySelectorAll(className);
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const viewPortHeight = window.innerHeight;

      if (elementPosition < viewPortHeight - 1 && elementBottom > 0) {
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

window.AcquaintedWidgetDomain = 'https://getacquainted.co';
    window.AcquaintedWidgetId = 'ff153c83-f590-4e95-bd01-b89025f64e4f';
    var s = document.createElement('script'); 
    s.src = AcquaintedWidgetDomain + '/js/widget-loader.js';
    s.async = true;
    document.body.appendChild(s);

    const header = document.querySelector('header');
    let lastScrollPosition = 0;
    let hasScrolled = false;

    window.addEventListener('scroll', () => {
      // Check if the user has scrolled at least once
      if (!hasScrolled) {
        hasScrolled = true;
        return;
      }

      // Check if the user is scrolling up or down
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down - hide the header
        header.classList.add('hide-header');
      } else {
        // Scrolling up - show the header
        header.classList.remove('hide-header');
      }
      lastScrollPosition = currentScrollPosition;
    });

    


