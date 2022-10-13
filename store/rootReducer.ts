import { combineReducers } from "redux";

import queries from "./queries";
import globalSlice from "./slices/global";

const rootReducer = combineReducers({
  globalSlice,
  [queries.reducerPath]: queries.reducer,
});

export default rootReducer;
