import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background-color: #000000;
  padding: 0 30px;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Profile = styled.div`
  display: flex;
  color: #fff;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-right: 30px;

    strong {
      font-weight: bold;
      margin-bottom: 5px;
    }

    a {
      color: rgba(255, 255, 255, 0.5);
      font-weight: normal;
      font-size: 13px;
      transition: color 0.3s;

      &:hover {
        color: #f94d6a;
      }
    }
  }

  button {
    height: 42px;
    background: #f94d6a;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 0 20px;
    border: 0;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#f94d6a')};
    }
  }
`;
