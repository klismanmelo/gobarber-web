import React from 'react';
import GlobalStyle from './style/globals';
import SignIn from './pages/SingIn';
// import SignUp from './pages/SingUp';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
