import React, {Component} from 'react';

class Funcao extends Component {
  constructor(props){
    super(props)
    const {x, y, z, p} = this.geraValorRandomico()
    this.state = {
      x: x,
      y: y,
      z: z,
      p: p
      
    }
  }
  
  geraValorRandomico = () => {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const z = Math.floor(Math.random() * 100);
    const p = Math.floor(Math.random() * 3) + x + y + z;    
    return {x, y, z, p}    
  }
  
  handleButton = event => {
    const respostaCorreta = this.calculaRespostaCorreta(event.target.name)
    const novoState = this.geraValorRandomico()
    this.atualizaState(novoState)
    this.props.resultadoSoma(respostaCorreta)
  }
  
  atualizaState = novoState => {
    const {x,y,z,p} = novoState
    this.setState(_ => ({x,y,z,p}))
  }

  calculaRespostaCorreta = respostaUsuario =>{
    const {x,y,z,p} = this.state
    const resposta = x + y + z
    
    return ( (resposta === p && respostaUsuario === 'true') ||
             (resposta !== p && respostaUsuario === 'false')
           )
  }

  render(){
    let {x, y, z, p} = this.state
    return(
    <div key="calculo">
      <p className="text">{`${x} + ${y} + ${z} = ${p}`}</p>
	   <button name="true" onClick={this.handleButton}>True</button>
       <button name="false" onClick={this.handleButton}>False</button>
     </div>
    )
  }
}
export default Funcao