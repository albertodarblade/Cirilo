import { configureStore } from "@reduxjs/toolkit";

import queries from "./queries";
import rootReducer from "./rootReducer";

// create a makeStore function
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(queries.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
