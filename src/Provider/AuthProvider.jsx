// @ts-nocheck
import propTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/Firebase.Config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // github login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // sign up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // using observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authentications = {
    googleLogin,
    githubLogin,
    createUser,
    signIn,
    logOut,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: propTypes.node,
};
export default AuthProvider;
