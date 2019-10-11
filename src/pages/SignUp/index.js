import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-svg.svg';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Logo MeetApp" />
      <Form onSubmit={handleSubmit}>
        <Input type="name" name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>
      </Form>
      <Link to="/">Já tenho login</Link>
    </>
  );
}
