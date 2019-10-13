import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

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
  form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      height: 50px;
      background-color: rgba(0, 0, 0, 0.3);
      border: 0;
      border-radius: 4px;
      padding: 0 15px;
      margin: 0 0 10px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 10px 0 20px;
    }

    span {
      color: #f94d6a;
      margin-bottom: 15px;
    }

    button {
      min-width: 170px;
      height: 42px;
      padding: 0 20px;
      align-self: flex-end;
      margin-top: 5px;
      background-color: #f94d6a;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#f94d6a')};
      }

      svg {
        animation: ${animationButton} 1s linear infinite;
      }
    }
  }
`;
