import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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
  const [updateProfile, setUpdateProfile] = useState({ photo: '', name: '' });
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
  // account create with email and password
  const signupEmailPass = (email, password) => {
    setLoadin(false);
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  // account login with email and password
  const signInEmailPass = (email, password) => {
    setLoadin(false);
    return signInWithEmailAndPassword(Auth, email, password);
  };
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
      setLoadin(false);
      console.log(currentUser);
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
    signupEmailPass,
    signInEmailPass,
    updateProfile,
    setUpdateProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
