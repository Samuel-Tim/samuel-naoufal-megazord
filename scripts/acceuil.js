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

    const questionList = [
  
      {   
        q: "Combien d'album les Black Eyed Peas ont sortis ? ",
        o1: "12",
        o2: "5",
        o3: "8",
        o4: "15",
        r: 3
      }
      ,
      {
        q: "Vrai ou faux, le groupe est toujours composé de 4 membres actuellement ?",
        o1: "Vrai",
        o2: "Faux",
        r: 2
      }
      ,
      {
        q: " Combien le groupe a-t'il d'abonnés sur leur compte instagram ?",
        o1: "1M",
        o2: "871K",
        r: 2
      }
      ,
      {
        q: "Quel est le nom de leur dernier album ?",
        o1: "Elephunk",
        o2: "Monkey Business",
        o3: "Translation",
        r: 3
      }
      ,
      {
        q: "Combien d'abonnés a le groupe sur youtube ?",
        o1: "10M",
        o2: "20M",
        o3: "5M",
        o4:"35M",
        r: 1
      }
      ,
      {
        q: "Quel est le nom de leur premier album ?",
        o1: "Bridging The Gap",
        o2: "The E.N.D.",
        o3: "Behind The Front",
        r: 3
      }
      ,
      {
        q: " Vrai ou faux, le groupe a été créer en 1995 ?",
        o1: "Vrai",
        o2: "Faux",
        r: 1
      }
      ,
      {
        q: "Le vidéoclip Boom Boom Pow à combien de vues sur youtube ?",
        o1: "100M",
        o2: "500M",
        o3: "20M",
        o4:"400M",
        r: 4
      }
      ,
      ];
      
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
            q.classList.remove("is-visible");
            divq[number].classList.add("is-visible");
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
                if (this.index < this.questionList.length) {
                  this.index++;
                  this.setVisible(this.index);
                }
              }
            });
          });
        }
        goodAnswer() {
      
        }
    
        wrongAnswer() {
          const animation = document.querySelector('.animation');
    
    
      gsap.fromTo('.animation', 
        { opacity: '0%' }, 
        { opacity: '100%',
        duration:1.4,
        }        
      );
      
    gsap.fromTo('.animation', 
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