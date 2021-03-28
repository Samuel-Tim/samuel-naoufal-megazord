var swiper = new Swiper('.swiper-container', {
    speed: 400,
    spacebetween:100,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletActiveClass: 'bullet-active',
        },
  });

gsap.registerPlugin(ScrollTrigger);

const imgpromo = document.querySelector('.images-promotionelles');
const grp = document.querySelector('.membres-du-grp');
const yt = document.querySelector('.yt');

yt.addEventListener('click', function() {
gsap.timeline()
    .from('.titre-yt',{x: '-100%'})
    .from('.youtube', {opacity: '0', y: '100%'})
});

grp.addEventListener('click', function() {
    gsap.timeline()
        .from('.card', {opacity: '0'}) 
        .from('.card-body',{fontSize: '30px'} )
        .from('.c_img',{scale:'0.5'} )
    });

imgpromo.addEventListener('click', function() {
        gsap.timeline()
            .from('.promo_1',{skewx: '10deg'})
            .from('.swiper-container', {opacity: '0'})
        });