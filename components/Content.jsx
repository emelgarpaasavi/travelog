import { useDispatch, useSelector } from "react-redux";
import { getGreetingTime } from "../store/time";
import { toggleModalActions } from "../store/toggle-modal";
import { planActions } from "../store/plan-actions";
import classes from "./Content.module.css";
import NoPlanSelected from "./NoPlanSelected";
import PlanDetails from "./PlanDetails";
import Modal from "./ui/Modal";

export default function Content() {
  const dispatch = useDispatch();
  const isSelected = useSelector((state) => state.planActions.isSelected);
  const plan = useSelector((state) => state.planActions.plans);
  const selectedId = useSelector((state) => state.planActions.selectedId);
  const showModal = useSelector((state) => state.toggleModal.showDeleteModal);
  const foundPlan = plan?.find((plan) => plan.id === selectedId);

  let greeting = <p>Good Evening!</p>;
  if (getGreetingTime() >= 0 && getGreetingTime() <= 12) {
    greeting = <p>Good Morning!</p>;
  }

  function handleDeletePlan() {
    dispatch(planActions.deletePlan({ id: selectedId }));
    dispatch(planActions.toggleDeselect());
    handleCloseDeleteModal();
  }

  function handleCloseDeleteModal() {
    dispatch(toggleModalActions.toggleRemovePlanModal());
  }

  return (
    <>
      {showModal && foundPlan && (
        <Modal onClose={handleCloseDeleteModal} onForm={handleDeletePlan}>
          <div className={classes.delete_modal}>
            <h2>
              Are you sure you want to delete &apos;{foundPlan.plan}&apos; plan?
            </h2>
          </div>
        </Modal>
      )}
      <div className={classes.content}>
        <div className={classes.container}>
          <div className={classes.greeter_container}>
            <div className={classes.greeter}>{greeting}</div>
            {isSelected && (
              <button
                className={classes.delete}
                onClick={() =>
                  dispatch(toggleModalActions.toggleRemovePlanModal())
                }
              >
                Delete
              </button>
            )}
          </div>

          <div className={classes.header}>
            <h3>
              {isSelected ? foundPlan.plan : "Please select or add a new plan."}
            </h3>
          </div>
          {isSelected ? <PlanDetails plan={foundPlan} /> : <NoPlanSelected />}
        </div>
      </div>
    </>
  );
}
