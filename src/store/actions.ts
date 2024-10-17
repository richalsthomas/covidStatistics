import { StateType } from "../data/covidData";

export type actionType =
  | {
      type: "SET_STATE_FILTER";
      state: StateType;
    }
  | {
      type: "REMOVE_STATE_FILTER";
      state: StateType;
    }
  | {
      type: "CLEAR_STATE_FILTER";
    };

export const setStateFilter = (state: StateType) => {
  return {
    type: "SET_STATE_FILTER",
    state: state,
  };
};

export const removeStateFilter = (state: StateType) => {
  return {
    type: "REMOVE_STATE_FILTER",
    state: state,
  };
};

export const clearStateFilter = () => {
  return {
    type: "CLEAR_STATE_FILTER",
  };
};
