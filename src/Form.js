import React, { useState } from 'react';

function Form() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(`salut nom: ${nom} prenom:${prenom}`);
  };

  return (
    <div style={{ backgroundColor: '#f8e9ef', padding: '50px', textAlign: 'center' }}>
      <h1>Formulaire Inscription</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom: </label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Prenom: </label>
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
