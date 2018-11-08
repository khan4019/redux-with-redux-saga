
import Header from '../components/Header';
import React from 'react';
import { connect } from 'react-redux';
const mapStateToProps = state => ({
    cart:state
})

const HeaderWithProps = ({cart}) => (
    <Header cart={cart}></Header>
)

const HeaderContainer = connect(
    mapStateToProps
)(HeaderWithProps);

export default HeaderContainer;