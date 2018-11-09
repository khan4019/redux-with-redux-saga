import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Photo extends Component {
   
    render() {
        const {product, liked, toggleCart} = this.props;
        
        const heartClass = `sprite icon ${(liked)?'heart-filled':'heart-empty'}`
        return (
            <div style={{marginBottom:'20px'}}>
                <img 
                    style={{width: '30px', height: '30px', borderRadius:'50%'}}
                    src={product.profileUrl} 
                    alt=""
                />
                
                <span>{product.name}</span>
                <br/>
                <Link to={`/photo/${product.id}`}>
                    <img 
                        style={{height:'300px', width:'300px'}}
                        src={this.props.product.url} alt=""/>
                    
                </Link>    
                <div className="icon-container">
                    <div
                     className={heartClass}
                     onClick={
                         ()=>{
                            toggleCart(product.id)
                         }
                     }
                    ></div>
                    <div className="sprite icon comment"></div>
                </div>
            </div>
        );
    }
}

export default Photo;