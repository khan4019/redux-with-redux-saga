import React, { Component } from 'react';
import data from '../data/productData.json';
import Photo from './Photo';
import Header from './Header';

class Feed extends Component {
    constructor() {
        super();
        this.state ={
            products:[],
            cart:[]
        }
    }
    componentDidMount() {
        this.setState({products:data})
    }

    toggleCart = (id) => {
        const cart = this.state.cart;
        let newCart;
        if(cart.includes(id)){
            newCart = cart.filter(curr => curr !== id);
        }
        else {
            newCart = [...cart, id]
        }
        this.setState({cart:newCart});
    }
    
    render() {
        return (
            <>
            <Header cart={this.state.cart}></Header>
            <div style={{marginLeft:'20%'}}>
                <h1>Insta Waste of your money</h1>
                {
                    this.state.products.map(product=>
                    <Photo 
                        key={product.id}
                        product={product}
                        toggleCart={this.toggleCart}
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