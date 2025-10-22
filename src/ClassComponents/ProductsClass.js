import React ,{Component} from "react";
import ProductClass from './ProductClass';

export default class ProductsClass extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='row border border-2'>
                {
                    this.props.listeProducts.map(p =>
                        <ProductClass
                            key={p.id}
                            produit={p}
                        />
                    )
                }
            </div>
        )
    }
}
