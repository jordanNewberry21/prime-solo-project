const inventory = (state = [], action) => {
    switch (action.type) {
      case 'SET_ALL':
        return action.payload;
      default:
        return state;
    }
  };
  
  // inventory will be on the redux state at:
  // state.inventory
  export default inventory;