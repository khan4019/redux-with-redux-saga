import React from 'react';

const headerStyle={
    height:'50px',
    borderBottom:'1px solid lightgray',
    paddingLeft:'15%'
}

const Header = ({cart}) => {
    const countStyle={
        fontWeight:700,
        color:'#e94949',
        display:(cart.length)?'inline':'none',
        position:'fixed',
        backgroundColor:'white',
        width:'100%'
    }
    return (
        <div style={headerStyle}>
            <div className="icon-container">
                <div className="sprite icon logo-icon"></div>
                <div className="divider"></div>
                <div className="sprite icon logo-name"></div>
                <div style={{width:'25%'}}></div>
                <div className="sprite icon heart-empty"></div>
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