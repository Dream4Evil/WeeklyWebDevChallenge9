let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY +1;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("nav__link--current");
    } else {
      link.classList.remove("nav__link--current");
    }
  });
});

//Nav mobile
function myFunction() {
  let x = document.querySelector("nav ul .nav__links");
    if (!x.classList.contains("hidden")){
        x.classList.add("hidden");
    } else {
        x.classList.remove("hidden");
    }
}

//Change menu from mobile to normal 
function checkMenu() { 
 let m = document.getElementById('nav__links');
 if(window.innerWidth>=768){
     if(m.classList.contains("hidden")){
         m.classList.remove("hidden");
     }   
 } else 
 {
    m.classList.add("hidden");
 }
//            m.addEventListener("click", modifyText, false); 
} 



function mobileMenu__collapse(){
     if(window.innerWidth<=768){
        let x = document.querySelector("nav ul .nav__links");
        x.classList.add("hidden");
    }
}

mainNavLinks.forEach(function(el){
    el.addEventListener("click", mobileMenu__collapse, false);
}
);
