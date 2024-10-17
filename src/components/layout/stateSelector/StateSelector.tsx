import { useDispatch, useSelector } from "react-redux";
import { covidData } from "../../../data/covidData";
import "./StateSelector.css";
import TextBubble from "./TextBubble";

export default function StateSelector() {
  const dispatch = useDispatch();
  const selectedStates = useSelector((state: any) => state?.selectedStates);

  return (
    <div className="container">
      <div className="bubbleContainer">
        {selectedStates?.map((state: any) => {
          return (
            <TextBubble
              key={state}
              text={state}
              onClose={() => dispatch({ type: "REMOVE_STATE_FILTER", state })}
            />
          );
        })}
      </div>
      {selectedStates?.length > 0 && (
        <button
          className="clearButton"
          onClick={() => dispatch({ type: "CLEAR_STATE_FILTER" })}
        >
          Clear
        </button>
      )}
      <select
        value="select_states"
        onChange={(e) => {
          dispatch({ type: "SET_STATE_FILTER", state: e.target.value });
        }}
        className="dropdown-input"
      >
        <option value="select_states" hidden disabled>
          Select a state
        </option>
        {covidData
          .filter((state) => !selectedStates?.includes(state.state))
          .map((data) => {
            return (
              <option key={data.state} value={data.state}>
                {data.state}
              </option>
            );
          })}
      </select>
    </div>
  );
}
