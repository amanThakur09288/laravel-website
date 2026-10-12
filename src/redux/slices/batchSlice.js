import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const batchSlice = createSlice({
  name: "batches",
  initialState,
  reducers: {
    setBatches: (state, action) => {
      state.items = action.payload;
    },

    clearBatches: (state) => {
      state.items = [];
    },
  },
});

export const { setBatches, clearBatches } = batchSlice.actions;
export default batchSlice.reducer;
