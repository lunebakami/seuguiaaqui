import React from 'react';

import './styles.css';

export default function LoginModal({ onClose, show }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Login</h3>
          <button id="btn-close" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <form id="login-form">
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
            <button type="submit" onSubmit={() => {}}>
              LOGIN
            </button>
          </form>
        </div>
        <div className="modal-footer" />
      </div>
    </div>
  );
}
