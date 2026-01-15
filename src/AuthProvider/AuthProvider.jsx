import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../Firebase.config";
import { AuthContext } from "./Authcontext";


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register
  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // Login
  const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

  // Google login
  const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

  // Update profile
  const updateUserProfile = (profile) => updateProfile(auth.currentUser, profile);

  // Reset Password
  const resetPassword = (email) =>
    sendPasswordResetEmail(auth, email, {
      url: "http://localhost:3000/login", // reset link
    });

  // Logout
  const logOut = async () => {
    await signOut(auth);
    window.location.reload();
  };

  // Auth Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        updateUserProfile,
        resetPassword,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
