const swiper = new Swiper('.swiper-container', {
    autoplay:{delay: 2000},
    direction: 'vertical',
     loop: true,
     speed: 400,
     effect:'cube',
     freeMode: true,
     
     cubeEffect: {
       slideShadows: true,
     }
     
    });


gsap.registerPlugin(ScrollTrigger);

const bannerList =

document.querySelectorAll('banner');

bannerList.forEach(banner => {
  const albums = banner.querySelector('albums');
  const youtube = banner.querySelector('youtube');


  gsap.timeline({
    scrollTrigger: {
      start:'bottom bottom',
      trigger: banner,
    }
  })
  .from(albums, {
    y:100,
    opacity:0
  })
  .from(youtube, {
    opacity: 0
  })
});




