import { createContext, useContext, useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Authcontext = createContext();

function AuthProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Authcontext.Provider
      value={{
        email,
        setEmail,
        setPassword,
        password,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
}
function useAuthContext() {
  const context = useContext(Authcontext);
  if (context === undefined) throw new Error('provider was use out context');
  return context;
}
// coming   back to complete it later
