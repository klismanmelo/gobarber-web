import React from 'react';
import GlobalStyle from './style/globals';
import SignIn from './pages/SingIn';
// import SignUp from './pages/SingUp';

import { AppProvider } from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
