import React from "react";

export default class Header extends React.Component {
  constructor(props){    
    super(props);
    this.state = {
      isScroll: false
    }

    this.openMenuMobile = this.openMenuMobile.bind(this);
  }

  openMenuMobile() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.main-menu');

    navMenu.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open');
  }

  componentDidMount(){
    window.addEventListener('scroll', () => {
      let top = window.scrollY;
      let slidesWrap = document.querySelector('.pin-spacer-slides');
      let header = document.querySelector('.site-header');
      
      this.setState(() => {
        return {
          isScroll: slidesWrap ?
            top > ((slidesWrap.clientHeight / 2) + (header.clientHeight + 82) ) ? true : false :
            top > header.clientHeight ? true: false
        }
      });
    });
  }

  render(){
    return (
      <header className={!this.state.isScroll ? 'site-header' : 'site-header is-scroll'}>
        <div className="wrapper">
          <nav className="main-nav">
            <a href="/" className="main-nav__brand">
              <img src="assets/img/site-logo.svg" alt="Logotipo Tractian" className="site-logo" />
            </a>
            <button className="menu-toggle" onClick={this.openMenuMobile}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className="main-menu">
              <li className="main-menu__link">
                <a href="#story" className="goto">História</a>
              </li>
              <li className="main-menu__link">
                <a href="#about" className="goto">Sobre</a>
              </li>
              <li className="main-menu__link">
                <a href="#solutions" className="goto">Soluções</a>
              </li>
              <li className="main-menu__link">
                <a href="#contact" className="goto">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}