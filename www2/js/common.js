var windowH
var menuList = document.querySelector('.menuList');
var mobBtn = document.querySelector('.mNav');
var header = document.getElementsByTagName('header')[0];
var dim = document.querySelector('.dim');
function fullPageH(){
    windowH = window.innerHeight;
    document.getElementById("fullPage").style.height = windowH +'px';
}

function fullPageS(e){
    var mainBottom = document.getElementById("fullPage").getBoundingClientRect().bottom;
    windowH = window.innerHeight;
    if(e.deltaY > 0 && mainBottom == windowH){
        window.scrollTo(0, mainBottom);
        header.classList.add('subNav');
    } else if(e.deltaY < 0 && mainBottom > 5){
        window.scrollTo(0,0);
        header.classList.remove('subNav');
    }
    if(mobBtn.classList.contains('on')){
        removeClass()
    }
}

function navlink(e){
    let scroll = e.target.dataset.scroll;
    let scrollY = window.pageYOffset + document.getElementById(scroll).getBoundingClientRect().top;
    if(scrollY != 0){
        header.classList.add('subNav');
        window.scrollTo(0,scrollY);
    } else {
        window.scrollTo(0,0);
        header.classList.remove('subNav');
    }
    removeClass()
}

function removeClass(){
    mobBtn.classList.remove('on');
    menuList.classList.remove('down');
    dim.classList.remove('dimOn');
}

function mNav(){
    if(!mobBtn.classList.contains('on')){
        mobBtn.classList.add('on');
        menuList.classList.add('down');
        dim.classList.add('dimOn');
        header.classList.add('subNav');
    } else {
        removeClass()
        window.pageYOffset == 0 ? header.classList.remove('subNav') : null;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    fullPageH();
    const tabItem = document.querySelectorAll(".tapBtn");
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

window.onload = function (){
    setTimeout(window.scrollTo(0,0),300)
}
// window.onbeforeunload = function() {
    
// };
window.addEventListener('wheel', e => {
    fullPageS(e);
});
document.addEventListener("click", e => {
    null != e.target.dataset.scroll ? navlink(e) : null;
    //mobBtn == e.target.parentElement ? mNav() : null;
    dim == e.target ? removeClass() : null;
});
mobBtn.addEventListener("click", e => {
    e.preventDefault();
    mNav()
});
window.addEventListener('resize', function() {
    fullPageH();
});
// window.addEventListener('touchstart', function () {
//     window.pageYOffset == 0 ? header.classList.remove('subNav') : null;
// });
window.addEventListener('touchmove', function (e) {
    dim == e.touches[0].target ? removeClass() : null;
    window.pageYOffset > 0 ? header.classList.add('subNav') : header.classList.remove('subNav');
});
// window.addEventListener('touchend', function (e){
//     e.preventDefault();
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