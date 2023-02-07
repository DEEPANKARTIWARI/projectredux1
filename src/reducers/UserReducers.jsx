let token = { temp: {} };
let userReducers = (state = token, actions) => {
  switch (actions.type) {
    case "DISPLAY_MESSAGE":
      alert(actions.payload.Message);
      return { temp: { ...actions.payload.data } };
    default:
      return state;
  }
};
export default userReducers;
