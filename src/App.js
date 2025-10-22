import React, { useState } from "react";
function App() {
  const [name, setName] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = {
    hamza: "1234",
    anas: "admin",
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!name || !password) {
      setErrorMessages({ name: "incomplet", message: "Veuillez remplir tous les champs." });
      return;
    }

    if (database[name] && database[name] === password) {
      setIsSubmitted(true);
      setErrorMessages({});
    } else {
      setErrorMessages({ name: "identifiants", message: "Identifiant ou mot de passe incorrect." });
    }
  }; 
  
  const renderErrorMessage = (field) =>
    errorMessages.name === field && (
      <div style={{ color: "red", fontSize: "0.9em" }}>{errorMessages.message}</div>
    );

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <div style={{ border: "1px solid #ddd", padding: "30px", borderRadius: "10px", width: "300px" }}>
        <h2 style={{ textAlign: "center" }}>Connexion</h2>

        {isSubmitted ? (
          <div style={{ color: "green", textAlign: "center" }}>
            ✅ Connexion réussie ! Bienvenue, {name}.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label>L'identifiant :</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%", marginTop: "5px", marginBottom: "10px" }}
              />
              {renderErrorMessage("incomplet")}
            </div>

            <div>
              <label>Mot de passe :</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "100%", marginTop: "5px", marginBottom: "10px" }}
              />
            </div>

            {renderErrorMessage("identifiants")}

            <button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "mediumseagreen",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Se connecter
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
