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

    gsap.to('.animation_sprite', {
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

//----------------------------------------------------------

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
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
});


//-------------------------------------------------

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
      document.body.appendChild(this.div);
  
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
            } else {
              this.score--;
              if(this.score == -1) { this.score = 0 }
              console.log("Mauvaise réponse: pointage " + this.score);
            }
            if (this.index < this.questionList.length) {
              this.index++;
              this.setVisible(this.index);
            }
          }
        });
      });
    }
  }
  new Quiz(questionList);
