import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {
  FaCalendarDay,
  FaMapMarkerAlt,
  FaEdit,
  FaTrashAlt,
} from 'react-icons/fa';

import api from '~/services/api';

import Loading from '~/components/LoadingScreen';
import {
  Container,
  MeetupContainer,
  MeetupContainerDetails,
  MeetupLocation,
} from './styles';

export default function MeetupDetails({ match, history }) {
  const [meetup, setMeetup] = useState(null);
  const [loading, setLoading] = useState(true);
  const { meetupId } = match.params;

  useEffect(() => {
    async function loadMeetup() {
      try {
        const { data } = await api.get(`/organizing/${meetupId}`);
        const myMeetup = data ? data[0] : null;

        if (myMeetup) {
          setMeetup({
            ...myMeetup,
            dateFormatted: format(
              parseISO(myMeetup.date),
              "dd 'de' MMMM', às' HH'h'",
              {
                locale: pt,
              },
            ),
          });
        }
      } catch (err) {
        toast.error(
          'Erro ao carregar meetup, verifique a conexão e tente novamente',
        );
      } finally {
        setLoading(false);
      }
    }

    loadMeetup();
  }, [meetupId]);

  async function handleCancel() {
    try {
      await api.delete(`/meetups/${meetup.id}`);

      toast.success('Meetup cancelado com sucesso!');
      history.push('/dashboard');
    } catch (err) {
      const apiError =
        err.response && err.response.data && err.response.data.error
          ? err.response.data.error
          : '';
      toast.error(`Não foi possível cancelar o meetup! ${apiError}`);
    }
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <header>
            <h1>{meetup.title}</h1>
            <div>
              <Link to={`/mymeetupsave/${meetup.id}`}>
                <FaEdit size={12} color="#fff" />
                Editar
              </Link>
              <button type="button" onClick={handleCancel}>
                <FaTrashAlt size={12} color="#fff" />
                Cancelar
              </button>
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
        </>
      )}
    </Container>
  );
}

MeetupDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      meetupId: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
