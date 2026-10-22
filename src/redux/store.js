import { configureStore } from "@reduxjs/toolkit";
import batchReducer from "./slices/batchSlice";
import courseReducer from "./slices/courseSlice";
import quizReducer from "./slices/quizSlice";

const store = configureStore({
  reducer: {
    batches: batchReducer,
    courses: courseReducer,
    quiz: quizReducer,
  },
});

export default store;
