import React from "react";
import SVG from 'react-inlinesvg';

/**
 * Formulário somente ilustrativo
 */

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <section className="contact" id="contact">
        <div className="wrapper">
          <h2 className="title title--secondary">Contato</h2>
          <form action="#" className="form needs-validation" noValidate>
            <div className="form__fields">
              <div className="field">
                <input type="text" className="field-control"  required />
                <label htmlFor="name" className="field-label">Nome</label>
              </div>
              <div className="field">
                <input type="email" className="field-control" required />
                <label htmlFor="email" className="field-label">E-mail</label>
              </div>
              <div className="field">
                <textarea cols="30" rows="10" className="field-control" placeholder="Descreva o objetivo do seu contato..." required></textarea>
                <label htmlFor="message" className="field-label">Mensagem</label>
              </div>
            </div>
            <div className="form__actions">
              <button onClick={this.handleSubmit} className="btn btn--submit">
                <span className="btn__icon"><SVG src="assets/img/icons/icon-load.svg"/></span>
                <span className="btn__label">Enviar</span>
              </button>
              <div className="form-feedback">
                <span className="form-feedback__success">Sua mensagem foi enviada com sucesso!</span>
                <span className="form-feedback__error">Um erro ocorreu, tente novamente!</span>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}