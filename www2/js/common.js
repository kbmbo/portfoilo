const menuList = document.querySelector('.menuList');
const mobBtn = document.querySelector('.mNav');
const header = document.getElementsByTagName('header')[0];
const dim = document.querySelector('.dim');

let windowH

const fullPageH = () => {
    windowH = window.innerHeight;
    document.getElementById("fullPage").style.height = windowH +'px';
}

const fullPageS = e => {
    const mainBottom = document.getElementById("fullPage").getBoundingClientRect().bottom;
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

const navlink = e => {
    const scroll = e.target.dataset.scroll;
    const scrollY = window.pageYOffset + document.getElementById(scroll).getBoundingClientRect().top;
    if(scrollY != 0){
        header.classList.add('subNav');
        window.scrollTo(0,scrollY);
    } else {
        window.scrollTo(0,0);
        header.classList.remove('subNav');
    }
    removeClass();
}

const removeClass = () => {
    mobBtn.classList.remove('on');
    menuList.classList.remove('down');
    dim.classList.remove('dimOn');
}

const mNav = () => {
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

const filterBtn = function(){
    const button = document.querySelectorAll('.tabBtn');
    const storeItems = document.querySelectorAll('.galleryCon');
    
    button.forEach(b=>b.addEventListener('click',(e)=>{
        e.preventDefault()
        const filter = e.target.dataset.filter

        storeItems.forEach(i=>{
            if(filter ==='all'){
                i.classList.remove('none');

            }else{
                if(i.classList.contains(filter)){
                    i.classList.remove('none');
                }
                else{
                    i.classList.add('none');
                }
            }
        })
    })
)
}
// const tabList = document.querySelectorAll('.tab_menu .list li');
//   const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
//   let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

//   for(var i = 0; i < tabList.length; i++){
//     tabList[i].querySelector('.btn').addEventListener('click', function(e){
//       e.preventDefault();
//       for(var j = 0; j < tabList.length; j++){
//         // 나머지 버튼 클래스 제거
//         tabList[j].classList.remove('is_on');

//         // 나머지 컨텐츠 display:none 처리
//         contents[j].style.display = 'none';
//       }

//       // 버튼 관련 이벤트
//       this.parentNode.classList.add('is_on');

//       // 버튼 클릭시 컨텐츠 전환
//       activeCont = this.getAttribute('href');
//       document.querySelector(activeCont).style.display = 'block';
//     });
//   }
const ani = e => {
    windowH = window.innerHeight/2
    const aniBox = document.querySelectorAll(".aniBox");
    // for(let i = 0; i < aniBox.length; i++){
    //     console.log((aniBox[i].getBoundingClientRect().top),windowH);
    // }
}

document.addEventListener("DOMContentLoaded", () => {
    fullPageH();
});

window.onload = () => {
    setTimeout(window.scrollTo(0,0),300)
    filterBtn();
}

window.addEventListener('wheel', e => {
    fullPageS(e);
    ani()
});

document.addEventListener("click", e => {
    null != e.target.dataset.scroll ? navlink(e) : null;
    dim == e.target ? removeClass() : null;
});

mobBtn.addEventListener("click", e => {
    e.preventDefault();
    mNav()
});

window.addEventListener('resize', () => {
    fullPageH();
});

// window.addEventListener('touchstart', function () {
//     window.pageYOffset == 0 ? header.classList.remove('subNav') : null;
// });

window.addEventListener('touchmove', e =>{
    dim == e.touches[0].target ? removeClass() : null;
    window.pageYOffset > 0 ? header.classList.add('subNav') : header.classList.remove('subNav');
});

// window.addEventListener('touchend', function (e){
//     e.preventDefault();
// });
