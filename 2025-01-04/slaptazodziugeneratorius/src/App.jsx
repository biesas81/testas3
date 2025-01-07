import React from "react";
import PasswordGenerator from "./components/PasswordGenerator.jsx";

function App() {
  return (

    <div className="container" style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      <h1>Need a password? try the 1Password Strong Password Generator.</h1>
      <h6>Generate secure, random passwords to stay safe online</h6>
      <PasswordGenerator />
    </div>
  );
}

export default App;
