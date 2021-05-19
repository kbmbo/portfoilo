let windowH
function fullPage(windowH){
    windowH = window.innerHeight+'px';
    document.querySelector(".fullPage").style.height = windowH;
}
$(document).ready(function(){
    fullPage(windowH);
});
$(window).resize(function(){
    fullPage(windowH);
});