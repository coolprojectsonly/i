import React, { useState } from "react";
import styles from "./styles/Services.module.css";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

function Services() {
  const [hover, setHover] = useState(false);

  const services = [
    {
      head: "React Apps",
      content:
        "Developing dynamic and responsive web applications using the React framework, ensuring high performance and seamless user experience.",
      image: "/one.jpg",
    },
    {
      head: "Angular Apps",
      content:
        "Building robust and scalable single-page applications with Angular, focusing on clean architecture and efficient data handling.",
      image: "/two.jpg",
    },
    {
      head: "API Integrated Apps",
      content:
        "Creating applications that seamlessly integrate with various APIs, enabling smooth data exchange and enhanced functionality.",
      image: "/three.jpg",
    },
    {
      head: "Vue Apps",
      content:
        "Designing lightweight and versatile web applications with Vue.js, offering a flexible and progressive approach to front-end development.",
      image: "/four.jpg",
    },
    {
      head: "Apps Integrations",
      content:
        "Integrating various third-party services and applications to enhance the capabilities and features of your existing systems.",
      image: "/five.jpg",
    },
    {
      head: "UI UX Design",
      content:
        "Crafting intuitive and visually appealing user interfaces and experiences that engage users and improve interaction with your application.",
      image: "/six.jpg",
    },
    {
      head: "Debugging",
      content:
        "Identifying and resolving bugs and issues in your applications to ensure optimal performance and a smooth user experience.",
      image: "/seven.jpg",
    },
    {
      head: "Consultation",
      content:
        "Providing expert advice and guidance on software development projects, helping you make informed decisions and achieve your goals.",
      image: "/one.jpg",
    },

    {
      head: "Consultation",
      content:
        "Providing expert advice and guidance on software development projects, helping you make informed decisions and achieve your goals.",
      image: "/one.jpg",
    },
  ];

  return (
    <>
      <div className={styles.services} id="services">
        <h1 className={styles.header}>Services</h1>

        <div className={styles.wrapper} style={{ margin: "0 auto" }}>
          {services.map((item, index) => (
            <motion.div
              className={styles.servicewrapper}
              initial={{ x: 100, y: -100, opacity: 0 }}
              // animate={{ x: 0, y: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              whileHover={{
                rotateZ: 2,
                opacity: 0.5,
                transition: { duration: 3 },
              }}
            >
              <Tilt
                tiltEnable={true}
                tiltAngleXInitial={0}
                tiltAngleYInitial={0}
                tiltMaxAngleX={25}
                tiltMaxAngleY={25}
                perspective={800}
                transitionSpeed={5000}
                reset={true}
                glareEnable={true}
                glareColor="lighblue"
              >
                <div className={styles.info}>
                  <motion.div
                    style={{ opacity: 0.5, transition: "3s ease-in-out" }}
                    className={styles.imgwrapper}
                    whileHover={{ opacity: 0.1 }}
                  >
                    <img src={item.image} alt="portfolio img" />
                  </motion.div>

                  <h1>{item.head}</h1>

                  <div className={styles.text}>
                    <p> {item.content}</p>
                  </div>

                  <div className={styles.btn}>
                    <button>Learn More</button>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
