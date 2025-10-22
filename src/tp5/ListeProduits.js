import react from "react";
import Produits from './Produit'
const produits = [{
    "Designation": " Produit AA",
    "Prix": 150,
    "Categorie": "Cat1",
    "Quantite": 25
},
{
    "Designation": " Produit BB",
    "Prix": 75,
    "Categorie": "Cat2",
    "Quantite": 14
},
]
function ListeProduits() {
    return (
        <div>
            {produits.map((prod, index) =>(
                <Produits
                    key={index}
                    Designation={prod.Designation}
                    Categorie={prod.Categorie}
                    Quantite={prod.Quantite}
                />))}
        </div>
    );
}
export default ListeProduits;