import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Swal from 'sweetalert2';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import { Container, Content, Section, Form } from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const histroy = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      celular,
      city,
      state,
    };

    try {
      const response = await api.post('/ongs', data);

      Swal.fire({
        title: 'ONG Cadastrada!',
        text: `Seu ID de acesso: ${response.data.id}`,
        icon: 'success',
        confirmButtonText: 'Ok',
        showCancelButton: false,
      }).then(result => {
        if (result.value) {
          histroy.push('/');
        }
      });
    } catch (error) {
      Swal.fire({
        title: 'Oops...',
        text: `Erro no cadastro, tente novamente.`,
        icon: 'error',
      });
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="Be the Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar
          </Link>
        </Section>
        <Form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Celular"
            value={celular}
            onChange={e => setCelular(e.target.value)}
          />
          <div>
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={state}
              onChange={e => setState(e.target.value)}
            />
          </div>

          <button type="submit">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  );
}
