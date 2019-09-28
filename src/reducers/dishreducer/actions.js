import types from "./types";

const add = item => ({
  type: types.ADD_DISH,
  item
});
const typeSwitch = item => ({
  type: types.TYPE_SWITCH,
  item
});

export default {
  add,
  typeSwitch
};
