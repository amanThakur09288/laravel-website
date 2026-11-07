import { configureStore } from "@reduxjs/toolkit";
import batchReducer from "./slices/batchSlice";
import courseReducer from "./slices/courseSlice";
import quizReducer from "./slices/quizSlice";
import studentAuthReducer from "./slices/studentAuthSlice";

const store = configureStore({
  reducer: {
    batches: batchReducer,
    courses: courseReducer,
    quiz: quizReducer,
    studentAuth: studentAuthReducer,
  },
});

export default store;
