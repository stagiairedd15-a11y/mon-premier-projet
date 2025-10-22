import React from 'react'

function Product({produit}) {
    return (
        <div className='col'>
            <div className='card'>
                <img src={`images/${produit.thumbnail}`} className='card-img-top' />
                <div className='card-body'>
                    <p className='card-title'>{produit.title}</p>
                    <p className='card-text'>{produit.price}</p>
                    <button className='btn btn-outline-secondary'>Ajouter au panier</button>
                </div>
            </div>
        </div>
    )
}

export default Product