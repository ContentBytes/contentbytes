import styles from "./styles.module.css";
import Logo from "@site/static/img/logo.svg";
import clsx from "clsx";
import { ButtonYellow } from "../Button";

const EventsPage = "docs/events";

const imageSize = 320;

export default function AboutUs() {
  return (
    <div
      className={clsx(
        "padding-top--lg",
        "padding-bottom--lg",
        styles.background
      )}
    >
      <div className={clsx("container", styles.description)}>
        <section>
          <Logo width={imageSize} height={imageSize} />
        </section>
        <section>
          <h1>Welcome to Content Bytes!</h1>
          <p>
            Content Bytes is a community where content enthusiasts from
            different backgrounds share their knowledge and expertise, at the
            same time broadening their own.{" "}
          </p>
          <p>
            #Technical writing
            <br />
            #UX writing
            <br />
            #Research
            <br />
            #Product
            <br />
            #UX
          </p>

          <ButtonYellow link={EventsPage} label="📆 Check upcoming events" />
        </section>
      </div>
    </div>
  );
}
