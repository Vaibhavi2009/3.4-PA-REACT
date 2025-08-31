import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [displayedMessage, setDisplayedMessage] = useState("Hello World");

  return (
    <main className="container">
      <header className="header">
        <h1>React Message Display</h1>
      </header>

      <section className="card">
        <label htmlFor="messageInput" className="label">
          Message to Display
        </label>

        <input
          id="messageInput"
          type="text"
          placeholder="Type your message here…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input"
        />

        <button
          onClick={() => setDisplayedMessage(message)}
          className="button"
        >
          Display Message
        </button>

        <h2 className="display">{displayedMessage}</h2>
      </section>

      <footer className="footer">
        <small>Built with React</small>
      </footer>
    </main>
  );
}

export default App;
