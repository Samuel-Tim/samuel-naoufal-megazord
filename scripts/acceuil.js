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

    
      
      class Quiz {
        constructor(tableau) {
          this.index = 0;
          this.score = 0;
          this.questionList = tableau;
          this.questionList.forEach((question, value) => {
            this.creerHtml(question, value + 1);
          });
          this.setVisible(this.index);
          this.answers();
        }
        creerHtml(q, value) {
          this.div = document.createElement("div");
          this.div.classList.add("question");
          const modalbody= document.querySelector('#Quiz .modal-body');
          modalbody.appendChild(this.div);
      
          this.strong = document.createElement("strong");
          this.strong.innerText = q.q;
          this.div.appendChild(this.strong);
      
          this.br = document.createElement("br");
          this.div.appendChild(this.br);
      
          if ("o1" in q) {
            let radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "question" + value);
            radio.setAttribute("value", "1");
            this.div.appendChild(radio);
      
            let label = document.createElement("label");
            label.innerText = q.o1;
            this.div.appendChild(label);
      
            this.br = document.createElement("br");
            this.div.appendChild(this.br);
          }
      
          if ("o2" in q) {
            let radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "question" + value);
            radio.setAttribute("value", "2");
            this.div.appendChild(radio);
      
            let label = document.createElement("label");
            label.innerText = q.o2;
            this.div.appendChild(label);
      
            this.br = document.createElement("br");
            this.div.appendChild(this.br);
          }
      
          if ("o3" in q) {
            let radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "question" + value);
            radio.setAttribute("value", "3");
            this.div.appendChild(radio);
      
            let label = document.createElement("label");
            label.innerText = q.o3;
            this.div.appendChild(label);
      
            this.br = document.createElement("br");
            this.div.appendChild(this.br);
          }
      
          if ("o4" in q) {
            let radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "question" + value);
            radio.setAttribute("value", "4");
            this.div.appendChild(radio);
      
            let label = document.createElement("label");
            label.innerText = q.o4;
            this.div.appendChild(label);
      
            this.br = document.createElement("br");
            this.div.appendChild(this.br);
          }
        }
        setVisible(number) {
          let divq = document.querySelectorAll(".question");
          divq.forEach((q) => {
            q.classList.remove("visible");
            divq[number].classList.add("visible");
          });
        }
        answers() {
          let reponse = document.querySelectorAll("input[type = 'radio']");
          reponse.forEach((radio) => {
            radio.addEventListener("change", () => {
              if (radio.checked) {
                if (radio.value == this.questionList[this.index].r) {
                  this.score++;
                  console.log("Bonne réponse: pointage " + this.score);
                  this.goodAnswer();
                } else {
                  this.score--;
                  if(this.score == -1) { this.score = 0 }
                  console.log("Mauvaise réponse: pointage " + this.score);
                  this.wrongAnswer();
                }
                if (this.index <= this.questionList.length - 1) {
                  if (this.index == this.questionList.length -1) {
                    this.div.innerText = `${this.score}/8`;
                    this.div.insertAdjacentHTML('afterbegin', '<strong>Pointage</strong>') ;
                  return false;
                }
                  this.index++;
                  this.setVisible(this.index); 
                }
              }
            });
          });
        }
        goodAnswer() {
          const btn = document.querySelector('.btn')



  gsap.fromTo('.anim', 
    { opacity: '0%' }, 
    { opacity: '100%', duration:1.4, }
  );


  gsap.fromTo('.anim', 
    { opacity: '100%' }, 
    { opacity: '0%', delay:2.5,onComplete: () => console.log('fini') }
  );


  gsap.fromTo('.V', 
    { rotate: '0%' }, 
    { rotate: '360', delay:0.75,}
  );



  gsap.fromTo('.txtv', 
    { fontSize: '25px' }, 
    { fontSize: '45px', x:'-15%'}
  );



  gsap.fromTo('.head', 
    { y: '-10%' }, 
    { y:'0%', ease: 'bounce'}
  );
        }
    
        wrongAnswer() {
          const animation = document.querySelector('.animation_quiz');
    
    
      gsap.fromTo('.animation_quiz', 
        { opacity: '0%' }, 
        { opacity: '100%',
        duration:1.4,
        }        
      );
      
    gsap.fromTo('.animation_quiz', 
        { opacity: '100%' }, 
        { opacity: '0%',
        delay:'2.5',
        onComplete: () => console.log('Fini')
        }
      );
    
    gsap.to('.X', {
        rotate: '360deg' ,
        duration: 2,
        delay:1,
        ease: 'easing',
      });
    
    
    
      gsap.fromTo('.text', 
        { fontSize: '25px' }, 
        { fontSize: '45px',}
      );
    
    
    
      gsap.fromTo('.william', 
        { y: '-10%' }, 
        { y:'0%',
        ease: 'bounce',}
      );
    
        }
      }
      new Quiz(questionList);