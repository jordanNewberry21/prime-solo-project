import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// material-ui
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

function ItemDetails(props) {
  
  // hooks
  const item = props.store.details;
  const classes = useStyles();
  const [cartButton, toggleCartButton] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const addToCart = () => {
    toggleCartButton(!cartButton);
    dispatch({ type: 'ADD', payload: item });
  }

  const removeFromCart = () => {
    toggleCartButton(!cartButton);
    dispatch({ type: 'REMOVE', payload: item.id });
  }

  const backToStore = () => {
    history.push('/store');
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
              <img className={classes.img} alt={item.name} src={item.image} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                {item.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {item.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: {item.id}
                </Typography>
              </Grid>
              <Grid item>
              <>
                  {cartButton ? 
                    <Button className={classes.button} variant="outlined" style={{ cursor: 'pointer', color: 'slateblue', backgroundColor: 'aliceblue' }} size="large" onClick={() => addToCart()}>Add to Cart</Button> 
                    : 
                    <Button className={classes.button} variant="outlined" style={{ cursor: 'pointer', color: 'aliceblue', backgroundColor: 'slateblue' }} size="large" onClick={() => removeFromCart()}>Remove</Button>
                    }
                </>
                <Button className={classes.button} variant="outlined" style={{ cursor: 'pointer', color: 'aliceblue', backgroundColor: 'slateblue' }} size="large" onClick={() => backToStore()} >Back to Store</Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="textSecondary" >${item.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default connect(mapStoreToProps)(ItemDetails);
