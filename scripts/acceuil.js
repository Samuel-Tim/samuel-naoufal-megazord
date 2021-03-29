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

gsap.timeline({
        scrollTrigger: {
          trigger: '.yt',
          toggleActions: 'restart complete reverse reset',
        } 
      })
    .from('.titre-yt',{x: '-100%'})
    .from('.youtube', {opacity: '0', y: '100%', delay:'1'});

    gsap.timeline({
        scrollTrigger: {
        trigger: '.membres-du-grp',
        toggleActions: 'restart complete reverse reset',
          }
    })
        .from('.card', {opacity: '0'}) 
        .from('.card-body',{fontSize: '30px'} )
        .from('.c_img',{scale:'0.5'} );

    gsap.timeline({
        scrollTrigger: {
        trigger: '.Images-promotionnelles',
        toggleActions: 'restart complete reverse reset',
        }
    })
            
        .from('.Images-promotionnelles', {opacity: '0'})
        .from('.swiper-container', {x: '100%'})
        .from('.swiper-pagination', {rotate:'90deg' , delay:'0.5'});