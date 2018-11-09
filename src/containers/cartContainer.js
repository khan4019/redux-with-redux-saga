import React from 'react';
import Cart from '../components/Cart';
import { connect } from 'react-redux';
const mapStateToProp = state =>({
    products:state.products.filter(pd => state.cart.includes(pd.id))
})

const cartWithProps = ({products }) =>(
    <Cart products={products}></Cart>
)

const CartContainer = connect(
    mapStateToProp
)(cartWithProps);

export default CartContainer;