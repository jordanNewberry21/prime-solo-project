const feature = (state = [], action) => {
    switch (action.type) {
      case 'GET_FEATURES':
        return state.filter(e => action.payload !== e.featured);
      default:
        return state;
    }
  };
  
  // feature will be on the redux state at:
  // state.feature
  export default feature;