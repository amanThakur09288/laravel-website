import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: [],
  currentQuiz: null,
  currentAttempt: null,
  result: null,
};

const quizSlice = createSlice({
  name: "quiz",

  initialState,

  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },

    setCurrentQuiz: (state, action) => {
      state.currentQuiz = action.payload;
    },

    setCurrentAttempt: (state, action) => {
      state.currentAttempt = action.payload;
    },

    setResult: (state, action) => {
      state.result = action.payload;
    },

    clearQuizState: (state) => {
      state.quizzes = [];
      state.currentQuiz = null;
      state.currentAttempt = null;
      state.result = null;
    },
  },
});

export const {
  setQuizzes,
  setCurrentQuiz,
  setCurrentAttempt,
  setResult,
  clearQuizState,
} = quizSlice.actions;

export default quizSlice.reducer;
