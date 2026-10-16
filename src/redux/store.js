import { configureStore } from "@reduxjs/toolkit";
import batchReducer from "./slices/batchSlice";
import courseReducer from "./slices/courseSlice";

const store = configureStore({
  reducer: {
    batches: batchReducer,
    courses: courseReducer,
  },
});

export default store;
