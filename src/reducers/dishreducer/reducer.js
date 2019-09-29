import types from "./types";

const INITIAL_STATE = {
  model: [
    {
      name: "",
      preparation_time: "",
      type: "pizza",
      no_of_slices: "",
      diameter: ""
    },

    {
      name: "",
      preparation_time: "",
      type: "soup",
      spiciness_scale: ""
    },

    {
      name: "",
      preparation_time: "",
      type: "sandwich",
      slices_of_bread: ""
    }
  ],
  currentModel: {
    name: "",
    preparation_time: "",
    type: ""
  },
  type: ""
};

const dishReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case types.TYPE_SWITCH:
      return {
        ...state,
        currentModel: state.model.find(model => model.type === action.item),
        type: action.item
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
