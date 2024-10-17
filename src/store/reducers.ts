import { actionType } from "./actions";

const initialState = {
  selectedStates: [],
};

const filterReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case "SET_STATE_FILTER":
      return {
        ...state,
        selectedStates: [...state.selectedStates, action.state],
      };
    case "REMOVE_STATE_FILTER":
      return {
        ...state,
        selectedStates: state.selectedStates.filter(
          (state) => state !== action.state
        ),
      };
    case "CLEAR_STATE_FILTER":
      return {
        ...state,
        selectedStates: [],
      };
    default:
  }
};

export default filterReducer;
