import React, { Component } from 'react'
import ListaDeNotas from './components/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro'
import Header from './components/Header'
import './assets/App.css'
import './assets/index.css'

class App extends Component {
  render() {
    return (
      <section className="conteudo">

        <Header />        <FormularioCadastro />
        <ListaDeNotas />

      </section>
    );
  }
}
export default App;
