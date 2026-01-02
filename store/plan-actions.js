import { createSlice } from "@reduxjs/toolkit";
import { initialPlans } from "../util/planInitialData";

const planActionSlice = createSlice({
  name: "planActions",
  initialState: initialPlans,
  reducers: {
    addPlan(state, action) {
      const { id, plan, startDate, endDate, budget } = action.payload;
      state.plans.push({
        id,
        plan,
        startDate,
        endDate,
        budget,
        totalExpenses: 0,
        activities: [],
      });
    },
    toggleIsSelected(state, action) {
      state.isSelected = true;
      state.selectedId = action.payload.id;
    },
    toggleDeselect(state) {
      state.isSelected = false;
      state.selectedId = null;
    },
    addActivity(state, action) {
      const { id, date, activity, location, time, expense, type, planId } =
        action.payload;

      const foundPlan = state.plans.find((plan) => plan.id === planId);
      foundPlan.totalExpenses += expense;
      foundPlan.activities.push({
        id,
        date,
        activity,
        location,
        time,
        expense,
        type,
      });
    },
    enableEdit(status) {
      status.isBudgetEdited = true;
    },
    disableEdit(status) {
      status.isBudgetEdited = false;
    },
    replaceBudget(state, action) {
      const foundPlan = state.plans.find(
        (plan) => plan.id === action.payload.id
      );
      foundPlan.budget = action.payload.newBudget;
    },
    setError(state) {
      state.isError = true;
    },
    setNotError(state) {
      state.isError = false;
    },
    removeActivity(state, action) {
      const plan = state.plans.find((plan) => plan.id === action.payload.id);
      const foundActivity = plan.activities.find(
        (activity) => activity.id === action.payload.activityId
      );
      plan.totalExpenses -= foundActivity.expense;
      plan.activities = plan.activities.filter(
        (activity) => activity.id !== action.payload.activityId
      );
    },
    deletePlan(state, action){
      state.plans = state.plans.filter((plan) => plan.id !== action.payload.id);
    },
  },
});

export const planActions = planActionSlice.actions;
export default planActionSlice.reducer;
