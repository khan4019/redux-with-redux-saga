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
        return (
            <div style={{marginLeft:'20%'}}>
                <h1>Insta Waste of your money</h1>
                {
                    this.state.products.map(product=>
                    <Photo 
                        key={product.id}
                        product={product}
                    
                    >
                    </Photo>
                    )
                }
            </div>
        );
    }
}

export default Feed;