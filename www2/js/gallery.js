document.addEventListener("DOMContentLoaded", () => {
    let filterList = ["all","javascript","react","vue","work"];
    let galleryList = [
        {filter:"javascript",url:"",img:"./img/portfolio/1.jpg",tit:"타이틀",txt:"개졸려토나와"},
        {filter:"javascript",url:"",img:"./img/portfolio/1.jpg",tit:"타이틀",txt:"개졸려토나와"},
        {filter:"react",url:"",img:"./img/portfolio/2.jpg",tit:"타이틀",txt:"개졸려토나와"},
        {filter:"work",url:"",img:"./img/portfolio/4.jpg",tit:"타이틀",txt:"개졸려토나와"},
        {filter:"vue",url:"",img:"./img/portfolio/3.jpg",tit:"타이틀",txt:"개졸려토나와"},
        {filter:"react",url:"",img:"./img/portfolio/2.jpg",tit:"타이틀",txt:"개졸려토나와"},
        {filter:"work",url:"",img:"./img/portfolio/4.jpg",tit:"타이틀",txt:"개졸려토나와"},
        {filter:"work",url:"",img:"./img/portfolio/4.jpg",tit:"타이틀",txt:"개졸려토나와"}
    ];

    const galleryCont = document.querySelector('.gallery-container');

    filterList.forEach( t => {
        galleryCont.querySelector('.filterList').insertAdjacentHTML('beforeend', `<li type="button" data-filter="${t}">${t}</li>`);
    })
    galleryList.forEach( g => {
        galleryCont.querySelector('.gallery-list').insertAdjacentHTML('beforeend', `<figure class="animated galleryCon all ${g.filter}">
            <div class="img" style="background-image:url('${g.img}')"></div>
            <figcaption>
                <h4>${g.filter}</h4>
                <p>${g.tit}</p>
                <span type="button" onclick="window.open('${g.url}')" class="none" >${g.txt}</span>
            </figcaption>
        </figure>`);
    })
    const gallery = function(){
        const filterBtn = document.querySelectorAll('.filterList li');
        const galleryCon = document.querySelectorAll('.galleryCon');
        filterBtn[0].classList.add('active');
        filterBtn.forEach( b => b.addEventListener('click', e => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            filterBtn.forEach( b => {
                b.classList.remove('active');
            })
            e.target.classList.add('active');
            galleryCon.forEach( i => {
                if(filter === 'all'){
                    i.classList.add('zoomIn');
                    i.classList.remove('fadeOutDown','none');
                }else{
                    i.classList.add('fadeOutDown');
                    setTimeout(function(){
                        i.classList.add('none');
                        if(i.classList.contains(filter)){
                            i.classList.add('zoomIn');
                            i.classList.remove('fadeOutDown','none');
                        } 
                    },500);
                }
            })
        }))
    }
    gallery();
});