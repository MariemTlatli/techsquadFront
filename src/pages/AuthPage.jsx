import React, { useState, useEffect } from "react";
import axios from "axios";

const AuthPage = () => {
  const [authLink, setAuthLink] = useState("");
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState("");

  // Fetch the authentication link on mount
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        if (response.data.includes("http")) {
          setAuthLink(response.data.match(/href="([^"]+)"/)[1]);
        }
      })
      .catch((err) => {
        setError("Failed to load the authentication link.");
        console.error(err);
      });
  }, []);

  // Fetch emails after authentication
  const fetchEmails = async (callbackCode) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/?code=${callbackCode}`
      );
      setEmails(response.data);
    } catch (err) {
      setError("Failed to load emails.");
      console.error(err);
    }
  };

  // Simulate a redirect from Google with the "code" parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (code) {
      fetchEmails(code);
    }
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Gmail Integration</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!authLink && !emails.length && <p>Loading...</p>}
      {authLink && !emails.length && (
        <a
          href={authLink}
          style={{
            textDecoration: "none",
            backgroundColor: "#4285F4",
            color: "white",
            padding: "10px 15px",
            borderRadius: "5px",
            display: "inline-block",
          }}
        >
          Authenticate with Google
        </a>
      )}
      {emails.length > 0 && (
        <div>
          <h2>Emails</h2>
          <ul>
            {emails.map((email, index) => (
              <li key={index}>
                <div dangerouslySetInnerHTML={{ __html: email }} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
