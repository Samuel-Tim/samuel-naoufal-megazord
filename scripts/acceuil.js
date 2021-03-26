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

