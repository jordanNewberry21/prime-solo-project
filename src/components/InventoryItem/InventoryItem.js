import React from 'react';
import { useDispatch } from 'react-redux';

// material-ui
import makeStyles from './styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

function InventoryItem (props) {
  const classes = makeStyles();
  const item = props.item;
  // const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
            <CardMedia className={classes.media} image={item.image} title={item.name} />
            <div className={classes.overlay}>
                <Typography variant="h6">{item.name}</Typography>
            </div>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" >{item.name}</Typography>
            </CardContent>
        </Card>
  );
}

export default InventoryItem;
