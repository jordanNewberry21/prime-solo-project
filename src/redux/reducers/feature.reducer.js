const feature = (state = [], action) => {
    switch (action.type) {
      case 'SET_ALL':
        let inventory = action.payload;
        return inventory.filter(e => e.featured);
      default:
        return state;
    }
  };
  
  // feature will be on the redux state at:
  // state.feature
  export default feature;