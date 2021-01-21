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
    const classes = useStyles();
    const steps = ['Shipping address', 'Payment details', 'Review your order'];
    const [activeStep, setActiveStep] = useState(0);


    function getStepContent(step) {
    switch (step) {
        case 0:
        return <RegisterForm />;
        case 1:
        return <PaymentForm />;
        case 2:
        return <Review />;
        default:
        throw new Error('Unknown step');
        }
    }

    const handleNext = () => {
        setActiveStep(activeStep + 1);
      };
    
    const handleBack = () => {
        setActiveStep(activeStep - 1);
      };

    return (

        <>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" color="inherit" noWrap>
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <>
                        {activeStep === steps.length ? (
                        <>
                            <Typography variant="h5" gutterBottom>
                            Thank you for your order.
                            </Typography>
                            <Typography variant="subtitle1">
                            Your order number is #2001539. We have emailed your order confirmation, and will
                            send you an update when your order has shipped.
                            </Typography>
                        </>
                        ) : (
                        <>
                            {getStepContent(activeStep)}
                            <div className={classes.buttons}>
                            {activeStep !== 0 && (
                                <Button onClick={handleBack} className={classes.button}>
                                Back
                                </Button>
                            )}
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                            </Button>
                            </div>
                        </>
                        )}
                    </>
                </Paper>
            </main>
        </>



        // <div>
        // <h2>Checkout</h2>
        // <h4>{cart.length} Item(s) </h4>
        // <ul>
        //     {
        //         cart.map((item, i) => (
        //             <li key={i}>
        //                 {item.name}: ${item.price}
        //             </li>
        //         ))}
        // </ul>
        // <h3>Total: <Total cart={cart} /></h3>
        // </div>
    );
}

export default connect(mapStoreToProps)(Checkout);
