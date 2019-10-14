import styled from 'styled-components';

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: #fff;
    }

    a {
      background: #4dbaf9;
      color: #fff;
      font-weight: bold;
      padding: 12px;
      border-radius: 4px;
      margin-left: 12px;

      svg {
        margin-right: 5px;
      }
    }
  }
`;

export const MeetupContainer = styled.div`
  margin-top: 50px;

  img {
    max-height: 400px;
    max-width: 900px;
  }
`;

export const MeetupContainerDetails = styled.div`
  margin-top: 30px;

  p {
    color: #fff;
    line-height: 22px;
  }
`;

export const MeetupLocation = styled.div`
  display: flex;
  margin-top: 30px;
  color: rgba(255, 255, 255, 0.6);

  div {
    display: flex;
    align-items: center;
    margin-right: 30px;
  }

  svg {
    opacity: 0.6;
    margin-right: 5px;
  }
`;
