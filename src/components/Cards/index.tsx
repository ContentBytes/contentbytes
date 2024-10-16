import styles from "./styles.module.css";
import Logo from "@site/static/img/logo.svg";
import Link from "@docusaurus/Link";
import clsx from "clsx";

type OrganizerItem = {
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  name: string;
  title: string;
  linkedIn: string;
};

const OrganizerList: OrganizerItem[] = [
  {
    Svg: Logo,
    name: "Barbara Czyż 🐰",
    title: "Senior Technical Writer",
    linkedIn: "https://www.linkedin.com/in/barbara-szwarc/",
  },
  {
    Svg: Logo,
    name: "Edyta Rakowska 🏕",
    title: "Technical\nWriter",
    linkedIn: "https://www.linkedin.com/in/edyta-rakowska/",
  },
  {
    Svg: Logo,
    name: "Michał Olender ✍️",
    title: "Technical\nWriter",
    linkedIn: "https://www.linkedin.com/in/edyta-rakowska/",
  },
  {
    Svg: Logo,
    name: "Paweł Chłodnicki 🤘",
    title: "Senior Content Designer",
    linkedIn: "https://www.linkedin.com/in/edyta-rakowska/",
  },
];

function Organizer({ Svg, name, title, linkedIn }: OrganizerItem) {
  return (
    <div className={clsx("text--center col", styles.container)}>
      <Svg className={styles.image} role="img" />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.title}>{title}</p>
      <div className={styles.socials}>
        <p>
          <Link to={linkedIn}>
            <img
              src="img/logo/linkedin.svg"
              alt="Go to LinkedIn profile"
              height="30"
            />
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function Cards() {
  return (
    <section>
      <div className={clsx("row", styles.cards)}>
        {OrganizerList.map((props, idx) => (
          <Organizer key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
