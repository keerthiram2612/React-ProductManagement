// src/components/GoogleSignInButton.jsx
import React from "react";
import useGoogleIdentity from "../hooks/useGoogleIdentity";

export default function GoogleSignInButton({ onSign }) {
  useGoogleIdentity(onSign);

  function renderButton() {
    if (!window.google) return;
    window.google.accounts.id.renderButton(
      document.getElementById("g_id_signin"),
      { theme: "outline", size: "large" }
    );
  }

  React.useEffect(() => {
    const t = setTimeout(renderButton, 300); // give script time to load
    return () => clearTimeout(t);
  }, []);

  return <div id="g_id_signin"></div>;
}
