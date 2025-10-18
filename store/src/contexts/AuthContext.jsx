// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // minimal user info - add more fields if needed
        const simpleUser = {
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName,
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL,
        };
        setUser(simpleUser);
      } else {
        setUser(null);
      }
      setInitializing(false);
    });
    return unsubscribe;
  }, []);

  // Google login using popup
  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
      // onAuthStateChanged will update the user
    } catch (err) {
      console.error("Google sign-in error:", err);
      throw err;
    }
  }

  async function signOut() {
    try {
      await firebaseSignOut(auth);
      setUser(null);
    } catch (err) {
      console.error("Sign out error:", err);
      throw err;
    }
  }

  const value = {
    user,
    initializing,
    signInWithGoogle,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {initializing ? null : children}
    </AuthContext.Provider>
  );
}
