import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { FaHourglassHalf } from 'react-icons/fa';

import { singInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo-svg.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Este não é um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Sua senha deve conter ao menos 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(singInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Logo MeetApp" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit" isLoading={loading}>
          {loading ? <FaHourglassHalf color="#fff" size={20} /> : 'Entrar'}
        </button>
      </Form>
      <Link to="/signup">Criar conta grátis</Link>
    </>
  );
}
