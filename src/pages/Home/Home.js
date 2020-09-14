import React from "react";
import Particle from "../../components/Particle";
import { Card, Typography } from "antd";
import "./Home.css";

const Home = () => {
  return (
    <div style={{ height: "100%" }}>
      <div>
        {/* <Typography.Title level={5}>Home</Typography.Title> */}
        <div class="animated-title">
          <div className="text-top">
            <div>
              <span>Hi</span>
              <span>I'am Okabe</span>
            </div>
          </div>
          <div className="text-bottom">
            <div>Welcome to my profile!</div>
          </div>
        </div>
      </div>
      <Particle />
    </div>
  );
};

export default Home;
