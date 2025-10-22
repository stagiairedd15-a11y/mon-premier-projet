import React, { useState } from "react";

function Inscription() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [resultat, setResultat] = useState("");

  const afficherInfos = () => {
    setResultat(`nom: ${nom} prenom: ${prenom}`);
  };

  return (
    <div >
      <h2>Inscription</h2>

      <label>Nom : </label>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <br /><br />

      <label>Prenom : </label>
      <input
        type="text"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
      />
      <br /><br />

      <button onClick={() => afficherInfos()}>Afficher</button>

      <p>{resultat}</p>
    </div>
  );
}

export default Inscription;
