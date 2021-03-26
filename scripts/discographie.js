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

const sectionList =

document.querySelectorAll('section');

sectionList.forEach(section => {
  const albums = section.querySelector('albums');
  const youtube = section.querySelector('youtube');
  const text = section.querySelector('textytb');


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
  .from(textytb,{
    y:50,
    opacity:0
  })
});




