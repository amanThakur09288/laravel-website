import { createSlice } from "@reduxjs/toolkit";

const studentAuthSlice = createSlice({
  name: "studentAuth",

  initialState: {
    user: null,
    initialized: false,
    loading: false,
  },

  reducers: {
    setStudent(state, action) {
      state.user = action.payload;
      state.initialized = true;
      state.loading = false;
    },

    clearStudent(state) {
      state.user = null;
      state.initialized = true;
      state.loading = false;
    },

    setAuthLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const {
  setStudent,
  clearStudent,
  setAuthLoading,
} = studentAuthSlice.actions;

export default studentAuthSlice.reducer;