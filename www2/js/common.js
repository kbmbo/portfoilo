var windowH
function fullPageH(){
    windowH = window.innerHeight;
    document.getElementById("fullPage").style.height = windowH +'px';
}
function fullPageS(e){
    windowH = window.innerHeight;
    if(e.deltaY > 0){
        window.scrollBy(0, windowH);
        document.querySelector('header').classList.add('subNav');
        
    }else{
        window.scrollBy(0, -windowH);
        document.querySelector('header').classList.remove('subNav');
        
    }
}
document.addEventListener("DOMContentLoaded", function(){
    fullPageH();
    //console.log(document.documentElement.scrollTop)
});
window.addEventListener('resize', function(){
    fullPageH();
});
window.addEventListener('wheel',function(e){
    fullPageS(e);
});

// window.addEventListener('touchstart', function (e){
//     fullPageS(e);
// });


window.addEventListener('touchend', function (){
    var targetBottom = document.getElementById("fullPage").getBoundingClientRect().bottom;
    windowH = window.innerHeight;
    console.log(window.pageYOffset+'/'+targetBottom+'/'+windowH);
    // if(window.pageYOffset > 0){
    //     window.scrollTo(0, windowH);
        
    // }
    if(targetBottom > 0){
        window.scrollTo(0, -windowH);
    }
});