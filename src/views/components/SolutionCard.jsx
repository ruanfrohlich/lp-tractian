import React from 'react';
import SVG from 'react-inlinesvg';

export default function SolutionCard(props){
  return props.data.link ?
    <div className="solution-card">
      <div className="solution-card__icon">
        <SVG src={props.data.icon}/>
      </div>
      <h3 className="solution-card__title">{props.data.title}</h3>
      <p className="solution-card__description">{props.data.description}</p>      
      <a className='solution-card__link' href={props.data.link}>{props.data.linkLabel}</a>  
    </div>
    :
    <div className="solution-card">
      <div className="solution-card__icon">
        <SVG src={props.data.icon}/>
      </div>
      <h3 className="solution-card__title">{props.data.title}</h3>
      <p className="solution-card__description">{props.data.description}</p>      
    </div>
}