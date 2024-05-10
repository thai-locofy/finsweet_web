import { FunctionComponent, ReactElement } from "react";
import styles from "./Footer.module.css";

type FooterType = {
  subContent: ReactElement;
};

const Footer: FunctionComponent<FooterType> = ({ subContent = null }) => {
  return (
    <div className={styles.footer}>
      {subContent}
      <div className={styles.footerContent}>
        <div className={styles.topcontent}>
          <div className={styles.background1} />
          <div className={styles.footerColumns}>
            <div className={styles.brandWrapper}>
              <img
                className={styles.brandIcon}
                loading="lazy"
                alt=""
                src="/brand.svg"
              />
            </div>
            <div className={styles.pagesWrapper}>
              <div className={styles.pages}>
                <b className={styles.pages1}>Pages</b>
                <div className={styles.links}>
                  <a className={styles.home}>Home</a>
                  <div className={styles.podcast}>Podcast</div>
                  <div className={styles.host}>Host</div>
                  <a className={styles.blog}>Blog</a>
                </div>
              </div>
            </div>
            <div className={styles.reachUsWrapper}>
              <div className={styles.reachUs}>
                <b className={styles.reachUs1}>Reach Us</b>
                <div className={styles.links1}>
                  <div className={styles.contact}>Contact</div>
                  <div className={styles.about}>About</div>
                </div>
              </div>
            </div>
            <div className={styles.subscribe}>
              <b className={styles.subscribe1}>Subscribe</b>
              <div className={styles.links2}>
                <div className={styles.applePodcast}>
                  <img
                    className={styles.icon}
                    loading="lazy"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className={styles.textWrapper}>
                    <img
                      className={styles.textIcon}
                      loading="lazy"
                      alt=""
                      src="/text.svg"
                    />
                  </div>
                </div>
                <img
                  className={styles.googlePodcastIcon}
                  loading="lazy"
                  alt=""
                  src="/google-podcast.svg"
                />
                <div className={styles.soundcloud}>
                  <img
                    className={styles.cloudIcon}
                    loading="lazy"
                    alt=""
                    src="/cloud.svg"
                  />
                  <div className={styles.textContainer}>
                    <img
                      className={styles.textIcon1}
                      loading="lazy"
                      alt=""
                      src="/text-1.svg"
                    />
                  </div>
                </div>
                <img
                  className={styles.spotifyIcon}
                  loading="lazy"
                  alt=""
                  src="/spotify.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomcopyright}>
          <div className={styles.background2} />
          <b className={styles.copyrightFinsweet2021}>
            © Copyright Finsweet 2021
          </b>
        </div>
      </div>
    </div>
  );
};

export default Footer;
