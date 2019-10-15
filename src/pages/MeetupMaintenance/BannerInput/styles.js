import styled from 'styled-components';

export const Container = styled.div`
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

    &:hover {
      opacity: 0.6;
    }

    img {
      max-height: 200px;
    }

    input {
      display: none;
    }

    p {
      margin-top: 10px;
      font-size: 20px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;
