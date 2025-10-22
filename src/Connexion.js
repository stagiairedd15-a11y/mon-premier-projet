import React, { useState } from 'react';
 
function Connexion() {
    const [identifiant, setIdentifiant] = useState('')
    const [motPasse, setMotPasse] = useState('')
    const [errIdentifiant, setErrIdentifiant] = useState(false)
    const [errMotPasse, setErrMotPasse] = useState(false)
    const [validUser, setValidUser] = useState(false)
    const database = [
        { username: "user1", password: "pass1" },
        { username: "user2", password: "pass2" }
    ];
    function handleChangeIdentifiant(e) {
        setIdentifiant(e.target.value)
    }
    function handleChangeMotPasse(e) {
        setMotPasse(e.target.value)
    }
    function handleClick() {
        if (!identifiant || !motPasse)
            return
        const user = database.find(u => u.username == identifiant)
        if (!user)
            setErrIdentifiant(true)
        else {
            setErrIdentifiant(false)
            if (user.password != motPasse)
                setErrMotPasse(true)
            else {
                setValidUser(true)
                setErrMotPasse(false)
            }
        }
 
    }
 
    return (
        <>
            {!validUser &&
                <div>
                    <h1>Connexion</h1>
                    <label>
                        Identifiant
                        <input type='text'
                            onChange={handleChangeIdentifiant} />
                    </label><br />
                    {errIdentifiant &&
                        <p style={{ color: 'red' }}>Votre identifiant est incorrect</p>
                    }
                    <label>
                        <br/>
                        Mot de passe
                        <input type='password'
                            onChange={handleChangeMotPasse} />
                    </label><br />
                    {errMotPasse &&
                        <p style={{ color: 'red' }}>Votre mot de passe est incorrect</p>
                    }
                    <br/>
                    <button
                        className='btn btn-success'
                        onClick={handleClick}
                    >
                        Se connecter
                    </button>
                </div>}
            {validUser &&
                <div>
                    <h2>Accueil</h2>
                    <p>Bonjour {identifiant}</p>
                </div>
            }
        </>
    )
}
 
export default Connexion