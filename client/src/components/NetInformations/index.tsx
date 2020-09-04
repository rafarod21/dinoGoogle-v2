import React from 'react';

import dinoStop from '../../assets/images/dinoStop.png';

import { Container, DinoIcon, Content, SuggestionsList } from './styles';

const NetInformations: React.FC = () => {
  return (
    <Container>
      <DinoIcon src={dinoStop} />
      <header>
        <h1>Sem Internet</h1>
      </header>

      <Content>
        <SuggestionsList>
          <p>Tente:</p>
          <ul>
            <li>Verificar os cabos de rede, modem e roteador</li>
            <li>Conectar à rede Wi-Fi novamente</li>
          </ul>
        </SuggestionsList>
        <span>ERR_INTERNET_DISCONNECTED</span>
      </Content>

    </Container>
  );
}

export default NetInformations;

/*
* Estrutura da página:
*   Área do jogo
*   Header "Sem internet"
*   Content
*       "Tente:
*          Verificar os cabos de rede, modem e roteador
*          Conectar à rede Wi-Fi novamente"
*   Footer "ERR_INTERNET_DISCONNECTED"
*/