import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// material-ui
import useStyles from './styles';
import { Card, CardContent, CardActions, Button, CardMedia, Typography } from '@material-ui/core';
import Dialog from '../Dialog/Dialog';

function InventoryItem (props) {

  // hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  const item = props.item;
  const user = props.user;
  const history = useHistory();
  const [cartButton, toggleCartButton] = useState(true);

  const addToCart = () => {
    toggleCartButton(!cartButton);
    dispatch({ type: 'ADD', payload: item });
  }

  const removeFromCart = () => {
    toggleCartButton(!cartButton);
    dispatch({ type: 'REMOVE', payload: item.id });
  }

  const goToDetails = () => {
    history.push('/details');
  }

  return (
    <Card className={classes.card}>
            <CardMedia onClick={() => goToDetails()}
              className={classes.media} image={item.image} title={item.name} />
            <div className={classes.overlay}>
                <Typography variant="h6">{item.name}</Typography>
            </div>
            <CardContent>
                <CardActions className={classes.cardActions}>
                <Typography variant="body1" color="textSecondary">${item.price}</Typography>
                {user.admin ? 
                <>
                  <Button variant="outlined" style={{color: 'slateblue', backgroundColor: 'aliceblue'}} size="small" onClick={() => dispatch({ type: 'DELETE', payload: item.id })}>
                    Remove 
                    
                  </Button>
                  <Dialog size="small" style={{color: 'slateblue', backgroundColor: 'aliceblue'}} itemToUpdate={item} /> 
                </> : 
                <>
                  {cartButton ? 
                    <Button fullWidth variant="outlined" style={{color: 'slateblue', backgroundColor: 'aliceblue'}} size="small" onClick={() => addToCart()}>Add to Cart</Button> 
                    : 
                    <Button fullWidth variant="outlined" style={{color: 'aliceblue', backgroundColor: 'slateblue'}} size="small" onClick={() => removeFromCart()}>Remove</Button>
                    }
                  
                  
                </>
                }
                </CardActions>
            </CardContent>
        </Card>
  );
}

export default InventoryItem;
