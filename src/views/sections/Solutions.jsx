import React from 'react';
import solutions from 'Data/solutions.json';
import SolutionCard from 'Components/SolutionCard';
import gsap from 'gsap';

export default class Solutions extends React.Component {
  componentDidMount(){
    const cards = gsap.utils.toArray('.solution-card');
    cards.map(card => {
      gsap.fromTo(card, {
        opacity: 0,
        x: -50,
      }, {
        opacity: 1,
        duration: 0.8,
        x: 0,
        ease: 'power.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top center+=200'
        }
      });
    });
  }

  render() {
    return (
      <section className="solutions" id="solutions">
        <div className="wrapper">
          <h2 className="title title--secondary title--secondary-right">Soluções</h2>
          <div className="solutions-grid">
            {
              solutions.map((solution, index) => {
                return (
                  <div className="solutions-grid__item" key={index}>
                    <SolutionCard data={solution}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    )
  }
}