import classes from "./NoPlanSelected.module.css";
import { destinations } from "../store/destinations";

export default function NoPlanSelected() {
  const randDestination = destinations[Math.floor(Math.random() * 9 + 1)];

  return (
    <div className={classes.content}>
      <h2>Your next destination might be in:</h2>
      <div className={classes.image_display}>
        <img src={randDestination.image} alt={randDestination.location} />
        <h1>{randDestination.location}</h1>
      </div>
    </div>
  );
}
