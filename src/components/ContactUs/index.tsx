import styles from "./styles.module.css";

export default function ContactUs() {
  return (
    <div className={styles.background}>
      <div className={styles.columns}>
        <div className={styles["contact-description"]}>
          <h1>Contact us</h1>
          <p>Reach out to us</p>
          <p>
            We're happy to hear from you
            <li>share feedback</li>
            <li>partner with us</li>
            <li>...</li>
          </p>
        </div>
        <div className={styles["contact-info"]}>contentbytes.krk@gmail.com</div>
      </div>
    </div>
  );
}
