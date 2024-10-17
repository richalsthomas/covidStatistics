import { createStore } from "redux";
import filterReducer from "./reducers";

const store = createStore(filterReducer as any);

export type RootState = ReturnType<typeof store.getState>;

export default store;
