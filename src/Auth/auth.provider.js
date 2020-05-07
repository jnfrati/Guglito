import React, { useState, useContext, createContext } from "react";
import Auth from ".";


const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
  }

  export const useAuth = () => {
    return useContext(authContext);
  };

  function useProvideAuth() {
    const [user, setUser] = useState(null);
    

    const signin = (email, password) => {
      return Auth
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(response => {
          setUser(response.user);
          return response.user;
        });
    };
  
    const signup = (email, password) => {
      return Auth
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          setUser(response.user);
          return response.user;
        });
    };
  
    const signout = () => {
      return Auth
        .auth()
        .signOut()
        .then(() => {
          setUser(false);
        });
    };
  
    const sendPasswordResetEmail = email => {
      return Auth
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          return true;
        });
    };
  
    const confirmPasswordReset = (code, password) => {
      return Auth
        .auth()
        .confirmPasswordReset(code, password)
        .then(() => {
          return true;
        });
    };
  
    
    return {
      user,
      signin,
      signup,
      signout,
      sendPasswordResetEmail,
      confirmPasswordReset
    };
  }