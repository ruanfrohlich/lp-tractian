import React from "react";
import srcData from 'Data/clients.json';
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

export default class OurClients extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      logos: srcData
    }
  }

  componentDidMount(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.clients__item', {
      y: 200,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.our-clients',
        start: 'top bottom',
      }
    });
  }

  render(){
    return (
      <section className="our-clients">
          <div className="wrapper">
            <h2 className="title title--secondary">Nossos Clientes</h2>
            <div className="clients">
              {this.state.logos.map((logo, index) => {
                return (
                  <picture className="clients__item" key={index}>
                    <img 
                      src={logo.image} 
                      //srcSet={`${logo.image2x} 2x`}
                      alt={logo.alt} 
                      className="client-logo" 
                    />
                  </picture>
                )
              })}
            </div>
          </div>
        </section>
    );
  }
}