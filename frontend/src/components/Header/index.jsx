import React, { useState } from 'react';
import './styles.css';

import { useAuth } from '../../context/auth';
import LoginModal from '../utils/LoginModal';
import SignUpModal from '../utils/SignUpModal';
import api from '../../services/api';

function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const { setAuthTokens, authTokens } = useAuth();

  function logout() {
    api.defaults.headers.common.Authorization = null;
    setShowLoginModal(false);
    setShowSignUpModal(false);
    setAuthTokens();
    localStorage.removeItem('tokens');
  }

  return (
    <>
      <div id="header">
        <h3 id="title">SEU GUIA AQUI</h3>
        <div id="actions">
          {authTokens ? (
            <div>
              <button
                id="logout"
                onClick={() => {
                  logout();
                }}
              >
                {' '}
                LOGOUT{' '}
              </button>
            </div>
          ) : (
            <>
              <LoginModal
                onClose={() => {
                  setShowLoginModal(false);
                }}
                show={showLoginModal}
              />
              <SignUpModal
                onClose={() => {
                  setShowSignUpModal(false);
                }}
                show={showSignUpModal}
              />
              <button
                type="button"
                id="login"
                onClick={() => setShowLoginModal(true)}
              >
                LOGIN
              </button>
              <button
                type="button"
                id="signin"
                onClick={() => setShowSignUpModal(true)}
              >
                CADASTRE-SE
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
