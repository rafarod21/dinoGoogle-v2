import React from 'react';

import Game from '../../components/Game';
import NetInformations from '../../components/NetInformations';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Game />
      <NetInformations />
    </Container>
  );
}

export default Main;