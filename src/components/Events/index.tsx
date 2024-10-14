import styles from "./styles.module.css";
import { ButtonYellow } from "../Button";

const EventsPage = "docs/events";

export default function Events() {
  return (
    <div className={styles.background}>
      <div>
        <h1>Events</h1>
      </div>
      <div className={styles.event}>
        <p className={styles["event-title"]}>Content Bytes KRK x girls.js</p>
        <p>30 October 2024</p>
        <p>[👉 Upcoming]</p>
      </div>
      <div className={styles.event}>
        <p className={styles["event-title"]}>Content Bytes KRK #01</p>
        <p>3 October 2024</p>
        <p>[✅ Completed]</p>
      </div>
      <div className={styles.buttons}>
        <ButtonYellow link={EventsPage} label="🔗 Check all events" />
      </div>
    </div>
  );
}
