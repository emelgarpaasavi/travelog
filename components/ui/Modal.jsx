import { useRef } from "react";
import classes from "./Modal.module.css";
import { useEffect } from "react";

export default function Modal({ children, onClose, onForm }) {
  const dialogRef = useRef();

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  return (
    <dialog ref={dialogRef} className={classes.modal}>
      <form action={onForm}>
        {children}
        <div className={classes.actions}>
          <button type="button" onClick={onClose}>Cancel</button>
          <button type="submit">Okay</button>
        </div>
      </form>
    </dialog>
  );
}
