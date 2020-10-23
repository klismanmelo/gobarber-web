import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './style/globals';

import Routes from './routes';

import { AppProvider } from './hooks';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </Router>
  );
};

export default App;
