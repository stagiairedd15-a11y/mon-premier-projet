import react from "react";
function Produit({ props }) {

    return (
        <div>
            <h1>{props.Designation}</h1>
            <p>{props.Categorie}</p>
            <p>{props.Quantite}</p>
        </div>
    )
};
export default Produit;