import actions from "./actions";

export const switchType = type => dispatch => {
  console.log(type);
  dispatch(actions.typeSwitch(type));
};
