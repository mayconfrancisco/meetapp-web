import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
  color: rgba(255, 255, 255, 0.6);

  svg {
    margin-bottom: 8px;
  }

  a {
    text-decoration: none;
    color: #f94d6a;
    margin-top: 4px;

    &:hover {
      font-weight: bold;
    }
  }
`;
