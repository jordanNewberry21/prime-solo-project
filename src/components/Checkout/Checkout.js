import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Total from './total';
import RegisterForm from '../RegisterForm/RegisterForm';
import PaymentForm from '../PaymentForm/PaymentForm';
import Review from '../Review/Review';

//material-ui
import useStyles from './styles';
import {
    CssBaseline,
    Paper,
    Stepper,
    Step,
    StepLabel,
    Button,
    Link,
    Typography
} from '@material-ui/core';

function Checkout(props) {
  
    // hooks
    const cart = useSelector((store) => store.cart);
    const user = useSelector((store) => store.user);
    const classes = useStyles();
    

    return (

      <div className={classes.review}>
        <div >
            <h2>Checkout</h2>
            <h3>
                {
                    user.id ? 
                        `Thank you for returning to shop at Creations by Casey, ${user.first_name}!
                        I remember you from last time.` 
                            :
                        <> 
                            <div>
                                <h4>Please Register to to help complete the order.</h4>
                            </div>
                            <RegisterForm />
                        </>
                }
            </h3>
            <h4>{cart.length} Item(s) </h4>
            <ul>
                {
                    cart.map((item, i) => (
                        <li key={i}>
                            {item.name}: ${item.price}
                        </li>
                    ))}
            </ul>
            <h3>Total: <Total cart={cart} /></h3>
        </div>
      </div>
    );
}

export default connect(mapStoreToProps)(Checkout);
