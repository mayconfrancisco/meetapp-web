import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      height: 50px;
      background: rgba(0, 0, 0, 0.3);
      border: 0;
      border-radius: 4px;
      color: #fff;
      padding: 0 15px;
      margin-bottom: 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    textarea {
      height: 200px;
      background: rgba(0, 0, 0, 0.3);
      border: 0;
      border-radius: 4px;
      color: #fff;
      padding: 15px;
      margin-bottom: 10px;
    }

    span {
      color: #f94d6a;
      margin-bottom: 15px;
    }

    button {
      align-self: flex-end;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 15px;
      margin-top: 5px;
      height: 50px;
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
        margin-right: 5px;
      }
    }
  }
`;

export const FileContainer = styled.div`
  width: 100%;
  height: 200px;
  background: rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: rgba(255, 255, 255, 0.5);

    &:hover {
      opacity: 0.6;
    }

    img {
      max-height: 200px;
    }

    input {
      display: none;
    }

    svg {
      padding-bottom: 10px;
    }
  }
`;
