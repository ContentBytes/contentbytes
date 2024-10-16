import styles from "./styles.module.css";
import Cards from "@site/src/components/Cards";

export default function Organizers() {
  return (
    <div id="organizers" className={styles.background}>
      <div>
        <h1>Organizers</h1>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}
