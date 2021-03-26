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


  const youtube = document.querySelector('.textytb')
  const albums = document.querySelector('.albums')

  youtube.ScrollTrigger(function() {
    gsap.timeline( scrollTrigger: {
      start: 'bottom bottom',
      trigger: section,
      .from('.textytb',{y: '100'})
      .from('.youtube', {y:'100', opacity: '0', delay: '1'})
       })
    });

  albums.ScrollTrigger(function(){
    gsap.timeline()
    .from('.albums', {y: '100', opacity: '-5'})
    .from('.btn_album', {y: '100', opacity: '-100', delay: '1'})
  })


 


