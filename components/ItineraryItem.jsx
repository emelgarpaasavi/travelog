import classes from "./ItineraryItem.module.css";
import xIcon from "/close_24px.svg";
import { phpFormatter } from "../util/formatter.js";
import { getIconType } from "../util/getIconType.js";
import { useDispatch, useSelector } from "react-redux";
import { planActions } from "../store/plan-actions.js";

export default function ItineraryItem({ activity }) {
  const dispatch = useDispatch();
  const selectedId = useSelector((state) => state.planActions.selectedId);
  const selectedDate = useSelector((state) => state.dateSelect.date);

  function handleDeleteActivity() {
    dispatch(
      planActions.removeActivity({
        id: selectedId,
        date: selectedDate,
        activityId: activity.id,
      })
    );
  }

  return (
    <div className={classes.itinerary_item}>
      <img
        onClick={handleDeleteActivity}
        className={classes.delete}
        src={xIcon}
        alt="delete icon"
      />
      <div className={classes.contents}>
        <div className={classes.details}>
          <div>
            <p>{activity.time}</p>
          </div>
          <div className={classes.activities}>
            <p>{activity.activity}</p>
            <p>@ {activity.location}</p>
            <p>{phpFormatter.format(activity.expense)}</p>
          </div>
        </div>

        <div className={classes.identifier}>
          <img className={classes.icon} src={getIconType(activity.type)}></img>
        </div>
      </div>
    </div>
  );
}
