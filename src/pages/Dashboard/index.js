import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaPlusCircle } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Loading from '~/components/LoadingScreen';
import { Container, MyMeetupsList } from './styles';
import EmptyScreen from '~/components/EmptyScreen';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
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
              "dd 'de' MMMM ', às ' HH'h'",
              { locale: pt },
            ),
          };
        });

        setMyMeetups(meetups);
      } catch (err) {
        toast.error(
          'Erro ao carregar seus Meetups, verifique a conexão e tente novamente!',
        );
      } finally {
        setLoading(false);
      }
    }

    loadMyMeetups();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <header>
            <h1>Meus Meetups</h1>
            <Link to="/mymeetupsave">
              <FaPlusCircle size={12} />
              Novo meetup
            </Link>
          </header>

          {myMeetups.length > 0 ? (
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
          ) : (
            <EmptyScreen
              onAction="/mymeetupsave"
              onActionText="Considere adicionar um Novo Meetup"
            />
          )}
        </>
      )}
    </Container>
  );
}
