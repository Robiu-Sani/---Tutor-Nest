import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../../RootComponents/Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
export default function Context({ children }) {
  const GoogleProvidor = new GoogleAuthProvider();
  const [loader, setLoader] = useState(true);
  const [LogedUser, setLogedUser] = useState();

  const createUserByEmail = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LoginUserByEmail = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LoginWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, GoogleProvidor);
  };

  const LogOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const updateUserProfile = (data) => {
    setLoader(true);
    return updateProfile(auth.currentUser, data);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLogedUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const ContextData = {
    createUserByEmail,
    updateUserProfile,
    LoginUserByEmail,
    LoginWithGoogle,
    LogOut,
    loader,
    LogedUser,
  };
  return (
    <AuthContext.Provider value={ContextData}>{children}</AuthContext.Provider>
  );
}

Context.propTypes = {
  children: PropTypes.node,
};
