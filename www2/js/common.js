let windowH

function fullPageH(){
    windowH = window.innerHeight;
    document.getElementById("fullPage").style.height = windowH +'px';
}
function fullPageS(e){
    windowH = window.innerHeight;
    const header = document.getElementsByTagName('header')[0];
    if(e.deltaY > 0){
        window.scrollBy(0, windowH);
        header.classList.add('subNav');
        
    }else{
        window.scrollBy(0, -windowH);
        header.classList.remove('subNav');
        
    }
}
document.addEventListener("DOMContentLoaded", function(){
    fullPageH();
    window.scrollTo(0,0);
});
window.addEventListener('resize', function(){
    fullPageH();
});
window.addEventListener('wheel',function(e){
    fullPageS(e);
});
let pY
// window.addEventListener('touchstart', function (event){
//     event.preventDefault();
// });
// window.addEventListener('touchmove', function (event){
//     event.preventDefault();
// });
window.addEventListener('touchend', function (event){
    pY = event.changedTouches[0].pageY;
    const targetBottom = document.getElementById("fullPage").getBoundingClientRect().bottom;
    const header = document.getElementsByTagName('header')[0];
    if(pY<targetBottom){
        window.scrollTo(0, windowH);
        header.classList.add('subNav');
        console.log(header);
    } else if(pY>targetBottom && 0<targetBottom){
        window.scrollTo(0,0);
        header.classList.remove('subNav');
    }
});