import React, { useState } from 'react';
import { useAuth } from '../../../context/auth';
import api from '../../../services/api';

import './styles.css';

export default function SignUpModal({ onClose, show }) {
  if (!show) {
    return null;
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState();
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const { setAuthTokens, authTokens } = useAuth();

  async function handleSignUp(e) {
    e.preventDefault();

    try {
      const response = await api.post('/users', {
        name,
        email,
        password,
        phone,
      });

      console.log(response.status);

      if (response.status === 200) {
        const result = await api.post('/sessions', { email, password });

        console.log(result);
        if (result.status === 200) {
          setAuthTokens(result.data.token);
        }
      }
    } catch (e) {
      setIsError(true);
      setError(e.response.data.error);
    }
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 style={{ color: 'black' }}>Cadastre-se!</h4>
          <button id="btn-close" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <form id="login-form" onSubmit={handleSignUp}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Insira seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Insira seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Insira sua senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              minLength={6}
            />
            <input
              type="tel"
              // pattern="[0-9]{5}-[0-9]{4}"
              name="phone"
              id="phone"
              placeholder="Insira seu telefone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              maxLength="9"
              required
            />
            {isError ? <span className="error-message">{error}</span> : null}
            <button type="submit" onSubmit={() => {}}>
              CADASTRE-SE
            </button>
          </form>
        </div>
        <div className="modal-footer" />
      </div>
    </div>
  );
}
