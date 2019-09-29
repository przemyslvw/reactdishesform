import types from "./types";

const INITIAL_STATE = {
  model: [
    {
      name: "",
      preparation_time: 0,
      type: "pizza",
      no_of_slices: 0,
      diameter: 0
    },

    {
      name: "",
      preparation_time: 0,
      type: "soup",
      spiciness_scale: 0
    },

    {
      name: "",
      preparation_time: 0,
      type: "sandwich",
      slices_of_bread: 0
    }
  ],
  currentModel: {
    name: "",
    preparation_time: 0,
    type: ""
  },
  currentType: ""
};

const dishReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case types.TYPE_SWITCH:
      return {
        ...state,
        currentModel: state.model.find(model => model.type === action.item),
        currentType: action.item
      };
    case types.ADD_DISH:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default dishReducer;
