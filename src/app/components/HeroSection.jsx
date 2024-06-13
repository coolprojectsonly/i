import React, { useState } from "react";
import styles from "./styles/Herosection.module.css";
import { motion } from "framer-motion";

function HeroSection() {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <motion.h1
            initial={{ x: 100, y: -100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            whileHover={{
              rotateZ: 2,
              opacity: 0.5,
              transition: { duration: 3 },
            }}
          >
            FrontEnd Dev<span style={{ color: "blue" }}>eloper</span>
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

              boxShadow: hover
                ? "0 0px 10px 1px lightblue"
                : "0px 1px 10px 1px green",
              transition: "3s",
            }}
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              nostrum, aliquid suscipit odit consequatur, quaerat cupiditate vel
              maxime officia assumenda repellat pariatur? Ipsa quod architecto
              accusamus sed distinctio non aperiam.
            </p>
          </motion.div>

          <div className={styles.btn}>
            <motion.button
              className={styles.btn6}
              initial={{ x: 100, y: -100, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Projects
            </motion.button>

            <motion.button
              className={styles.btn5}
              initial={{ x: 100, y: -100, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Get in Touch
            </motion.button>
          </div>
        </div>

        <div className={styles.devide}>
          <div className={styles.anime}>
            <video autoPlay loop muted src="/twentytwo.mp4"></video>
          </div>
        </div>

        <div className={styles.profile}>
          <div className={styles.wrap}>
            <video autoPlay loop muted src="/eight.mp4"></video>
          </div>

          <div className={styles.imgContainer}>
            <img src="/profile.png" alt="" />
          </div>
          <div className={styles.name}>
            <video autoPlay loop muted src="/nineteen.mp4"></video>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

// import React, { useEffect, useRef, useState } from "react";
// import Tilt from "react-parallax-tilt";

// function App() {
//   const items = [
//     "React",
//     "Angular",
//     "Tailwind CSS",
//     "Django",
//     "NextJS",
//     "NodeJS",
//   ];

//   const videoRefs = useRef([]);
//   const [animateIndex, setAnimateIndex] = useState(null);
//   const [videoOpacities, setVideoOpacities] = useState(
//     Array(items.length).fill(0)
//   );

//   useEffect(() => {
//     if (animateIndex !== null) {
//       const newOpacities = Array(items.length).fill(0);
//       newOpacities[animateIndex] = 1;
//       setVideoOpacities(newOpacities);

//       videoRefs.current[animateIndex].play();

//       const timeout = setTimeout(() => {
//         setAnimateIndex(null);
//         setVideoOpacities(Array(items.length).fill(0));
//       }, 1000);

//       return () => clearTimeout(timeout);
//     }
//   }, [animateIndex, items.length]);

//   return (
//     <>
//       <div>
//         <h1>Animated Cards</h1>
//       </div>

//       <div className="container">
//         {items.map((item, index) => (
//           <div className="wrapper" key={index}>
//             <Tilt
//               tiltEnable={true}
//               tiltAngleXInitial={0}
//               tiltAngleYInitial={0}
//               tiltMaxAngleX={25}
//               tiltMaxAngleY={25}
//               perspective={800}
//               transitionSpeed={5000}
//               reset={true}
//               glareEnable={true}
//               glareColor="lighblue"
//             >
//               <div
//                 style={{
//                   background: "#333",
//                   width: "100%",
//                   height: "300px",
//                 }}
//               >
//                 <div
//                   style={{
//                     height: "80px",
//                     justifyContent: "center",
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <h3 style={{ textAlign: "center" }}>{item}</h3>
//                 </div>

//                 <div
//                   style={{
//                     width: "300px",
//                     margin: "0 auto",
//                     border: "1px solid gold",
//                     height: "200px",
//                     borderRadius: "5px",
//                     boxShadow: "10px 0 10px 0 gold",
//                     background: "black",
//                     position: "relative",
//                     zIndex: 2,
//                   }}
//                 >
//                   <p
//                     style={{
//                       fontSize: "15px",
//                       margin: "0 10px",
//                       marginTop: "10px",
//                       zIndex: 10,

//                       position: "absolute",
//                       top: "10px",
//                     }}
//                   >
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                     Incidunt dolor officiis quasi atque aspernatur cupiditate,
//                     ea iure. Tempora, repudiandae, deserunt animi odit unde quod
//                     iure perferendis hic exercitationem, asperiores dolorem!
//                   </p>
//                   <button
//                     onClick={() => setAnimateIndex(index)}
//                     style={{
//                       padding: "10px 30px",
//                       borderRadius: "5px",
//                       marginTop: "10px",
//                       cursor: "pointer",
//                       position: "absolute",
//                       bottom: "15px",
//                       left: "30%",
//                       zIndex: 10,
//                     }}
//                   >
//                     Learn More
//                   </button>

//                   <video
//                     ref={(el) => (videoRefs.current[index] = el)}
//                     style={{
//                       position: "absolute",
//                       top: 0,
//                       left: "10px",
//                       zIndex: 1,
//                       height: "200px",
//                       overflow: "hidden",
//                       width: "280px",
//                       height: "170px",
//                       opacity: videoOpacities[index],
//                       transition: "opacity 0.3s",
//                     }}
//                     muted
//                     src="thirteen.mp4"
//                   ></video>
//                 </div>
//               </div>
//             </Tilt>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;
