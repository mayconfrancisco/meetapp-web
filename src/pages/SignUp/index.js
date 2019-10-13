import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { FaHourglassHalf } from 'react-icons/fa';

import { addAccountRequest } from '~/store/modules/user/actions';

import logo from '~/assets/logo-svg.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome completo é obrigatório'),
  email: Yup.string()
    .email('Este não é um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Sua senha deve conter ao menos 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(addAccountRequest(data));
  }

  return (
    <>
      <img src={logo} alt="Logo MeetApp" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input type="name" name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">
          {loading ? <FaHourglassHalf color="#fff" size={20} /> : 'Criar conta'}
        </button>
      </Form>
      <Link to="/">Já tenho login</Link>
    </>
  );
}
