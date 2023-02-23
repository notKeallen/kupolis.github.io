const pictures = [
  { url: "assets/img/M5.png", title: "Kupolis M5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat fermentum dolor, a sodales odio elementum ac. Donec aliquet, sapien et suscipit lobortis, elit ligula venenatis mi, nec mollis ante ipsum sit amet lacus. Proin est justo, porta non nunc at, efficitur ullamcorper metus. Nam non pretium eros, vel consectetur lacus. Suspendisse et volutpat ex.", diameter: "Precnik: 5m", height: "Visina: 4m", surface:"Povrsina: 38m", elements:"Elemenat: 120" },
  { url: "assets/img/M6.png", title: "Kupolis M6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat fermentum dolor, a sodales odio elementum ac. Donec aliquet, sapien et suscipit lobortis, elit ligula venenatis mi, nec mollis ante ipsum sit amet lacus. Proin est justo, porta non nunc at, efficitur ullamcorper metus. Nam non pretium eros, vel consectetur lacus. Suspendisse et volutpat ex.", diameter: "Precnik: 6m", height: "Visina: 5m", surface:"Povrsina: 43m", elements:"Elemenat: 150" },
  { url: "assets/img/M7.png", title: "Kupolis M7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat fermentum dolor, a sodales odio elementum ac. Donec aliquet, sapien et suscipit lobortis, elit ligula venenatis mi, nec mollis ante ipsum sit amet lacus. Proin est justo, porta non nunc at, efficitur ullamcorper metus. Nam non pretium eros, vel consectetur lacus. Suspendisse et volutpat ex.", diameter: "Precnik: 7m", height: "Visina: 6m", surface:"Povrsina: 48m", elements:"Elemenat: 180" },
  { url: "assets/img/M8.png", title: "Kupolis M8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat fermentum dolor, a sodales odio elementum ac. Donec aliquet, sapien et suscipit lobortis, elit ligula venenatis mi, nec mollis ante ipsum sit amet lacus. Proin est justo, porta non nunc at, efficitur ullamcorper metus. Nam non pretium eros, vel consectetur lacus. Suspendisse et volutpat ex.", diameter: "Precnik: 8m", height: "Visina: 7m", surface:"Povrsina: 55m", elements:"Elemenat: 210" }
];

const buttons = document.querySelectorAll(".model button");
const picture = document.getElementById("picture");
const title = document.getElementById("title");
const description = document.getElementById("description");
const diameter = document.getElementById("diameter");
const height = document.getElementById("height");
const surface = document.getElementById("surface");
const elements = document.getElementById("elements");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const index = parseInt(button.getAttribute("data-index"));
    picture.src = pictures[index].url;
    title.textContent = pictures[index].title;
    description.textContent = pictures[index].description;
    diameter.textContent = pictures[index].diameter;
    height.textContent = pictures[index].height;
    surface.textContent = pictures[index].surface;
    elements.textContent = pictures[index].elements;
    
    // Remove active class from all buttons
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    
    // Add active class to clicked button
    button.classList.add("active");
  });
});
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

const animatedClassesLeft = ['.text', '#text', '.contact-information', '.proba1', '#heading'];

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



