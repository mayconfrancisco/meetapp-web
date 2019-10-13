import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { FaHourglassHalf } from 'react-icons/fa';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('O e-mail é obrigatório'),
  oldPassword: Yup.string().when('password', (newPass, field) => {
    return newPass
      ? field.required('Para cadastrar uma nova senha informe a atual')
      : field;
  }),
  password: Yup.string().test(
    'len',
    'Sua senha deve conter no mínimo 6 caracteres',
    val => {
      return val.length < 1 || val.length > 5;
    },
  ),
  confirmPassword: Yup.string().when('password', (newPass, field) => {
    return newPass
      ? field
          .required()
          .oneOf([Yup.ref('password')], 'Confirmação de senha não bate')
      : field;
  }),
});

export default function Profile() {
  const { profile, loading } = useSelector(state => state.user);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={profile} schema={schema}>
        <Input type="name" name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Seu e-mail" />
        <hr />
        <Input type="password" name="oldPassword" placeholder="Senha atual" />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />
        <button type="submit">
          {loading ? (
            <FaHourglassHalf color="#fff" size={20} />
          ) : (
            'Salvar perfil'
          )}
        </button>
      </Form>
    </Container>
  );
}
