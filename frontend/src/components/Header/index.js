import React, { useState } from 'react';
import './styles.css';

import LoginModal from '../utils/LoginModal';
import SignInModal from '../utils/SignInModal';

function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  return (
    <>
      <div id="header">
        <h3 id="title">SEU GUIA AQUI</h3>
        <div id="actions">
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
            onClick={() => setShowSignInModal(true)}
          >
            CADASTRE-SE
          </button>
        </div>
      </div>
      <LoginModal
        onClose={() => {
          setShowLoginModal(false);
        }}
        show={showLoginModal}
      />
      <SignInModal
        onClose={() => {
          setShowSignInModal(false);
        }}
        show={showSignInModal}
      />
    </>
  );
}

export default Header;
