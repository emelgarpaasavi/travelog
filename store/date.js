import { createSlice } from "@reduxjs/toolkit";

const initialDate = { date: "" };

const dateSlice = createSlice({
  name: "dateSlice",
  initialState: initialDate,
  reducers: {
    changeDate(state, action) {
      state.date = action.payload.date;
    },
  },
});

export const dateAction = dateSlice.actions;
export default dateSlice.reducer;
