import { useDispatch, useSelector } from "react-redux";
import { toggleModalActions } from "../store/toggle-modal";
import { planActions } from "../store/plan-actions";
import { dateAction } from "../store/date";
import classes from "./Navigation.module.css";
import AddPlan from "./AddPlan";

export default function Navigation() {
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.planActions.plans);
  const selectedId = useSelector((state) => state.planActions.selectedId);
  const foundPlan = plans.find((plan) => plan.id === selectedId);
  const showModal = useSelector((state) => state.toggleModal.showAddPlanModal);
  const error = useSelector((state) => state.planActions.isError);

  function handlePlanClick(plan) {
    if (!error) {
      dispatch(planActions.setNotError());
      dispatch(planActions.disableEdit());
      dispatch(planActions.toggleIsSelected({ id: plan.id }));
      dispatch(dateAction.changeDate({ date: plan.startDate }));
    }
  }

  function handleSelectPlanClick(id) {
    if (id !== "Select Plan") {
      const foundPlan = plans.find((plan) => plan.id == id);

      if (!error) {
        dispatch(planActions.setNotError());
        dispatch(planActions.disableEdit());
        dispatch(planActions.toggleIsSelected({ id: foundPlan.id }));
        dispatch(dateAction.changeDate({ date: foundPlan.startDate }));
      }
    } else {
      dispatch(planActions.toggleDeselect());
    }
  }

  let dropdownContent = <option>Select Plan</option>;
  if (plans.length > 0 && !selectedId) {
    dropdownContent = plans.map((plan) => (
      <option key={plan.id} value={plan.id}>
        {plan.plan}
      </option>
    ));
  } else {
    const newPlans = [...plans];
    // exclude the selected plan in the dropdown because it is already pre-selected
    const newDropdown = newPlans.filter((plan) => plan.id !== selectedId);
    dropdownContent = newDropdown.map((plan) => (
      <option key={plan.id} value={plan.id}>
        {plan.plan}
      </option>
    ));
  }

  return (
    <>
      {showModal && <AddPlan />}
      <div className={classes.navigation}>
        <div className={classes.header}>
          <h2 onClick={() => dispatch(planActions.toggleDeselect())}>
            TraveLog
          </h2>
          <button
            onClick={() => dispatch(toggleModalActions.toggleAddPlanModal())}
          >
            +
          </button>
        </div>

        <div className={classes.plans_list}>
          {plans &&
            plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => handlePlanClick(plan)}
                className={classes.plan}
              >
                <h3 className={plan.id === selectedId ? classes.active : ""}>
                  {plan.plan}
                </h3>
              </div>
            ))}
        </div>
        {/* use dropdown for smaller screens */}
        <div className={classes.plans_dropdown}>
          <select onChange={(e) => handleSelectPlanClick(e.target.value)}>
            <option>{foundPlan ? foundPlan.plan : "Select Plan"}</option>
            {dropdownContent}
          </select>
        </div>
      </div>
    </>
  );
}
