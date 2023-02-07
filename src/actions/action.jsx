import axios from "axios";

//import HTTP from "../config/baseUrlConfig";
export const fetchProductApi = () => {
  return async (dispatch) => {
    let fetchdata = await axios.get(
      "https://p-9x7e.onrender.com/products/products"
    );
    dispatch(displayFetch(fetchdata.data.data));
  };
};
export const displayFetch = (fetchdata) => {
  if (fetchdata) {
    return { type: "DISPLAY_DATA", payload: fetchdata };
  } else {
    return { type: "DISPLAY_DATA", payload: [] };
  }
};
export const fetchUserApi = (newUser) => {
  return async (dispatch) => {
    let registerdata = await axios.post(
      "https://products-jwt.onrender.com/users/register",
      newUser
    );
    dispatch(getMessage(registerdata.data.message));
  };
};
export const checkUserApi = (Loginuser, setTokenStatus) => {
  return async (dispatch) => {
    let checkData = await axios.post(
      "https://products-jwt.onrender.com/users/login",
      Loginuser
    );
    let localtoken = localStorage.getItem("token");
    if (localtoken) {
    } else {
      localStorage.setItem("token", JSON.stringify(checkData.data.data));
      setTokenStatus(true);
    }
    dispatch(getMessage(checkData.data.message, checkData.data.data));
  };
};
export const getMessage = (Msg, data) => {
  return { type: "DISPLAY_MESSAGE", payload: { Message: Msg, data: data } };
};

export const addSubscription = (subscriptionData, setMysubs, mysubs) => {
  let token = JSON.parse(localStorage.getItem("token"));
  let ls = localStorage.getItem(token.fname);
  let temp;
  if (ls == null) {
    temp = [];
  } else {
    temp = JSON.parse(ls);
  }
  temp.push(subscriptionData);
  localStorage.setItem(token.fname, JSON.stringify(temp));
  setMysubs(!mysubs);
};
