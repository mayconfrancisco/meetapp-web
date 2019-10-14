import styled, { keyframes } from 'styled-components';

const animationButton = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(2);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  svg {
    animation: ${animationButton} 1s linear infinite;
  }

  h2 {
    padding-top: 30px;
  }
`;
