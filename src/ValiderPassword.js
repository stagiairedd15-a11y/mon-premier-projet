import React, { useState } from 'react';

function ValiderPassword() {
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Valider Password</h1>
      <label>
        Password :
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Arrow function
        />
      </label>

      {/* Vérification conditionnelle */}
      {password && password.length < 4 && (
        <p style={{ color: 'red' }}>
          Votre mot de passe doit contenir au moins 4 caractères
        </p>
      )}
    </div>
  );
}

export default ValiderPassword;
