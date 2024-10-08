import styles from "./styles.module.css";
import Logo from "@site/static/img/logo.svg";
import clsx from "clsx";

const imageSize = 320;

export default function AboutUs() {
  return (
    <div className={clsx("padding-top--lg", "padding-bottom--lg")}>
      <div className={clsx("container", styles.description)}>
        <section>
          <Logo width={imageSize} height={imageSize} />
        </section>
        <section>
          <h2>About us</h2>
          <p>
            Content Bytes is a community where content enthusiasts from
            different backgrounds share their knowledge and expertise, at the
            same time broadening their own.{" "}
          </p>
          <p>
            Through regular meetups and events, we want to reach beyond the
            realm of technical writing to discover the related content fields.We
            strongly believe that exploring areas such as UX and UI, product
            design, trainings and workshops, or project management can create a
            thriving content community ready to drive exciting ideas and
            initiatives.
          </p>
        </section>
      </div>
    </div>
  );
}
