import { useRef, useState } from "react";
import { toggleModalActions } from "../store/toggle-modal";
import { planActions } from "../store/plan-actions";
import { dateAction } from "../store/date";
import { useDispatch } from "react-redux";
import Modal from "./ui/Modal";

export default function AddPlan() {
  const [dateChange, setDateChange] = useState();
  const startDateRef = useRef();
  const dispatch = useDispatch();

  function handleDateChange() {
    setDateChange(startDateRef.current.value);
  }

  function handleForm(formData) {
    const uuid = crypto.randomUUID();
    const plan = formData.get("plan");
    const startDate = formData.get("start_date");
    const endDate = formData.get("end_date");
    const budget = Number(formData.get("budget"));

    dispatch(planActions.addPlan({ id: uuid, plan, startDate, endDate, budget }));
    console.log(startDate);
    dispatch(dateAction.changeDate({ date: startDate }));
    dispatch(planActions.toggleIsSelected({ id: uuid }));
    handleCloseForm();
  }

  function handleCloseForm() {
    dispatch(toggleModalActions.toggleAddPlanModal());
  }

  return (
    <Modal onClose={handleCloseForm} onForm={handleForm}>
      <label htmlFor="plan">What&apos;s the new plan?</label>
      <input name="plan" placeholder="'Trip to Boracay'" required />
      <label htmlFor="start_date">Start date</label>
      <input
        ref={startDateRef}
        onChange={handleDateChange}
        type="date"
        name="start_date"
        required
      />
      <label htmlFor="end_date">End date</label>
      <input
        type="date"
        name="end_date"
        min={dateChange}
        disabled={!dateChange}
        required
      />
      <label htmlFor="budget" required>
        Budget
      </label>
      <input type="number" name="budget"></input>
    </Modal>
  );
}
