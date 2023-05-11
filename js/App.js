$(document).ready(function(){

  var typed =  new Typed(".typing-1", {
    strings:[
      "Keynote Speaker", "Writer", "Enterprenuer", "Business Analyst", "Real-Estate Investor", "Freelancer"
    ],
    typeSpeed:80,
    backSpeed:60,
    loop: true
  
  });


  if (this.scrollY > 500){
     $('.scroll-up-btn').addClass('show');
  }else{
      $('.scroll-up-btn').removeClass('.show');
  }

});

// chamge navbar styles on scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle(
    'window-scroll', window.scrollY > 0  )
})





AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
 
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 750, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


// show/hide nav menu

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display ="none";
})

// close nav menu

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)