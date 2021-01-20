import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

function Checkout(props) {
  
    // hooks
    const [heading, setHeading] = useState('Checkout');

    return (
        <div>
        <h2>{heading}</h2>
        </div>
    );
}

export default connect(mapStoreToProps)(Checkout);
