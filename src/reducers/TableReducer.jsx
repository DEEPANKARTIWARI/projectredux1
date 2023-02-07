const initialstate = [];

let tableReducer = (state = initialstate, actions) => {
  switch (actions.type) {
    case "DISPLAY_DATA":
      return [...actions.payload];
    default:
      return state;
  }
};
export default tableReducer;
