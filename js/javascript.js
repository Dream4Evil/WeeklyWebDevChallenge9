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
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

//Nav mobile
function myFunction() {
  let x = document.querySelector("nav ul .nav__links");
    if (!x.classList.contains("displayNone")){
        x.classList.add("displayNone");
    } else {
        x.classList.remove("displayNone");
    }
}

//Change menu from mobile to normal 
function checkMenu() { 
 let m = document.getElementById('nav__links');
 if(window.innerWidth>=768){
     if(m.classList.contains("displayNone")){
         m.classList.remove("displayNone");
     }   
 } else 
 {
    m.classList.add("displayNone");
 }
//            m.addEventListener("click", modifyText, false); 
} 



//function mobileMenu__collapse(){
//    alert("It works1!");
//     if(window.innerWidth<=768){
//        let x = document.querySelector("nav ul .nav__links");
//        x.classList.add("displayNone");
//         alert("It works!");
//    }
//}
//
//mainNavLinks.forEach(function(el){
//    el.addEventListener("click", mobileMenu__collapse(), false);
//}
//);
