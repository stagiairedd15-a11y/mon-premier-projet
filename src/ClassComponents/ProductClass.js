import React from "react";
export default class ProductClass extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='col'>
                <div className='card'>
                    <img src={`images/${this.props.produit.thumbnail}`} className='card-img-top' />
                    <div className='card-body'>
                        <p className='card-title'>{this.props.produit.title}</p>
                        <p className='card-text'>{this.props.produit.price}</p>
                        <button className='btn btn-outline-secondary'>Ajouter au panier</button>
                    </div>
                </div>
            </div>
        )
    }
}