import classes from "./Budget.module.css";
import { phpFormatter } from "../util/formatter.js";
import { useDispatch, useSelector } from "react-redux";
import { planActions } from "../store/plan-actions.js";
import { isValidBudget } from "../util/validator.js";

export default function Budget({ foundPlan }) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.planActions.isError);
  
  const isBudgetEdited = useSelector(
    (state) => state.planActions.isBudgetEdited
  );
  const expensesPercentage = Math.floor(
    (foundPlan.totalExpenses / foundPlan.budget) * 100
  );

  function handleChangeBudget(event) {
    if (isValidBudget(event.target.value)){
      dispatch(planActions.setNotError());
      dispatch(planActions.replaceBudget({ id: foundPlan.id, newBudget: event.target.value }));
    } else {
      dispatch(planActions.setError());
    }
  }

  function handleSubmitBudget() {
    dispatch(planActions.disableEdit());
    dispatch(planActions.setNotError());
  }

  return (
    <div className={classes.budget}>
      <div className={classes.header}>
        <h2>Budget</h2>
        {isBudgetEdited ? (
          <button
            className={error ? classes.error : classes.active}
            onClick={handleSubmitBudget}
            disabled={error}
          >
            Done
          </button>
        ) : (
          <button onClick={() => dispatch(planActions.enableEdit())}>
            Edit
          </button>
        )}
      </div>
      <div className={classes.container}>
        <h3>
          Budget Remaining: &nbsp;
          {phpFormatter.format(foundPlan.budget - foundPlan.totalExpenses)}
        </h3>

        <div className={classes.breakdown}>
          <div className={classes.total_expenses_container}>
            <h4>Total Expenses:</h4>
            <h4 className={classes.totalExpenses}>
              {phpFormatter.format(foundPlan.totalExpenses)}
            </h4>
          </div>
          <div className={classes.total_budget_container}>
            <h4>Total Budget:</h4>
            ₱
            <input
              type="number"
              style={error ? { color: "#FF7171", border: "1px solid #FF7171" } : undefined}
              onChange={handleChangeBudget}
              placeholder={foundPlan.budget}
              value={foundPlan.budget}
              disabled={!isBudgetEdited}
            />
          </div>
        </div>
        <div className={classes.total_budget_bar}>
          <div
            style={{
              backgroundColor: "#DE0000",
              height: "10px",
              marginTop: "10px",
              width: `${expensesPercentage}%`,
              maxWidth: "100%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
