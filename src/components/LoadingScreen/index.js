import React from 'react';
import { FaHourglassHalf } from 'react-icons/fa';

import { Container } from './styles';

export default function LoadingScreen() {
  return (
    <Container>
      <FaHourglassHalf size={36} color="#fff" />
      <h2>Carregando...</h2>
    </Container>
  );
}
