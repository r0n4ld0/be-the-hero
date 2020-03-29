import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import api from '../../services/api';

import { Container, Section, Form } from './styles';

import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();
  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (error) {
      Swal.fire({
        title: 'Oops...',
        text: `Falha no login, tente novamente.`,
        icon: 'error',
      });
    }
  }

  return (
    <Container>
      <Section>
        <img src={logo} alt="Be the Hero" />

        <Form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua Id"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button type="submit">Entrar</button>

          <Link to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </Section>

      <img src={heroesImg} alt="Heros" />
    </Container>
  );
}
