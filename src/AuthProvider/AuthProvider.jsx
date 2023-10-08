import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import Auth from '../firebase/firebase-config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoadin] = useState(true);
  // login with google firebase
  const loginGoogle = () => {
    setLoadin(false);
    return signInWithPopup(Auth, new GoogleAuthProvider());
  };
  // account sign out
  const signOutAccount = () => {
    setLoadin(false);
    return signOut(Auth);
  };
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
      setLoadin(false);
    });
    return () => {
      unSubscriber();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    loginGoogle,
    signOutAccount,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
