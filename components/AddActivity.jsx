import Modal from "./ui/Modal";
import { toggleModalActions } from "../store/toggle-modal";
import { planActions } from "../store/plan-actions";
import { useDispatch, useSelector } from "react-redux";

export default function AddActivity() {
  const id = useSelector((state) => state.planActions.selectedId);
  const date = useSelector((state) => state.dateSelect.date);

  const dispatch = useDispatch();

  function handleForm(formData) {
    const activity = formData.get("activity");
    const location = formData.get("location");
    const time = formData.get("time");
    const expense = Number(formData.get("expense"));
    const type = formData.get("type");
    const uuid = crypto.randomUUID();

    dispatch(
      planActions.addActivity({
        id: uuid,
        date,
        activity,
        location,
        time,
        expense,
        type,
        planId: id,
      })
    );

    handleCloseForm();
  }

  function handleCloseForm() {
    dispatch(toggleModalActions.toggleAddActivityModal());
  }

  return (
    <Modal onClose={handleCloseForm} onForm={handleForm}>
      <h2>Add New Activity</h2>
      <label htmlFor="activity">Activity Name</label>
      <input name="activity" required />
      <label htmlFor="location">Location</label>
      <input name="location" required />
      <label htmlFor="time">Start time</label>
      <input type="time" name="time" required />
      <label htmlFor="expense">To spend</label>
      <input type="number" name="expense" required />
      <label htmlFor="type">Activity type</label>
      <select name="type" required>
        <option value="">Choose Type</option>
        <option value="food">Food</option>
        <option value="transportation">Transportation</option>
        <option value="accommodation">Accommodation</option>
        <option value="entertainment">Entertainment</option>
        <option value="other">Other</option>
      </select>
    </Modal>
  );
}
