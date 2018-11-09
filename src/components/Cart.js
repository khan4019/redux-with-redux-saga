import React from 'react';
import Photo from './Photo';

const Cart = ({products}) => {
    return (
        <div>
            {
                products.map(product =>
                    <img 
                    key={product.id}
                    style={{height:'300px', width:'300px'}}
                    src={product.url} alt=""/>
                )
            }
        </div>
    );
};

export default Cart;