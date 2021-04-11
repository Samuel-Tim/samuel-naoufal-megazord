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


  const youtube = document.querySelector('.textytb')
  const albums = document.querySelector('.albums')
  const pied = document.querySelector('.pied')
    gsap.timeline({
      scrollTrigger: {
        trigger: '.textytb',
        toggleActions: 'restart complete reverse reset',
      } 
    })
      .from('.textytb',{y: '100'})
      .from('.youtube', {y:'100', opacity: '0', delay: '1'});

    gsap.timeline({
      scrollTrigger: {
        trigger: '.btn_album',
        toggleActions: 'restart complete reverse reset',
      }
    })
    .from('.albums', {y: '100', opacity: '0'})
    .from('.btn_album', {y: '100', opacity: '-100', delay: '1',});

    gsap.timeline({
      scrollTrigger: {
        trigger: '.pied',
        toggleActions: 'restart complete reverse reset',
      }
    })
    .from('.pied', {y:'100', opacity: '0',});


    gsap.registerPlugin(ScrollTrigger);

    let timeout;
    let body = document.body;
    const animation = document.querySelector('.animation')

    gsap.to('.animation', {
    scrollTrigger: {
    scrub: true,
    trigger: '.main',
    onUpdate: (e) => {
      body.classList.add('is-scrolling');
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        body.classList.remove('is-scrolling');
      }, 300)
      
      if(e.direction == 1) {
        body.classList.add('direction-down');
        body.classList.remove('direction-up');
      } 
      if(e.direction == -1) {
        body.classList.remove('direction-down');
        body.classList.add('direction-up');
      }
    }
  }
})
 


