import { useSelector } from "react-redux";

export function findActivities() {
  const plans = useSelector((state) => state.planActions.plans);
  const id = useSelector((state) => state.planActions.selectedId);
  const date = useSelector((state) => state.dateSelect.date);
  const foundPlan = plans.find((plan) => plan.id === id);
  const foundActivities = foundPlan.activities.filter(
    (activity) => activity.date === date
  );

  foundActivities.sort(
    (actA, actB) =>
      Number(actA.time.replace(":", "")) - Number(actB.time.replace(":", ""))
  );

  // return activities based on date
  return foundActivities;
}
