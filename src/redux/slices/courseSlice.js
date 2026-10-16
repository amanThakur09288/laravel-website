import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.items = action.payload;
    },

    clearCourses: (state) => {
      state.items = [];
    },
  },
});

export const { setCourses, clearCourses } = courseSlice.actions;

export default courseSlice.reducer;
