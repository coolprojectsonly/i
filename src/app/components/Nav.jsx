// import React, { useEffect, useState } from "react";

// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt";

// function App() {
//   const navItems = ["Home", "About", "Services", "Prices", "Contact"];

//   const [width, setWidth] = useState(window.innerWidth);

//   const [show, seShow] = useState(false);

//   const [shownav, setShownav] = useState(true);

//   useEffect(() => {
//     const handleWidth = () => {
//       setWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleWidth);

//     return () => {
//       window.removeEventListener("resize", handleWidth);
//     };
//   });

//   const handleMenu = () => {
//     seShow((x) => !x);
//   };

//   return (
//     <>
//       <div className="container">
//         <motion.div
//           initial={{ x: -20, y: -20 }}
//           whileInView={{ x: 0, y: 0 }}
//           whileHover={{ x: -10, y: -10 }}
//           className="logo"
//           style={{
//             // background: "lightgreen",
//             height: "50px",
//             display: "flex",
//             alignItems: "center",
//             marginLeft: "130px",
//           }}
//         >
//           <h3 style={{ color: "white", fontFamily: "kolak" }}>Logo</h3>
//         </motion.div>
//         {width > 700 ? (
//           <>
//             <div
//               className="navs"
//               style={{ transition: "0.5s ease-n-out", marginRight: "130px" }}
//             >
//               {navItems.map((item) => (
//                 <>
//                   <a href="#">{item}</a>
//                 </>
//               ))}

//               <span></span>
//             </div>
//           </>
//         ) : (
//           <>
//             {show ? (
//               <div
//                 style={{ zIndex: 10, marginRight: "130px", marginTop: "50px" }}
//               >
//                 <Tilt
//                   tiltEnable={true}
//                   tiltReverse={false}
//                   tiltAngleXInitial={0}
//                   tiltAngleYInitial={0}
//                   tiltMaxAngleX={25}
//                   tiltMaxAngleY={25}
//                   glareEnable={true}
//                   glareMaxOpacity={0.5}
//                   glareColor="lightblue"
//                   scale={1.1}
//                   perspective={800}
//                   reset={true}
//                   transitionSpeed={500}
//                 >
//                   <motion.div
//                     initial={{ x: -50, y: -50 }}
//                     animate={{ x: 0, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     exit={{ x: -30, y: 20 }}
//                     className="navs"
//                     style={{
//                       transition: "0.5s ease-n-out",
//                       // background: "indigo",
//                       marginRight: "80px",
//                     }}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <div
//                         style={{
//                           backgroundColor: "wheat",
//                           borderRadius: "50%",
//                           width: "30px",
//                           height: "30px",
//                           overflow: "hidden",
//                         }}
//                       >
//                         <img
//                           style={{ width: "100%", height: "100%" }}
//                           src="https://img.icons8.com/ios-filled/50/000000/user.png"
//                           alt="User Icon"
//                         />
//                       </div>
//                       <a
//                         href="#"
//                         onClick={handleMenu}
//                         style={{ marginRight: "-20px" }}
//                       >
//                         X
//                       </a>
//                     </div>
//                     {navItems.map((item, index) => (
//                       <>
//                         <Tilt
//                           tiltEnable={true}
//                           tiltReverse={false}
//                           tiltAngleXInitial={0}
//                           tiltAngleYInitial={0}
//                           tiltMaxAngleX={25}
//                           tiltMaxAngleY={25}
//                           glareEnable={true}
//                           glareMaxOpacity={0.5}
//                           glareColor="red"
//                           scale={1.1}
//                           perspective={800}
//                           reset={true}
//                           transitionSpeed={500}
//                         >
//                           <motion.a
//                             initial={{ x: -(index * 3), y: index * 7 }}
//                             animate={{ x: 0, y: 0 }}
//                             exit={{ x: -(index * 3), y: index * 7 }}
//                             // transition={{ duration: 0.5 }}

//                             className="link"
//                             href="#"
//                             style={{
//                               width: "100%",
//                               height: "50px",
//                               transition: "0.2s ease-in-out",
//                               padding: "5px 20px",
//                             }}
//                           >
//                             {item}
//                           </motion.a>
//                         </Tilt>
//                       </>
//                     ))}

//                     {/* <span style={{ background: "green" }}></span> */}
//                   </motion.div>
//                 </Tilt>
//               </div>
//             ) : (
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "right",
//                   marginRight: "30px",
//                 }}
//               >
//                 <a
//                   href="#"
//                   onClick={handleMenu}
//                   style={{
//                     textDecoration: "none",
//                     color: "white",
//                     marginRight: "130px",
//                   }}
//                 >
//                   ☰
//                 </a>
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       <>
//         <div
//           className="hero"
//           style={{
//             width: "100vw",
//             height: "40vh",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <div
//             className="anime"
//             style={{
//               width: "300px",
//               height: "300px",
//               overflow: "hidden",
//               zIndex: "-1",
//             }}
//           >
//             <video
//               autoPlay
//               loop
//               muted
//               src="/nineteen.mp4"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 opacity: 0,
//               }}
//             ></video>
//           </div>
//         </div>
//       </>
//     </>
//   );
// }

// export default App;
