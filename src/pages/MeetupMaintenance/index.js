import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FaPlusCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Loading from '~/components/LoadingScreen';
import BannerInput from './BannerInput';
import { Container } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  // o Yup ja converte o valor do fomulario em date com tz
  date: Yup.date()
    .typeError('Insira uma data válida')
    .min(new Date(), 'Apenas datas futuras são aceitas')
    .required('Data e hora são obrigatórios'),
  location: Yup.string().required('A localização é obrigatória'),
});

export default function MeetupMaintenance({ match, history }) {
  const [meetup, setMeetup] = useState(null);
  const [loading, setLoading] = useState(false);
  const { meetupId } = match.params;

  console.tron.log('meetupId', meetupId);

  useEffect(() => {
    async function loadMeetupEdit() {
      try {
        const { data } = await api.get(`/organizing/${meetupId}`);
        const myMeetup = data ? data[0] : null;

        if (myMeetup) {
          setMeetup({
            ...myMeetup,
            date: format(parseISO(myMeetup.date), "yyyy-MM-dd'T'hh:mm"),
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

    if (meetupId) {
      setLoading(true);
      loadMeetupEdit();
    }
  }, [meetupId]);

  async function createNewMeetup({
    title,
    description,
    location,
    date,
    // banner_id, // TODO Maycon - problema de recursividade no componente - teremos que voltar algumas libs de versao
  }) {
    try {
      await api.post('/meetups', {
        title,
        description,
        location,
        date,
        // banner_id,
        banner_id: 1,
      });

      toast.success('Meetup cadastrado com sucesso!');
      history.push('/dashboard');
    } catch (err) {
      // TODO MAYCON - Tratar erros que venham da API
      console.tron.log(err.response.data, err.response);
      toast.error(
        'Erro ao salvar Meetup, verifique seus dados e sua conexão e tente novamente!',
      );
    } finally {
      setLoading(false);
    }
  }

  async function updateMeetup({
    title,
    description,
    location,
    date,
    // banner_id, // TODO Maycon - problema de recursividade no componente - teremos que voltar algumas libs de versao
  }) {
    try {
      await api.put(`/meetups/${meetupId}`, {
        title,
        description,
        location,
        date,
        // banner_id,
        banner_id: 1,
      });

      toast.success('Meetup atualizado com sucesso!');
      history.push('/dashboard');
    } catch (err) {
      // TODO MAYCON - Tratar erros que venham da API
      console.tron.log(err.response.data, err.response);
      toast.error(
        'Erro ao salvar Meetup, verifique seus dados e sua conexão e tente novamente!',
      );
    } finally {
      setLoading(false);
    }
  }

  // TODO MAYCON - refatorar para melhorar
  function handleSubmit(data) {
    setLoading(true);
    if (meetupId) {
      updateMeetup(data);
    } else {
      createNewMeetup(data);
    }
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <Form onSubmit={handleSubmit} schema={schema} initialData={meetup}>
          <BannerInput name="banner_id" />
          <Input type="text" name="title" placeholder="Título do meetup" />
          <Input
            type="text"
            multiline
            name="description"
            placeholder="Descrição completa"
          />
          <Input
            type="datetime-local"
            name="date"
            placeholder="Data do meetup"
          />
          <Input type="text" name="location" placeholder="Localização" />
          <button type="submit">
            <FaPlusCircle size={16} color="#fff" />
            Salvar meetup
          </button>
        </Form>
      )}
    </Container>
  );
}

MeetupMaintenance.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      meetupId: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
