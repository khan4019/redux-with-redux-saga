import React from 'react';

const headerStyle={
    height:'50px',
    borderBottom:'1px solid lightgray',
    paddingLeft:'15%',
    position:'fixed',
    top:0,
    width:'100%',
    backgroundColor:'white'
}

const Header = ({cart}) => {
    const countStyle={
        fontWeight:700,
        color:'#e94949',
        display:(cart.length)?'inline':'none'
    }
    const heartClass = `sprite icon ${(cart.length)?'heart-filled':'heart-empty'}`
    return (
        <div style={headerStyle}>
            <div className="icon-container">
                <div className="sprite icon logo-icon"></div>
                <div className="divider"></div>
                <div className="sprite icon logo-name"></div>
                <div style={{width:'25%'}}></div>
                <div className={heartClass}></div>
                <sup style={countStyle}>{cart.length}</sup>
                <div className="sprite icon profile"></div>
            </div>
        </div>
    );
};

Header.defaultProps = {
    cart:[]
}

export default Header;