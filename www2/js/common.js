var windowH = window.innerHeight;
function fullPage(windowH){
    document.getElementById("fullPage").style.height = windowH+'px';
}
$(document).ready(function(){
    fullPage(windowH);
});
$(window).resize(function(){
    fullPage(windowH);
});

function pageUp(){
    window.scrollBy(0, windowH); 
}

function pageDown(){
    window.scrollBy(0, -windowH); 
}

window.addEventListener('wheel',function(e){
    console.log(e.deltaY)
    if(e.deltaY > 0){
        pageUp()
    }else{
        pageDown()
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