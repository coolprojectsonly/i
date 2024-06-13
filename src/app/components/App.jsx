import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import Navbar from "./Navbar";
import Tilt from "react-parallax-tilt";

const dataCards = [
  {
    index: 0,
    imageURL: "/five.jpg",
  },
  {
    index: 1,
    imageURL: "/six.jpg",
  },
  {
    index: 2,
    imageURL: "/seven.jpg",
  },
  {
    index: 4,
    imageURL: "/h1.png",
  },
];

const CARD_WIDTH = 250;
const X_TRANSITION = 150;

const getInitialData = (data, initialIndex, count = 3) =>
  Array.from(
    { length: count },
    (_, i) => data[(initialIndex + i) % data.length]
  );

const Cards = () => {
  const [data, setData] = useState(getInitialData(dataCards, 0));

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      setData(getInitialData(dataCards, index++));
      if (index >= dataCards.length) index = 0;
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(
    data.map((item, i) => ({
      ...item,
      x: i * CARD_WIDTH,
      scale: i !== 1 ? 0.8 : 1,
    })),
    {
      from: ({ x }) => ({ x: x + X_TRANSITION, opacity: 0, scale: 0.6 }),
      enter: ({ x, scale }) => ({ x, opacity: 1, scale }),
      leave: ({ x }) => ({ x: x - X_TRANSITION, opacity: 0, scale: 0.6 }),
      update: ({ x, scale }) => ({ x, scale }),
      keys: (item) => item.index,
    }
  );

  return (
    <div className="cards">
      {transitions((style, item) => (
        <animated.div
          key={item.index}
          className="card"
          style={{ "--url": `url(${item.imageURL})`, ...style }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(width);
  return (
    <>
      <div className="heroContainer">
        <div
          className="heroSection"
          style={{
            width: "100vw",
            height: width < 700 ? "60vh" : "90vh",
            overflow: "hidden",
          }}
        >
          <video
            autoPlay
            loop
            muted
            src="/hero.mp4"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          ></video>
        </div>

        <div
          className=""
          style={{
            width: "100vw",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // background: "red",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "pink",
              marginTop: 0,
              marginBottom: width < 700 ? "50px" : "",
            }}
          >
            Lets Talk!
          </h1>
          <div
            className="text"
            style={{
              width: "80vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "20vh",
              margin: "0 auto",
              borderRadius: "7px",
            }}
          >
            <p
              style={{
                color: "wheat",
                fontFamily: "rastaglion",
                margin: "5px",
                background: "black",
                textAlign: "center",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              fugiat veritatis officia nisi quo!
            </p>
          </div>
        </div>

        <div
          className="infoSection"
          style={{
            width: "100vw",
            height: width > 700 ? "60vh" : "120vh",
            display: "grid",
            gridTemplateColumns: width > 700 ? "1fr 1fr" : "1fr",
            margin: "50px auto",
          }}
        >
          <Tilt>
            <div
              className="left"
              style={{
                height: "60vh",

                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  color: "white",
                  fontFamily: "cream",
                  fontSize: "78px",
                  transform: "rotateZ(-15deg)",
                  marginLeft: "40px",
                }}
              >
                It is the <br />{" "}
                <span
                  style={{
                    color: "yellow",
                    marginLeft: "10px",
                    fontSize: "150px",
                    margin: 0,
                    boxShadow: "0 5px 5px 5px lightblue",

                    padding: "0 170px",
                  }}
                >
                  AI{" "}
                </span>{" "}
                <br />
                <span
                  style={{
                    fontFamily: "kolak",
                    color: "lightblue",
                    fontSize: "100px",
                    margin: 0,
                  }}
                >
                  ERA
                </span>
              </h1>
            </div>
          </Tilt>
          <Tilt>
            <div
              className="right"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: width < 700 ? "70vw" : "50vh",
                  height: width < 700 ? "60vh" : "60vh",
                  marginTop: width < 700 ? "50px" : "",
                  overflow: "hidden",
                  // background: width<700? "red",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src="/h1.png"
                  alt=""
                />
              </div>
            </div>
          </Tilt>
        </div>

        <div
          className=""
          style={{
            width: "100vw",
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "pink",
              fontFamily: "kolak",
              boxShadow: "0 2px 2px 2px lightblue",
              marginBottom: "20px",
            }}
          >
            Amazing Technologies!
          </h1>
          <div
            className="text"
            style={{
              width: "80vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "20vh",
              margin: "0 auto",
              boxShadow: "0 5px 5px 5px lightblue inset",
              background: "wheat",
              borderRadius: "10px 50px",
            }}
          >
            <p
              style={{
                color: "black",
                fontFamily: "rastaglion",
                margin: "5px",
                // background: "lightblue",
                textAlign: "center",
                fontSize: width < 700 ? "28px" : "",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              fugiat veritatis officia nisi quo!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "10vh",
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3
          style={{ textAlign: "center", color: "lightblue", fontSize: "20px" }}
        >
          CopyRight @AIWeeTechnologies. All Rights Reserved
        </h3>
      </div>
    </>
  );
};

const App = () => (
  <>
    <Navbar />
    <Hero />
    <div className="app">
      <Cards />
    </div>
    <Footer />
  </>
);

export default App;
