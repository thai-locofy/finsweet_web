import { FunctionComponent } from "react";
import styles from "./Sponsors.module.css";

type Sponsor = {
  id: number;
  logo: string;
  name: string;
};

type ComponentType = {
  sponsors: Sponsor[];
};

const Sponsors: FunctionComponent<ComponentType> = ({ sponsors = [] }) => {
  return (
    <div className={styles.sponsorsWrapper}>
      <div className={styles.sponsors}>
        <div className={styles.background} />
        <div className={styles.ourSponsorsWrapper}>
          <b className={styles.ourSponsors}>Our Sponsors</b>
        </div>
        <div className={styles.logos}>
          {sponsors.map((s) => (
            <div key={s.id} className={styles.logoWrapper}>
              <img
                className={styles.logoIcon}
                loading="lazy"
                alt=""
                src={s.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
