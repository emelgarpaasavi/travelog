import { createSlice } from "@reduxjs/toolkit";

const initialToggle = {
  showAddPlanModal: false,
  showActivityModal: false,
  showDeleteModal: false,
};

const toggleModalSlice = createSlice({
  name: "toggle",
  initialState: initialToggle,
  reducers: {
    toggleAddPlanModal(state) {
      state.showAddPlanModal = !state.showAddPlanModal;
    },
    toggleAddActivityModal(state) {
      state.showActivityModal = !state.showActivityModal;
    },
    toggleRemovePlanModal(state) {
      state.showDeleteModal = !state.showDeleteModal;
    },
  },
});

export const toggleModalActions = toggleModalSlice.actions;
export default toggleModalSlice.reducer;
