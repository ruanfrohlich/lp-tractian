import React  from "react";
import SVG from "react-inlinesvg";
import MainSlide from "Components/MainSlide";

export default class MainHero extends React.Component {
  render(){
    return (
      <section className="main-hero" id="top">
        <div className="wrapper">
          <div className="grid">
            <div className="grid__col">
              <h1 className="title title--primary">Monitoramento Online e Gestão de Ativos em um só lugar</h1>
              <div className="editor">
                <p>
                  Evite falhas nas suas máquinas e deixe o tempo de inatividade no passado com o melhor sistema preditivo do mercado.
                </p>
              </div>
              <span className="about">
                Já conhece a TRACTIAN ? 
                <a href="#about" className="about__link goto">Conheça aqui</a>
              </span>
              <div className="demo-image">
                <img src="assets/img/desbalanceamento.png" alt="Imagem demonstrativa do gráfico de desbalanceamento" />
              </div>
            </div>
            <div className="grid__col">
              <MainSlide/>
            </div>
          </div>
        </div>
        <span className="hero-mask">
          <SVG src="assets/img/hero-mask-2.svg" />
        </span>
      </section>
    );
  }
}