var windowH, header, mainBottom

function fullPageH(){
    windowH = window.innerHeight;
    document.getElementById("fullPage").style.height = windowH +'px';
}

function fullPageS(e){
    windowH = window.innerHeight;
    header = document.getElementsByTagName('header')[0];
    mainBottom = document.getElementById("fullPage").getBoundingClientRect().bottom;
    if(e.deltaY > 0 && mainBottom == windowH){
        window.scrollTo(0, mainBottom);
        header.classList.add('subNav');
        document.getElementById('portfolio').classList.add('navT');
    } else if(e.deltaY < 0 && mainBottom > 15){
        window.scrollTo(0,0);
        header.classList.remove('subNav');
        
    } else if(e.deltaY < 0){
        removeNavT()
    } else{
        return
    }
}
function navScroll(e){
    const scroll = e.target.dataset.scroll;
    if(scroll != null){
        let scrollTo = document.getElementById(scroll);
        let scrollY = window.pageYOffset + scrollTo.getBoundingClientRect().top
        header = document.getElementsByTagName('header')[0];
        if(scrollY != 0){
            header.classList.add('subNav');
            removeNavT()
            scrollTo.classList.add('navT');
            scrollTo.scrollIntoView({ behavior: "smooth" });
        } else {
            header.classList.remove('subNav');
            scrollTo.scrollIntoView({ behavior: "smooth" });
        }
    } else{
        return
    }
}
function removeNavT(){
    const section = document.querySelectorAll("section");
    for(let i =0; i < section.length; i++){
        section[i].classList.remove('navT');
    }
}
document.addEventListener("DOMContentLoaded", function() {
    fullPageH();
    const tabItem = document.querySelectorAll(".tapBtn");
    console.log(screen.width)
    if(screen.width <= 428) {
        console.log(document.querySelector('.menu-list').getBoundingClientRect().height);
    }
    // const tabContent = document.querySelectorAll(".galleryCon");
    // let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)
    for(let i = 0; i < tabItem.length; i++){
        tabItem[i].addEventListener('click', function(e){
        e.preventDefault();
        for(let j = 0; j < tabItem.length; j++){
            // 나머지 버튼 클래스 제거
            tabItem[j].classList.remove('active');
        }

        // 버튼 관련 이벤트
        this.classList.add('active');

        // 버튼 클릭시 컨텐츠 전환
        //   activeCont = this.getAttribute('href');
        //   document.querySelector(activeCont).style.display = 'block';
        });
    }
    
});
function changeOrientation(event) {
    alert("Rotate");
    event.preventDefault();
}
window.onload = function (){
    window.scrollTo(0,0);
}
window.onbeforeunload = function() {
    window.scrollTo(0,0);
};
window.addEventListener('wheel',function(e) {
    fullPageS(e);
});
document.addEventListener("click", (e) => {
    navScroll(e)
});

window.addEventListener('resize', function() {
    fullPageH();
});


// window.addEventListener('touchstart', function (e) {
//     e.preventDefault();
// });
// window.addEventListener('touchmove', function (e) {
//     e.preventDefault();
// });
// window.addEventListener('touchend', function (e){
//     windowH = window.innerHeight;
//     header = document.getElementsByTagName('header')[0];
//     mainBottom = document.getElementById("fullPage").getBoundingClientRect().bottom;
//     let pY = e.changedTouches[0].pageY;
//     if(pY < mainBottom) {
//         window.scrollTo(0, windowH);
//         header.classList.add('subNav');
//         document.getElementById('portfolio').classList.add('navT');
//     } else if(pY > mainBottom && 0 < mainBottom) {
//         window.scrollTo(0,0);
//         header.classList.remove('subNav');
//     } else if(pY > mainBottom) {
//         removeNavT()
//     } else{
//         return false
//     }
// });

// HTML CSS JSResult Skip Results Iframe
// EDIT ON
// let slideUp = (target, duration=500) => {
//     target.style.transitionProperty = 'height, margin, padding';
//     target.style.transitionDuration = duration + 'ms';
//     target.style.boxSizing = 'border-box';
//     target.style.height = target.offsetHeight + 'px';
//     target.offsetHeight;
//     target.style.overflow = 'hidden';
//     target.style.height = 0;
//     target.style.paddingTop = 0;
//     target.style.paddingBottom = 0;
//     target.style.marginTop = 0;
//     target.style.marginBottom = 0;
//     window.setTimeout( () => {
//       target.style.display = 'none';
//       target.style.removeProperty('height');
//       target.style.removeProperty('padding-top');
//       target.style.removeProperty('padding-bottom');
//       target.style.removeProperty('margin-top');
//       target.style.removeProperty('margin-bottom');
//       target.style.removeProperty('overflow');
//       target.style.removeProperty('transition-duration');
//       target.style.removeProperty('transition-property');
//       //alert("!");
//     }, duration);
//   }
// let slideDown = (target, duration=500) => {
//     target.style.removeProperty('display');
//     let display = window.getComputedStyle(target).display;

//     if (display === 'none')
//       display = 'block';

//     target.style.display = display;
//     let height = target.offsetHeight;
//     target.style.overflow = 'hidden';
//     target.style.height = 0;
//     target.style.paddingTop = 0;
//     target.style.paddingBottom = 0;
//     target.style.marginTop = 0;
//     target.style.marginBottom = 0;
//     target.offsetHeight;
//     target.style.boxSizing = 'border-box';
//     target.style.transitionProperty = "height, margin, padding";
//     target.style.transitionDuration = duration + 'ms';
//     target.style.height = height + 'px';
//     target.style.removeProperty('padding-top');
//     target.style.removeProperty('padding-bottom');
//     target.style.removeProperty('margin-top');
//     target.style.removeProperty('margin-bottom');
//     window.setTimeout( () => {
//       target.style.removeProperty('height');
//       target.style.removeProperty('overflow');
//       target.style.removeProperty('transition-duration');
//       target.style.removeProperty('transition-property');
//     }, duration);
//   }
// let slideToggle = (target, duration = 500) => {
//   if (window.getComputedStyle(target).display === 'none') {
//     return slideDown(target, duration);
//   } else {
//     return slideUp(target, duration);
//   }
// }
   
// // ====  
  
// let speedAnimation = 400;
// let targetId = document.getElementById("target");

// let slideBtnClick = (cl, sl) => 
// document.querySelector(cl).addEventListener('click', () => sl(targetId, speedAnimation));



// slideBtnClick('.triggerToggle', slideToggle);




// Resources1× 0.5× 0.25×Rerun
