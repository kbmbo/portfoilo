document.addEventListener("DOMContentLoaded", () => {
    
    const menuList = document.querySelector('.menuList');
    const mobBtn = document.querySelector('.mNav');
    const header = document.getElementsByTagName('header')[0];
    const dim = document.querySelector('.dim');

    let windowH

    window.scrollTo(0,0);

    const fullPageH = () => {
        windowH = window.innerHeight;
        document.getElementById("fullPage").style.height = windowH +'px';
    }
    fullPageH();

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
    
    const ani = e => {
        windowH = window.innerHeight/2
        const aniBox = document.querySelectorAll(".aniBox");
        // for(let i = 0; i < aniBox.length; i++){
        //     console.log((aniBox[i].getBoundingClientRect().top),windowH);
        // }
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
    
});

window.addEventListener('load', () =>{
    setTimeout(window.scrollTo(0,0),300)
});
window.addEventListener('beforeunload', (e) => { 
    e.preventDefault(); 
    //e.returnValue = '';
    setTimeout(window.scrollTo(0,0),300)
});
