import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Funcao from './Funcao'
import Pontuacao from './Pontuacao'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      numQuestoes : 0,
	  numRespostaCorreta : 0
    }
  }
  
  resultadoSoma = resultado => {
    if (resultado) {
      this.setState(currState => ({
        numRespostaCorreta : currState.numRespostaCorreta + 1
      }))
    }
    this.setState(currState => ({
        numQuestoes : currState.numQuestoes + 1
      }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
			<Funcao resultadoSoma={this.resultadoSoma} />
          </div> 
		  <Pontuacao numRespostaCorreta={this.state.numRespostaCorreta} numQuestoes={this.state.numQuestoes}/>
        </div>
      </div>
    );
  }
}

export default App;
