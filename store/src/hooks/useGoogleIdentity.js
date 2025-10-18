// src/hooks/useGoogleIdentity.js
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

export default function useGoogleIdentity(onCredential) {
  useEffect(() => {
    /* global google */
    if (!window.google) return;

    window.google.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com",
      callback: (response) => {
        // response.credential is a JWT containing user info
        const payload = jwt_decode(response.credential);
        // payload contains name, email, picture
        onCredential(payload, response.credential);
      },
    });
  }, [onCredential]);
}
