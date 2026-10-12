import { configureStore } from "@reduxjs/toolkit";
import batchReducer from "./slices/batchSlice";

const store = configureStore({
  reducer: {
    batches: batchReducer,
  },
});

export default store;
