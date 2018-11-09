import React, { Component } from 'react';
import data from '../data/productData.json';
import Photo from './Photo';

class Feed extends Component {
    constructor() {
        super();
        this.state ={
            products:[]
        }
    }
    componentDidMount() {
        this.setState({products:data})
    }
    
    render() {
        const {cart, products, toggleToCart} = this.props;
        return (
            <>
            <div style={{marginLeft:'20%'}}>
                <h1>Insta Waste of your money</h1>
                {
                    products.map(product=>
                    <Photo 
                        key={product.id}
                        product={product}
                        liked = {cart.includes(product.id)}
                        toggleCart={toggleToCart}
                    >
                    </Photo>
                    )
                }
            </div>
            </>
        );
    }
}

export default Feed;