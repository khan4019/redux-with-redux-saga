import React from 'react';
import PropTypes  from 'prop-types';

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

Cart.propTypes = {
    products: PropTypes.array
}

export default Cart;