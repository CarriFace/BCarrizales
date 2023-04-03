// alert('This website is NOT responsive YET, thank you for visiting');

class optionsHover {
	constructor() {
		this.aboutMe = document.querySelector('.About-me');
		this.cyber = document.querySelector('.Cybersecurity');
		this.softwareDev = document.querySelector('.software-development');
		this.projects = document.querySelector('.projects');
		this.blog = document.querySelector('.blog');
		this.contactMe = document.querySelector('.contact-me');

		this.aboutMe.addEventListener('mouseover', this.hoverEffectActive.bind(this, '.underscore-1', '90px'));
		this.aboutMe.addEventListener('mouseleave', this.hoverEffectInactive.bind(this, '.underscore-1'));
		this.cyber.addEventListener('mouseover', this.hoverEffectActive.bind(this, '.underscore-2', '120px'));
		this.cyber.addEventListener('mouseleave', this.hoverEffectInactive.bind(this, '.underscore-2'));
		this.softwareDev.addEventListener('mouseover', this.hoverEffectActive.bind(this, '.underscore-3', '170px'));
		this.softwareDev.addEventListener('mouseleave', this.hoverEffectInactive.bind(this, '.underscore-3'));
		this.projects.addEventListener('mouseover', this.hoverEffectActive.bind(this, '.underscore-4','80px'));
		this.projects.addEventListener('mouseleave', this.hoverEffectInactive.bind(this, '.underscore-4'));
		this.contactMe.addEventListener('mouseover', this.hoverEffectActive.bind(this, '.underscore-5','85px'));
		this.contactMe.addEventListener('mouseleave', this.hoverEffectInactive.bind(this, '.underscore-5'));
		this.blog.addEventListener('mouseover', this.hoverEffectActive.bind(this, '.underscore-6', '55px'));
		this.blog.addEventListener('mouseleave', this.hoverEffectInactive.bind(this, '.underscore-6'));
	}

	hoverEffectActive(selector, value){
		document.querySelector(selector).style.width = value;
	}
	hoverEffectInactive(selector){
		document.querySelector(selector).style.width = '0';
	}
}

const hover = new optionsHover();

class BackgroundScroll {
  constructor(scrollRatio) {
    this.scrollRatio = scrollRatio;
    this.body = document.querySelector('body');
  }

  handleScroll = () => {
    const offset = window.pageYOffset;
    this.body.style.backgroundPositionY = `${offset * this.scrollRatio}px`;
  }

  start = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  stop = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }
}

// Usage:
const background = new BackgroundScroll(.8);
background.start();



class StickyHeader {
  constructor(selector) {
    this.header = document.querySelector(selector);
    this.stickyClass = 'sticky';
    this.scrollHandler = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.scrollHandler);
  }
  
  handleScroll() {
    this.header.classList.toggle(this.stickyClass, window.pageYOffset > 50);
  }
  
  destroy() {
    window.removeEventListener('scroll', this.scrollHandler);
  }
}

const myHeader = new StickyHeader('.header');



//SCROLL TO FUNCTION
function scrollToDiv(elementId) {
  const element = document.querySelector(elementId);
  const offsetTop = element.offsetTop;
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
}







class typingLetters {
  constructor() {
    this.text = "Welcome! My Name is Bryan Carrizales. I'm a tech enthusiast who has taken the steps to further my knowledge in how this crazy wireless world works. From learning how to program in various languages to understanding how cybersecurity works, and how to implement those protocols and measurements into my own projects and life. With the support and help of my family, I wanted to share my abilities in this small simple website. Feel free to contact me for any questions!";
    this.textBox = document.querySelector('.typing-letters');
    this.counter = 0;
    this.splitText = this.text.split('');


  }

  textIteration() {
    if (this.counter < this.splitText.length) {
      this.textBox.textContent += this.splitText[this.counter];
      this.counter++;
    } else {
      clearInterval(activateTyping);
    }
  }

}

const typingLettersInstance = new typingLetters();
const activateTyping = setInterval(typingLettersInstance.textIteration.bind(typingLettersInstance), 40);








class FlashText {
  constructor(element) {
    this.element = element;
    this.text = this.element.textContent;
    this.lastLetter = this.text.slice(-1);
    this.backgroundColor = '#000';
  }

  flash() {
    this.interval = setInterval(() => {
      this.backgroundColor = this.backgroundColor === '#000' ? 'transparent' : '#000';
      this.element.innerHTML = this.text.slice(0, -1) + `<span style="background-color: ${this.backgroundColor};">${this.lastLetter}</span>`;
    }, 500);
  }

  stop() {
    clearInterval(this.interval);
    this.element.textContent = this.text;
  }
}













//-----------------CYBER SECURITY CARD ROTATION--------------------------------------------------------------//

class cyberCardRotate {
    constructor(cardSelector) {
        this.card = document.querySelector(cardSelector);
        this.button = document.querySelector(cardSelector + ' .button');
        this.frontFaceCard = document.querySelector(cardSelector + ' .front-card');
        this.backFaceCard = document.querySelector(cardSelector + ' .back-card');

        this.button.addEventListener('click', this.rotation.bind(this));
        this.backFaceCard.addEventListener('click', this.rotation.bind(this));
    }

