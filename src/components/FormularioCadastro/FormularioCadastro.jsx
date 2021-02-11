import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {

  constructor() {
    super();
    this.titulo = "";
    this.texto = "";
  }

  _handeTitleChange(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleTextChange(event) {
    event.stopPropagation();
    this.texto = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(`a new note was created` + this.titulo + " " + this.texto);
  }

  render() {
    return (

      <form className="form-cadastro"
        onSubmit={this._createNote.bind(this)}
      >
        <input
          type="text" placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handeTitleChange.bind(this)}
        />
        <textarea
          rows={10}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleTextChange.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
    </button>
      </form>
    );
  }
}

export default FormularioCadastro;