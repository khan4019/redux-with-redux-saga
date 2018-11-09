import React from 'react';
import data from '../data/productData.json';
const Single = ({match}) => {
    const id = parseInt(match.params.id);
    const product = data.find( item => item.id === id);
    
    return (
        <div>
            <img style={{width:'100%', height:'100%'}} src={product.url} alt=""/>
        </div>
    );
};

export default Single;