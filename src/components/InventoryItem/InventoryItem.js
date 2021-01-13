import React from 'react';
import { useDispatch } from 'react-redux';

// material-ui
import useStyles from './styles';
import { Card, CardContent, CardActions, Button, CardMedia, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function InventoryItem (props) {
  const classes = useStyles();
  const item = props.item;
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
            <CardMedia className={classes.media} image={item.image} title={item.name} />
            <div className={classes.overlay}>
                <Typography variant="h6">{item.name}</Typography>
            </div>
            <CardContent>
                <CardActions className={classes.cardActions}>
                <Typography variant="body1" color="textSecondary">${item.price}</Typography>
                  <Button variant="outlined" style={{color: 'slateblue'}} size="medium">
                    Remove
                    <DeleteIcon />
                  </Button>
                  <Button variant="outlined" style={{color: 'slateblue'}} size="medium" >
                    Edit
                    <MoreHorizIcon />
                  </Button>
                </CardActions>
            </CardContent>
        </Card>
  );
}

export default InventoryItem;
