import React from 'react'

const Pontuacao = ({numRespostaCorreta, numQuestoes}) => (
  <p className="text">
    Your Score: {numRespostaCorreta}/{numQuestoes}
  </p>
)

export default Pontuacao