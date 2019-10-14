import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronRight } from 'react-icons/fa';
import history from '~/services/history';

import {
  myMeetupsRequest,
  setCurrent,
} from '~/store/modules/myMeetups/actions';

import { Container, MyMeetupsList } from './styles';

export default function Dashboard() {
  // TODO MAYCON - refatorar - buscar da API atraves do ID na rota do router-dom
  // Nao eh necessario usar o redux neste caso
  const { data } = useSelector(state => state.myMeetups);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myMeetupsRequest());
  }, [dispatch]);

  function handleViewDetails(meetup) {
    dispatch(setCurrent(meetup));
    history.push('/meetupdetails');
  }

  return (
    <Container>
      <header>
        <h1>Meus Meetups</h1>
        <button type="button">Novo meetup</button>
      </header>

      <MyMeetupsList>
        {data.map(meetup => (
          <li key={meetup.id}>
            <button type="button" onClick={() => handleViewDetails(meetup)}>
              <strong>{meetup.title}</strong>
              <div>
                <span>{meetup.dateFormatted}</span>
                <FaChevronRight size={12} />
              </div>
            </button>
          </li>
        ))}
      </MyMeetupsList>
    </Container>
  );
}
