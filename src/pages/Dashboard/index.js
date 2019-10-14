import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { Container, MyMeetupsList } from './styles';

export default function Dashboard() {
  const [myMeetups, setMyMeetups] = useState([]);

  useEffect(() => {
    async function loadMyMeetups() {
      try {
        const response = await api.get('/organizing');
        const meetups = response.data.map(mt => {
          return {
            ...mt,
            dateFormatted: format(
              parseISO(mt.date),
              "dd 'de' MMMM ', às ' hh'h'",
              { locale: pt },
            ),
          };
        });

        setMyMeetups(meetups);
      } catch (err) {
        toast.error(
          'Erro ao carregar seus Meetups, verifique a conexão e tente novamente!',
        );
      }
    }

    loadMyMeetups();
  }, []);

  return (
    <Container>
      <header>
        <h1>Meus Meetups</h1>
        <button type="button">Novo meetup</button>
      </header>

      <MyMeetupsList>
        {myMeetups.map(meetup => (
          <li key={meetup.id}>
            <Link to={`/mymeetup/${meetup.id}`}>
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
