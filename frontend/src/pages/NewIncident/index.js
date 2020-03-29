import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Swal from 'sweetalert2';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import { Container, Content, Section, Form } from './styles';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push('/profile');
    } catch (error) {
      Swal.fire({
        title: 'Oops...',
        text: `Erro ao cadastrar caso, tente novamente.`,
        icon: 'error',
      });
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="Be the Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreava o caso detalhadamente para encontrar um herói para
            resolver isso.
          </p>
          <Link to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </Section>
        <Form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  );
}
