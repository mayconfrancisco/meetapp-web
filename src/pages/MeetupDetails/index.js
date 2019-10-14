import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FaCalendarDay,
  FaMapMarkerAlt,
  FaEdit,
  FaTrashAlt,
} from 'react-icons/fa';

import {
  Container,
  MeetupContainer,
  MeetupContainerDetails,
  MeetupLocation,
} from './styles';

export default function MeetupDetails() {
  const meetup = useSelector(state => state.myMeetups.current);

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        <div>
          <Link to={`/meetup/${meetup.id}`}>
            <FaEdit size={12} color="#fff" />
            Editar
          </Link>
          <Link to="/dashboard">
            <FaTrashAlt size={12} color="#fff" />
            Cancelar
          </Link>
        </div>
      </header>

      <MeetupContainer>
        <img src={meetup.banner.url} alt="Banner Meetup" />
        <MeetupContainerDetails>
          <p>{meetup.description}</p>
          <MeetupLocation>
            <div>
              <FaCalendarDay size={12} color="#fff" />
              <time>{meetup.dateFormatted}</time>
            </div>
            <div>
              <FaMapMarkerAlt size={12} color="#fff" />
              <address>{meetup.location}</address>
            </div>
          </MeetupLocation>
        </MeetupContainerDetails>
      </MeetupContainer>
    </Container>
  );
}
