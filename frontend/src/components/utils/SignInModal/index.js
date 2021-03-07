import React from 'react';

import './styles.css';

export default function SignInModal({ onClose, show }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Cadastre-se!</h3>
          <button id="btn-close" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <form id="login-form">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Insira seu nome"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Insira seu email"
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Insira sua senha"
              required
            />
            <input
              type="tel"
              pattern="[0-9]{5}-[0-9]{4}"
              name="phone"
              id="phone"
              placeholder="Insira seu telefone"
              maxLength="9"
              required
            />
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
