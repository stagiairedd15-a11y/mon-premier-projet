import React from 'react'

function Produit(props) {
  return (
    <div>
        <p>Designation: {props.designation}</p>
        <p>Prix: {props.prix}</p>
        <p>Categorie: {props.categorie}</p>
        <p>Quantite: {props.quantite}</p>
    </div>
  )
}

export default Produit