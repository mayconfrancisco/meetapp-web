import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding-top: 50px;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h1 {
      color: #fff;
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
  }
`;

export const MyMeetupsList = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  li {
    margin-bottom: 10px;

    a {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 20px;
      background: rgba(0, 0, 0, 0.3);
      border: 0;
      border-radius: 4px;
      color: #fff;

      div {
        display: flex;
        justify-content: center;

        span {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          margin-right: 20px;
        }

        svg {
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
`;
