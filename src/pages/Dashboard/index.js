import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FaChevronRight } from 'react-icons/fa';
import { myMeetupsRequest } from '~/store/modules/myMeetups/actions';

import { Container, MyMeetupsList } from './styles';

export default function Dashboard() {
  const { data } = useSelector(state => state.myMeetups);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myMeetupsRequest());
  }, [dispatch]);

  return (
    <Container>
      <header>
        <h1>Meus Meetups</h1>
        <button type="button">Novo meetup</button>
      </header>

      <MyMeetupsList>
        {data.map(meetup => (
          <li key={meetup.id}>
            <Link to={`/meetupdetails/${meetup.id}`}>
              <strong>{meetup.title}</strong>
              <div>
                <span>{meetup.dateFormatted}</span>
                <FaChevronRight size={12} />
              </div>
            </Link>
          </li>
        ))}
      </MyMeetupsList>
    </Container>
  );
}
