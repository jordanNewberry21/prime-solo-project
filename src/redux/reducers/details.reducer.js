const details = (state = [], action) => {
    switch (action.type) {
      case 'SET_DETAILS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // details will be on the redux state at:
  // state.details
  export default details;