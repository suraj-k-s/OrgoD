import React from "react";
import "./Intro.css";
import Vector2 from "../../img/Vector2.png";
import homepic1 from "../../img/homepic.png";
import heartemoji from "../../img/heartemoji.png";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };


  return ( 
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
        
          <span>OrgoD</span>
          <span>
            Come ahead and take part in saving lives
          </span>
        </div>
      
      </div>
      {/* right image side */}
      <div className="i-right">
      <img src={Vector2} alt="" />
        <img src={Vector2} alt="" />
        <img style={{width:"320px",height:"320px",paddingTop:"60px"}} src={homepic1} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={heartemoji}
          alt=""
        />

        

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
