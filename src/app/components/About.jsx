import React, { useState } from "react";
import styles from "./styles/About.module.css";
import { motion } from "framer-motion";

function About() {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <motion.h1
          initial={{ x: 100, y: -100, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          whileHover={{
            rotateZ: 2,
            opacity: 0.5,
            transition: { duration: 3 },
          }}
          className={styles.head}
        >
          About Me
        </motion.h1>
        <div className={styles.profile}>
          <div className={styles.cover}>
            <img src="/profile.png" alt="" />
          </div>
        </div>

        <div
          className={styles.info}
          style={{
            boxShadow: "10px 0px 10px 0px indigo",
            marginRight: "50px",
          }}
        >
          <motion.h1
            initial={{ x: 100, y: -100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            whileHover={{
              rotateZ: 2,
              opacity: 0.5,
              transition: { duration: 3 },
            }}
          >
            I Write Clean <span style={{ color: "gold" }}>Code</span>
          </motion.h1>
          <motion.div
            initial={{ x: 5, y: -5, rotateZ: 3, opacity: 0, rotateY: 0 }}
            whileInView={{
              x: 0,
              y: 0,
              rotateZ: 0,
              opacity: 1,
              rotateY: 30,
              transition: {
                duration: 0.5,
              },
            }}
            className={styles.text}
            whileHover={{
              rotate: -2,
              opacity: 0.3,
              transition: { duration: 3 },
            }}
            style={{
              background: hover ? "#333" : "black",
              marginBottom: "20px",
              boxShadow: hover ? "0 0px 10px 1px gold" : "0px 1px 10px 1px red",
              transition: "3s",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              asperiores dolore totam omnis aliquid quae officiis corporis eius
              culpa, ducimus, facere nesciunt accusamus explicabo dolorum ipsam
              quas quasi quaerat laboriosam?
            </p>
          </motion.div>

          <div className={styles.btn}>
            <motion.button
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className={styles.button}
              href="#"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
