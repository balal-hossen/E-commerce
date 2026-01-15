import React, { createContext, useEffect, useState } from "react";
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

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

// Admin email define
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL; // ✨ Change this to your admin email

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
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
    sendPasswordResetEmail(auth, email, { url: "http://localhost:3000/login" });

  // Logout
  const logOut = async () => {
    await signOut(auth);
    window.location.reload();
  };

  // Auth observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAdmin(currentUser?.email === ADMIN_EMAIL);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin,
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
