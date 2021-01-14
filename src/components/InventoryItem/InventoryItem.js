import React from 'react';
import { useDispatch } from 'react-redux';

// material-ui
import useStyles from './styles';
import { Card, CardContent, CardActions, Button, CardMedia, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
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
                  <Button variant="outlined" style={{color: 'slateblue'}} size="medium" onClick={() => dispatch({ type: 'DELETE', payload: item.id })}>
                    Remove &nbsp;
                    <DeleteIcon />
                  </Button>
                  <Dialog itemToUpdate={item} /> 
                </> : 
                  <Button variant="outlined" style={{color: 'slateblue'}} size="medium" fullWidth >Add to Cart</Button>
                }
                </CardActions>
            </CardContent>
        </Card>
  );
}

export default InventoryItem;
