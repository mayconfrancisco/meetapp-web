import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FaPlusCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '~/services/api';

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

export default function MeetupMaintenance() {
  async function handleSubmit({ title, description, location, date }) {
    try {
      await api.post('/meetups', {
        title,
        description,
        location,
        date,
        banner_id: 2,
      });

      toast.success('Meetup cadastrado com sucesso!');
    } catch (err) {
      // TODO MAYCON - Tratar erros que venham da API
      console.tron.log(err.response.data, err.response);
      toast.error(
        'Erro ao salvar Meetup, verifique seus dados e sua conexão e tente novamente!',
      );
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
        <BannerInput name="banner_id" />
        <Input type="text" name="title" placeholder="Título do meetup" />
        <Input
          type="text"
          multiline
          name="description"
          placeholder="Descrição completa"
        />
        <Input type="datetime-local" name="date" placeholder="Data do meetup" />
        <Input type="text" name="location" placeholder="Localização" />
        <button type="submit">
          <FaPlusCircle size={16} color="#fff" />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
