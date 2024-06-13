import React, { useState } from "react";
import styles from "./styles/Navbar.module.css";
import { motion } from "framer-motion";

function Navbar() {
  const [hover, setHover] = useState(false);
  const navItems = ["Home", "About", "Services", "Skills", "Contact"];

  console.log(hover);
  return (
    <>
      <div
        className={`${styles.container} ${hover ? styles.hover : ""}`}
        style={{
          background: hover ? "linear-gradient(to top, black, #333)" : "#333",
          transition: "0.5s ease-in-out",
          boxShadow: hover ? "0 1px 1px 1px gold" : "0 1px 1px 1px red",
        }}
      >
        <div className={styles.logo}>
          <motion.h3
            initial={{ x: 100, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ color: hover ? "gold" : "lightblue" }}
          >
            Logo
          </motion.h3>
        </div>
        <div className={styles.navs}>
          {navItems.map((item, index) => {
            return (
              <motion.a
                href="#"
                key={item}
                className={styles.navItem}
                initial={{ x: -index * 100, y: -100, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                {item}
              </motion.a>
            );
          })}
          <span></span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
