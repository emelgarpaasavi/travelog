import { useDispatch, useSelector } from "react-redux";
import Budget from "./Budget";
import Itinerary from "./Itinerary";
import classes from "./PlanDetails.module.css";
import Calendar from "./ui/Calendar";

export default function PlanDetails({ plan }) {
  return (
    <div className={classes.plan_details}>
      <div className={classes.left_details}>
        <Calendar startDate={plan.startDate} endDate={plan.endDate} />
        <Budget foundPlan={plan} />
      </div>
      <Itinerary />
    </div>
  );
}
