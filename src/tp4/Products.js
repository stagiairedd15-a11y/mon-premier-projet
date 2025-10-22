import React from 'react'
import Product from './Product';

function Products({products}) {
    return (
        <div className='row border border-2'>
            {
                products.map(p =>
                    <Product
                        key={p.id}
                        // img={p.thumbnail}
                        // title={p.title}
                        // text={p.price}
                        produit = {p}
                    />
                )
            }
        </div>
    )
}

export default Products