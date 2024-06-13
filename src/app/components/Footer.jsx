import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./styles/Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.social}>
          <div className={styles.antisocial}>
            <div className={styles.anime}>
              <video autoPlay loop muted src="/twentysix.mp4"></video>
            </div>
          </div>

          <div className={styles.items}>
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{
                color: "lightgreen",
                fontSize: "40px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            />

            <FontAwesomeIcon
              icon={faFacebook}
              style={{
                color: "blue",
                fontSize: "40px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            />

            <FontAwesomeIcon
              icon={faLinkedin}
              style={{
                color: "lightblue",
                fontSize: "40px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            />

            <FontAwesomeIcon
              icon={faInstagram}
              style={{
                color: "orange",
                fontSize: "40px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            />
            <FontAwesomeIcon
              icon={faXTwitter}
              style={{
                color: "indigo",
                fontSize: "40px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            />
          </div>
        </div>

        <div className={styles.devide}>
          <div className={styles.anime}>
            <video autoPlay loop muted src="/seventeen.mp4"></video>
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.wrapper}>
            <div className={styles.details}>
              <h1>Contact Us</h1>

              <div className={styles.formItem}>
                <form action="">
                  <div className={styles.inputItem}>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email"></input>
                  </div>

                  <div className={styles.inputItem}>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password"></input>
                  </div>

                  <div className={styles.btn}>
                    <button>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <h1>Copyright @2025. All Rights Reserved</h1>
      </div>
    </>
  );
}

export default Footer;
