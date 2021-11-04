document.addEventListener("DOMContentLoaded", () => {
    
    const filterList = ["all","javascript","react","vue","work"];
    const galleryList = [
        {filter:"javascript",url:"https://kbmbo.github.io/portfoilo/javascript/slide/slide.html",img:"./img/portfolio/slide.png",tit:"loop slide",txt:"무한 루프 반응형 슬라이드 입니다. 모바일 touch 슬라이드도 가능합니다. (javascriptES6)"},
        {filter:"javascript",url:"https://kbmbo.github.io/portfoilo/javascript/banner/",img:"./img/portfolio/banner.png",tit:"banner",txt:"간단한 touch event가 작업된 배너입니다. (javascriptES6)"},
        {filter:"react",url:"",img:"",tit:"준비중",txt:"갤러리 필터 테스트용 입니다."},
        {filter:"react",url:"",img:"./img/portfolio/2.jpg",tit:"준비중",txt:"갤러리 필터 테스트용 입니다."},
        {filter:"work",url:"https://kbmbo.github.io/portfoilo/work/ahnlabADS/",img:"./img/portfolio/ahnlabADS.jpg",tit:"안랩 광고주페이지",txt:"템플릿을 기반으로 클라이언트의 요청에 맞춰 마크업과 jquery를 작업한 안랩 광고주페이지 입니다. (jquery)"},
        {filter:"work",url:"https://mobtrend.net/",img:"./img/portfolio/mobtaend.jpg",tit:"기사통합 포털사이트",txt:"매체사별 인기기사와 카테고리별, 키워드별로 기사순위를 보여주는 사이트입니다. (jquery)"},
        {filter:"work",url:"https://kbmbo.github.io/portfoilo/work/pointgrab/",img:"./img/portfolio/pointgrab.png",tit:"포인트몰 모바일 웹",txt:"포인트적립과 할인쿠폰 이벤트를 통해 구매 적립 할수있는 모바일웹입니다. (jquery)"},
        {filter:"work",url:"https://kbmbo.github.io/portfoilo/work/camp_app/",img:"./img/portfolio/camp_app.png",tit:"캠프광고주 모바일웹",txt:"광고주가 캠프(채팅&커뮤니티앱)앱에 올라가는 광고를 관리하는 모바일웹 페이지입니다. (jquery)"},
        {filter:"work",url:"https://store.camptok.com/event/index",img:"./img/portfolio/camp_store.jpg",tit:"캠프스토어 소개",txt:"캠프 스토어(이모티콘 등록 판매)를 소개하는 페이지입니다. (jquery)"}
    ];
    const galleryContainer = document.querySelector('.gallery-container');
    const filterCon = galleryContainer.querySelector('.filterList');
    const galleryCon = galleryContainer.querySelector('.galleryList');

    filterList.forEach( t => {
        filterCon.insertAdjacentHTML('beforeend', `<li type="button" data-filter="${t}">${t}</li>`);
    })

    galleryList.forEach( g => {
        const http = new XMLHttpRequest();
        http.open('GET', g.img, false);
        http.send(null);
        if( g.img === null || g.img === undefined || g.img === '' || http.status === 404){
            return null;
        } else {
            galleryCon.insertAdjacentHTML('beforeend', `<figure class="animated all ${g.filter}">
                <div class="img" style="background-image:url('${g.img}')"></div>
                <figcaption>
                    <h4>${g.tit}</h4>
                    <p>${g.filter}</p>
                    <span type="button" onclick="window.open('${g.url}')">${g.txt} <span>click!</span></span>
                </figcaption>
            </figure>`);
        }
    })

    const gallery = () => {
        const filterBtn = filterCon.children;
        const galleryConChild = galleryCon.children;
        const popup = document.querySelector('.popup');
        filterBtn[0].classList.add('active');
        Array.from(filterBtn).forEach( b => b.addEventListener('click', e => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            Array.from(filterBtn).forEach( b => {
                b.classList.remove('active');
            })
            e.target.classList.add('active');
            Array.from(galleryConChild).forEach( i => {
                
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

        Array.from(galleryConChild).forEach( p => p.addEventListener('click', () => {
            if(popup.classList.contains('none')){
                popup.classList.remove('none');
                popup.insertAdjacentHTML('afterbegin', p.outerHTML);
            } 
        }))

        popup.addEventListener('click', e => {
            if(e.target === popup){
                popup.classList.add('none');
                popup.innerHTML='';
            }
        });

    }
    gallery();

});