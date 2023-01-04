import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContext } from './context/auth';
import Main from './pages/Main';

export default function Routes() {
  const existingTokens = JSON.parse(localStorage.getItem('tokens'));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
