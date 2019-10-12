import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(0deg, #402845, #22202c);
`;

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

export const Content = styled.div`
  height: 100%;
  max-width: 315px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

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

    span {
      color: #f94d6a;
      margin-bottom: 15px;
    }

    button {
      margin-top: 5px;
      height: 50px;
      background-color: #f94d6a;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }

      ${props =>
        props.isLoading &&
        css`
          svg {
            animation: ${animationButton} 1s linear infinite;
          }
        `}
    }
  }

  a {
    align-self: center;
    margin-top: 20px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }
`;

// export const SubmitButton = styled.button.attrs(props => ({
//   type: 'submit',
//   disable: props.isLoading,
// }))`
//   margin-top: 5px;
//   height: 50px;
//   background-color: #f94d6a;
//   color: #fff;
//   border: 0;
//   border-radius: 4px;
//   font-weight: bold;
//   transition: background 0.2s;

//   &:hover {
//     background: ${darken(0.03, '#f94d6a')};
//   }

//   ${props =>
//     props.isLoading &&
//     css`
//       svg {
//         animation: ${animationButton} 1s linear infinite;
//       }
//     `}
// `;
