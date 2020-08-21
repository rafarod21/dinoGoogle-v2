import React from 'react';

import { Container, Content } from './styles';

const NetInformations: React.FC = () => {
  return (
    <Container>
      {/* <DinoIcon /> */}
      <header>
        <h1>Sem Internet</h1>
      </header>

      <Content>
        Tente:
        <ul>
          <li>Verificar os cabos de rede, modem e roteador</li>
          <li>Conectar à rede Wi-Fi novamente</li>
        </ul>
      </Content>

      <text>ERR_INTERNET_DISCONNECTED</text>

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