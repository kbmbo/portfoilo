document.addEventListener("DOMContentLoaded", () => {
    const fullPage = document.getElementById("fullPage");
    const menuList = document.querySelector('.menuList');
    const mobBtn = document.querySelector('.mNav');
    const header = document.getElementsByTagName('header')[0];
    const dim = document.querySelector('.dim');

    let windowH

    const fullPageH = () => {
        windowH = window.innerHeight;
        fullPage.style.height = `${windowH}px`;
    }
    fullPageH();

    const fullPageS = e => {
        const mainBottom = fullPage.getBoundingClientRect().bottom;
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
        //ani(e);
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
    
    const ani = (e) => {
        
        const aniEl = document.querySelectorAll('.ani');
        windowH = window.innerHeight;
        // for (const i in aniEl) {
        //     console.log(aniEl)
        // }
        aniEl.forEach( a => {
            console.log(window.pageYOffset+a.getBoundingClientRect().top , a.getBoundingClientRect().top)
            
            if(windowH-100 > a.getBoundingClientRect().top){
                a.classList.add(a.dataset.animated);
            } else if(windowH-100 <= a.getBoundingClientRect().top){
                a.classList.remove(a.dataset.animated);
            }
            // setTimeout(function(){
            //     a.classList.add(a.dataset.animated);
            // },500);
        })
    }
    window.addEventListener('wheel', e => {
        fullPageS(e);
        //ani(e);
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
    
    //window.addEventListener('touchstart', () => {
        //window.pageYOffset == 0 ? header.classList.remove('subNav') : null;
    //});
    
    window.addEventListener('touchmove', e => {
        dim == e.touches[0].target ? removeClass() : null;
        window.scrollY > 0 ? header.classList.add('subNav') : header.classList.remove('subNav');
    });
    
    //window.addEventListener('touchend', () => {
        //window.scrollY > 100 ? header.classList.add('subNav') : header.classList.remove('subNav');
    //});
    
});

window.addEventListener('load', () => {
    window.history.scrollRestoration = 'manual';
    setTimeout(window.scrollTo(0,0),300);
});