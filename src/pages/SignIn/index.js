import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { FaHourglassHalf } from 'react-icons/fa';

import { singInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo-svg.svg';

export default function SignIn() {
  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(singInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Logo MeetApp" />
      <Form onSubmit={handleSubmit}>
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
