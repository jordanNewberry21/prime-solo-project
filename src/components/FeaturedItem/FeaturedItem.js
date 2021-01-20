import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { useSelector, useDispatch } from 'react-redux';
import InventoryItem from '../InventoryItem/InventoryItem';


function FeaturedItem(props) {
  
    // hooks
    const featuredItems = useSelector((store) => store.feature);
    const user = props.user;

    return (
        <div>
            <h2>Featured Items</h2>
            <Carousel>
                {
                    featuredItems.map((item) => <InventoryItem key={item.id} item={item} user={user} />)
                }
            </Carousel>
        </div>
    );
}

export default connect(mapStoreToProps)(FeaturedItem);

