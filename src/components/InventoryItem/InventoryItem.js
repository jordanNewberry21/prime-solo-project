import React from 'react';
import { useDispatch } from 'react-redux';

// material-ui
import useStyles from './styles';
import { Card, CardContent, CardActions, Button, CardMedia, Typography } from '@material-ui/core';
import Dialog from '../Dialog/Dialog';

function InventoryItem (props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const item = props.item;
  const user = props.user;

  return (
    <Card className={classes.card}>
            <CardMedia className={classes.media} image={item.image} title={item.name} />
            <div className={classes.overlay}>
                <Typography variant="h6">{item.name}</Typography>
            </div>
            <CardContent>
                <CardActions className={classes.cardActions}>
                <Typography variant="body1" color="textSecondary">${item.price}</Typography>
                {user.admin ? 
                <>
                  <Button variant="outlined" style={{color: 'slateblue'}} size="small" onClick={() => dispatch({ type: 'DELETE', payload: item.id })}>
                    Remove 
                    
                  </Button>
                  <Dialog size="small" itemToUpdate={item} /> 
                </> : 
                <>
                  <Button fullWidth variant="outlined" style={{color: 'slateblue'}} size="small" onClick={() => dispatch({ type: 'ADD', payload: item })}>Add to Cart</Button>
                  <Button fullWidth variant="outlined" style={{color: 'slateblue'}} size="small" onClick={() => dispatch({ type: 'REMOVE', payload: item.id })}>Remove</Button>
                </>
                }
                </CardActions>
            </CardContent>
        </Card>
  );
}

export default InventoryItem;
