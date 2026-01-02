import { useDispatch, useSelector } from "react-redux";
import { toggleModalActions } from "../store/toggle-modal";
import { getHumanReadableDate } from "../util/formatter";
import ItineraryItem from "./ItineraryItem";
import classes from "./Itinerary.module.css";
import AddActivity from "./AddActivity";
import { findActivities } from "../util/findActivities";

export default function Itinerary() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.toggleModal.showActivityModal);
  const date = useSelector((state) => state.dateSelect.date);
  
  const foundActivities = findActivities();

  return (
    <>
      {showModal && <AddActivity />}
      <div className={classes.itinerary}>
        <h2>Activities</h2>
        <div className={classes.container}>
          <h2>{date && getHumanReadableDate(date)}</h2>
          <hr />
          <div className={classes.entries_container}>
          {/* load activities (if there are any) */}
          {foundActivities.length > 0 ? (
            foundActivities.map((data, index) => (
              <ItineraryItem key={index} activity={data} />
            ))
          ) : (
            <p>No activities yet.</p>
          )}
          </div>
          {date.length > 0 && (
            <button
              onClick={() =>
                dispatch(toggleModalActions.toggleAddActivityModal())
              }
            >
              +
            </button>
          )}
        </div>
      </div>
    </>
  );
}