    rotation() {
        this.cardRotation();
        this.frontFaceHide();
        this.backFaceShow();
    }

    cardRotation() {
        this.card.classList.toggle('rotated');
    }

    frontFaceHide() {
        this.frontFaceCard.classList.toggle('hide');
    }

    backFaceShow() {
        this.backFaceCard.classList.toggle('show');

    }
}

const cardOneRotate = new cyberCardRotate('.card-one');
const cardTwoRotate = new cyberCardRotate('.card-two');
const cardThreeRotate = new cyberCardRotate('.card-three');
const cardFourRotate = new cyberCardRotate('.card-four');





//---------------------CAROUSEL-----------------------------------//



class carousel {
    constructor() {
        this.leftButton = document.querySelector('#button-left');
        this.rightButton = document.querySelector('#button-right');
        this.slideImage = document.querySelector('.slide-image');
        this.viewPortBackgroundColor = document.querySelector('.viewport-background-color');



        this.rightButton.addEventListener('click', this.rightButtonFunction.bind(this));
        this.leftButton.addEventListener('click', this.leftButtonFunction.bind(this));
    }

    rightButtonFunction() {
        if(this.slideImage.classList.contains('html')) {
            //slide to CSS
            this.slideImage.classList.remove('html', 'js', 'python', 'react');
            this.slideImage.classList.add('css');
            this.viewPortBackgroundColor.classList.remove('htmlcolor');
            this.viewPortBackgroundColor.classList.add('csscolor');
            this.setVisibielText(1);
            this.setHideText(1);



        } else if(this.slideImage.classList.contains('css')) {
            //slide to JS
            this.slideImage.classList.remove('html', 'css', 'python', 'react');
            this.slideImage.classList.add('js');
            this.viewPortBackgroundColor.classList.remove('csscolor');
            this.viewPortBackgroundColor.classList.add('jscolor');
            this.setVisibielText(2);
            this.setHideText(2);

        } else if(this.slideImage.classList.contains('js')) {
            //slide to python
            this.slideImage.classList.remove('html', 'css', 'js', 'react');
            this.slideImage.classList.add('python');
            this.viewPortBackgroundColor.classList.remove('jscolor');
            this.viewPortBackgroundColor.classList.add('pythoncolor');
            this.setVisibielText(3);
            this.setHideText(3);

        } else if(this.slideImage.classList.contains('python')) {
            //slide to react
            this.slideImage.classList.remove('html', 'css', 'js', 'python');
            this.slideImage.classList.add('react');
            this.viewPortBackgroundColor.classList.remove('pythoncolor');
            this.viewPortBackgroundColor.classList.add('reactcolor');
            this.setVisibielText(4);
            this.setHideText(4);

        }
    }

    leftButtonFunction() {
        if(this.slideImage.classList.contains('react')) {
            this.slideImage.classList.remove('html', 'css', 'js', 'react');
            this.slideImage.classList.add('python');
            this.viewPortBackgroundColor.classList.remove('reactcolor');
            this.viewPortBackgroundColor.classList.add('pythoncolor');
            this.setVisibielText(3);
            this.setHideText(3);

        } else if(this.slideImage.classList.contains('python')) {
            this.slideImage.classList.remove('html', 'css', 'python', 'react');
            this.slideImage.classList.add('js');
            this.viewPortBackgroundColor.classList.remove('pythoncolor');
            this.viewPortBackgroundColor.classList.add('jscolor');
            this.setVisibielText(2);
            this.setHideText(2);

        } else if(this.slideImage.classList.contains('js')) {
            this.slideImage.classList.remove('html', 'js', 'python', 'react');
            this.slideImage.classList.add('css');
            this.viewPortBackgroundColor.classList.remove('jscolor');
            this.viewPortBackgroundColor.classList.add('csscolor');
            this.setVisibielText(1);
            this.setHideText(1);

        } else if(this.slideImage.classList.contains('css')) {
            this.slideImage.classList.remove('css', 'js', 'python', 'react');
            this.slideImage.classList.add('html');
            this.viewPortBackgroundColor.classList.remove('csscolor');
            this.viewPortBackgroundColor.classList.add('htmlcolor');
            this.setVisibielText(0);
            this.setHideText(0);
        }
    }

    getVisibleText(show){
        this.textArray = [
          document.querySelector('.text1'),
          document.querySelector('.text2'),
          document.querySelector('.text3'),
          document.querySelector('.text4'),
          document.querySelector('.text5')
        ];

        let visibleBox = this.textArray.filter((element, index) => {
            return index === show;
        })
        return visibleBox;
    }

    getHideText(show) {
        let boxesToHide = this.textArray.filter((element, index) => {
            return index !== show;
        })
        return boxesToHide;
    }

    setVisibielText(show) {
        this.getVisibleText(show)[0].style.visibility = 'visible';

    }

    setHideText(show) {

        let arrayHideText = this.getHideText(show);
        for(let i=0; i<arrayHideText.length;i++) {
            arrayHideText[i].style.visibility = 'hidden';
        }

    }
}

const WebDevCarousel = new carousel();














