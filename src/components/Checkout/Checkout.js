import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Total from './total';

function Checkout(props) {
  
    // hooks
    const cart = useSelector((store) => store.cart);

    return (
        <div>
        <h2>Checkout</h2>
        <h4>{cart.length}</h4>
        </div>
    );
}

export default connect(mapStoreToProps)(Checkout);
