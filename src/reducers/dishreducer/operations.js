import actions from "./actions";
import axios from "axios";

export const switchType = type => dispatch => {
  dispatch(actions.typeSwitch(type));
};

export const addDish = async dish => {
  axios
    .post("https://frosty-wood-6558.getsandbox.com:443/dishes", dish)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.response);
    });
};
