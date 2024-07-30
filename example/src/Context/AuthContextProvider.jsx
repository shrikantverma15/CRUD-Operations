import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({
    isLoggedIn: true,
    token: null,
  });

  const Login = (token) => {
    setAuth({
      isLoggedIn: true,
      token: token,
    });
  };

  const Logout = () => {
    setAuth({
      isLoggedIn: false,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
