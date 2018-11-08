import React, { Component } from 'react';

class Photo extends Component {
    render() {
        const product = this.props.product;
        return (
            <div style={{marginBottom:'20px'}}>
                <img 
                    style={{width: '30px', height: '30px', borderRadius:'50%'}}
                    src={product.profileUrl} 
                    alt=""
                />
                
                <span>{product.name}</span>
                <br/>
                <img 
                    style={{height:'300px', width:'300px'}}
                    src={this.props.product.url} alt=""/>
                <div className="icon-container">
                    <div className="sprite icon heart-empty"></div>
                    <div className="sprite icon comment"></div>
                </div>
            </div>
        );
    }
}

export default Photo;