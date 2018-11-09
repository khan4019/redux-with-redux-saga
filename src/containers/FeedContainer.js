import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleToCartAction } from '../actions/productActions';
import Feed from '../components/Feed';


const mapStateToProps = state => ({
    cart:state.cart,
    products:state.products
})

const mapDispatchToProps = dispatch =>({
    toggleToCart: bindActionCreators(toggleToCartAction, dispatch)
})

const FeedWithProps = ({cart, products, toggleToCart}) => (
    <Feed cart={cart} products={products} toggleToCart={toggleToCart}></Feed>
)

const FeedContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FeedWithProps);

export default FeedContainer;