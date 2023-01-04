import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../../../context/auth';
import api from '../../../services/api';

import './styles.css';

export default function LoginModal({ onClose, show }) {
  if (!show) {
    return null;
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const { setAuthTokens, authTokens } = useAuth();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { email, password });

      if (response.status === 200) {
        setAuthTokens(response.data.token);
      }
    } catch (error) {
      setError(error.response.data.error);
      setIsError(true);
    }
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span>
            <h3>LOGIN</h3>
          </span>
          <button id="btn-close" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <form id="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Insira seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />
            {isError ? <span className="error-message">{error}</span> : null}
            <button type="submit">LOGIN</button>
          </form>
        </div>
        <div className="modal-footer" />
      </div>
    </div>
  );
}
