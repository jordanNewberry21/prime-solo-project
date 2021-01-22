import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
    const history = useHistory();
    

    return (

      <div className={classes.review}>
        <div className={classes.layout}>
            <h2>Checkout</h2>
            <h3>
                {
                    user.id ? 
                        `Thank you for shopping at Creations by Casey, ${user.first_name}!` 
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
            <Button 
                variant="outlined"
                style={{backgroundColor: 'slateblue', color: 'aliceblue' }}
                onClick={history.push('/confirm')}>Place Order</Button>
        </div>
      </div>
    );
}

export default connect(mapStoreToProps)(Checkout);
