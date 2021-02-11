import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {
render() {
  return (
<form className="form-cadastro">
    <input 
    type="text" placeholder="Título"
    className="form_cadastro_input"
    />
    <textarea
    rows={15} placeholder="Escreva sua nota..."/>
    <button className="form-cadastro_input form-cadastro_submit">
      Criar nota
    </button>
    </form>
  );
}
}

export default FormularioCadastro;