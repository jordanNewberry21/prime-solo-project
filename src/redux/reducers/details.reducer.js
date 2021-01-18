const details = (state = [], action) => {
    switch (action.type) {
      case 'SET_DETAILS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // inventory will be on the redux state at:
  // state.inventory
  export default details;