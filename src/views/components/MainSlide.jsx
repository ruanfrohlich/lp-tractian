import React from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import srcData from 'Data/main-slide.json';

export default class MainSlide extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      slides: srcData
    };
    this.slider = this.slider.bind(this);
  }

  slider(){
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const slideContainer = document.querySelector('.main-slide');
    const lastGrid = document.querySelector('.main-hero .grid__col:last-child');
    let tween, clientWidth;
    const slides = gsap.utils.toArray('.slide');
    const controls = gsap.utils.toArray('.goto');
    const navMenu = document.querySelector('.main-menu');
    const menuToggle = document.querySelector('.menu-toggle');

    const responsive = () => slides.map(slide => {
      slide.style.width = lastGrid.clientWidth + 'px';
    })

    responsive();
    window.addEventListener('resize', () => {
      clientWidth = document.body.clientWidth;
      if(clientWidth > 1024.02) tween.scrollTrigger.disable();
      responsive();
    });
    
    controls.forEach((control) => {
      control.addEventListener('click', function (e) {
        e.preventDefault();
        menuToggle.classList.remove('is-open');
        navMenu.classList.remove('is-open');
        const targetElem = document.querySelector(e.currentTarget.getAttribute('href'));
        let y = targetElem;
        let offsetY = 0;
        clientWidth = document.body.clientWidth;

        if (targetElem && slideContainer.isSameNode(targetElem.parentElement) && (clientWidth > 1024.02)) {
          let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start;
          let totalMovement = (slides.length - 1) * targetElem.offsetWidth;        
          y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll );
        } else {
          y = e.currentTarget.getAttribute('href');
          offsetY = 82;
        }

        gsap.to(window, {
          scrollTo: {
            y: y,
            offsetY: offsetY,
            autoKill: false,
          },
          duration: 0.5,
          ease: 'power4.out'
        });
      });
    });

    ScrollTrigger.matchMedia({
      '(min-width:1023.98px)': () => {
        tween = gsap.to(slides, {
          xPercent: -100 * (slides.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: '.main-hero',
            pin: true,
            anticipatePin: 1,
            start: '.main-hero',
            end: () => '+=' + slideContainer.clientWidth * slides.length,
            scrub: 1.2,
            markers: false,
            id: 'slides',
          },
        });
      }
    })
  }
  
  componentDidMount(){
    this.slider();
  }

  render(){
    return (
      <div className="main-slide">
        {this.state.slides.map((slide) => {
          return (
            <div className="slide" id={slide.id} key={slide.id}>
              <div className="slide__content">
                <h3 className="slide__title">{slide.title}</h3>
                <div 
                  className="slide__description"
                  dangerouslySetInnerHTML={{ __html: slide.content }}
                >
                </div>
              </div>
              <div className="slide__image">
                <img className="slide__img" src={slide.image} alt=""/>
              </div>
            </div>
          )
        })}        
      </div>
    )
  }
}