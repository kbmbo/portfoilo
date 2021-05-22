var windowH 
function fullPage(windowH){
    windowH = window.innerHeight;
    document.getElementById("fullPage").style.height = windowH +'px';
}
$(document).ready(function(){
    fullPage(windowH);
});
$(window).resize(function(){
    fullPage(windowH);
});
window.addEventListener('wheel',function(e){
    windowH = window.innerHeight;
    if(e.deltaY > 0){
        window.scrollBy(0, windowH); 
    }else{
        window.scrollBy(0, -windowH); 
    }

})

// $(window).bind('wheel DOMMouseScroll', function(event){
//     var scTop = window.scrollTo();
//     if (event.originalEvent.wheelDelta >= 0) {
//         // scroll up
//         console.log("스크롤 위로");
        
//     }
//     else {
        
//         // scroll down
//         if(scTop > 0){
           
//         }
//     }
// });