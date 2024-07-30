import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";

export default function RedirectIfLoggedIn({ children }) {
    const { auth } = useContext(AuthContext);
  
    if (auth.isLoggedIn) {
      return <Navigate to="/" />;
    }
  
    return children;
  }
  