import React from 'react'
import Produit from './Produit'
const produits = [
    {
        Designation: " Produit AA",
        Prix: 150,
        Categorie: "Cat1",
        Quantite: 25
    },
    {
        Designation: " Produit BB",
        Prix: 75,
        Categorie: "Cat2",
        Quantite: 14
    }
]

function ListeProduits() {
    return (
        produits.map((p,index)=> 
            <Produit 
                designation={p.Designation}
                prix={p.Prix}
                categorie={p.Categorie}
                quantite={p.Quantite}
            />
        )
    )
}

export default ListeProduits