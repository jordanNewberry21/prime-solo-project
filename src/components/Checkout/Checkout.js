import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// components
import Total from './total';
import RegisterForm from '../RegisterForm/RegisterForm';

//material-ui
import useStyles from './styles';
import { Button } from '@material-ui/core';

function Checkout(props) {
  
    // hooks
    const cart = useSelector((store) => store.cart);
    const user = useSelector((store) => store.user);
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    // checkout function
    const checkout = () => {
        history.push('/confirm');
        dispatch({ type: 'CLEAR_CART' });
    }
    

    return (

      <div className={classes.review}>
        <div className={classes.layout}>
            <div>
                <h2 className={classes.header}>Checkout</h2>
            </div>
            {/* ternary operator, checking for user.id, assuming that this is a first-time user
            requiring registration if not logged in. this doesn't account for returning customers
            that haven't logged in and could be confusing for them. If the user is logged in,
            display name and thank for returning, if not logged in display registerForm */}
            <h3>
                {
                    user.id ? 
                        `Thank you for shopping at Creations by Casey, ${user.first_name}!` 
                            :
                        <> 
                            <div>
                                <h4>Please Register to to help complete the order.</h4>
                            </div>
                            <RegisterForm className={classes.layout} />
                        </>
                }
            </h3>
            <h4>{cart.length} Item(s) </h4>
            {/* ul is displaying items in the cart */}
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
                onClick={checkout}>Place Order</Button>
        </div>
      </div>
    );
}

export default Checkout;
