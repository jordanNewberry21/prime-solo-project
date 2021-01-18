import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

function ItemDetails(props) {
  
  // hooks
  const item = props.store.details;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{JSON.stringify(item)}</p>
    </div>
  );
}

export default connect(mapStoreToProps)(ItemDetails);
