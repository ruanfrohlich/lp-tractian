import SVG from 'react-inlinesvg';
import React from 'react';

export default class GoTop extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isShow: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', () => {
      let top = window.scrollY;
      this.setState(() => {
        return {
          isShow: top > window.innerHeight * 1.5 ? true : false
        }
      })
    });
  }

  render(){
    return (
      <a href="#top" className={!this.state.isShow ? 'goto go-top' : 'goto go-top is-show'}>
        <SVG src='assets/img/icons/arrow.svg'/>
      </a>
    );
  }
}