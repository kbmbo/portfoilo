var windowH, header, mainBottom

function fullPageH(){
    windowH = window.innerHeight;
    document.getElementById("fullPage").style.height = windowH +'px';
}

function fullPageS(e){
    windowH = window.innerHeight;
    header = document.getElementsByTagName('header')[0];
    mainBottom = document.getElementById("fullPage").getBoundingClientRect().bottom;
    e.preventDefault();
    if(e.deltaY > 0 && mainBottom == windowH){
        window.scrollBy(0, windowH);
        header.classList.add('subNav');
        document.getElementById('portfolio').classList.add('navT');
    } else if(e.deltaY < 0 && mainBottom > 15){
        window.scrollTo(0,0);
        header.classList.remove('subNav');
        
    } else if(e.deltaY < 0){
        removeNavT()
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
        return false
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


window.addEventListener('touchstart', function (e) {
    e.preventDefault();
});
window.addEventListener('touchmove', function (e) {
    e.preventDefault();
});
window.addEventListener('touchend', function (e){
    windowH = window.innerHeight;
    header = document.getElementsByTagName('header')[0];
    mainBottom = document.getElementById("fullPage").getBoundingClientRect().bottom;
    let pY = e.changedTouches[0].pageY;

    if(pY < targetBottom) {
        window.scrollTo(0, windowH);
        header.classList.add('subNav');
    } else if(pY > targetBottom && 0 < targetBottom) {
        window.scrollTo(0,0);
        header.classList.remove('subNav');
    }
});


