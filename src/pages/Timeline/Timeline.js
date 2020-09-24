import React from "react";
import Gear from "../../assets/gear.png";
import Header from "../../components/Header";
import { Row, Col, Timeline } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Timelines = ({ isBreakPosition }) => {
  return (
    <div style={{ margin: "24px" }}>
      <Header
        width={isBreakPosition ? 16 : 8}
        title="Timeline of My Career"
        desciption="This is the timeline of my career journey until now"
        withDesc
      />
      <img
        alt="gear-background"
        style={{ right: 0, position: "absolute" }}
        src={Gear}
      />
      <Row>
        <Col span={24} style={{ marginTop: "8vmin" }}>
          <Timeline mode="left">
            <Timeline.Item
              label="2020-01 - Now"
              dot={<LoadingOutlined style={{ color: "#E3872D" }} />}
            >
              <p>- Fullstack Developer in PT. Trimagnus Prima Dharma.</p>
              <p>- Leader Scientist at Future Gadget Lab.</p>
              <p>- Illustrator at LiLia Sekai Co Ltd.</p>
            </Timeline.Item>
            <Timeline.Item label="2019-09 - 2019-12" color="#E3872D">
              <p>- Frontend Developer at Beacukai.</p>
              <p>- Leader Scientist at Future Gadget Lab.</p>
              <p>- Illustrator at LiLia Sekai Co Ltd.</p>
            </Timeline.Item>
            <Timeline.Item label="2019-07 - 2019-08" color="#E3872D">
              <p>- Training NodeJs</p>
              <p>- Leader Scientist at Future Gadget Lab.</p>
              <p>- Illustrator at LiLia Sekai Co Ltd.</p>
            </Timeline.Item>
            <Timeline.Item label="2018-01 - 2018-06" color="#E3872D">
              <p>- Junior Programmer</p>
              <p>- Leader Scientist at Future Gadget Lab.</p>
              <p>- Illustrator at LiLia Sekai Co Ltd.</p>
            </Timeline.Item>
            <Timeline.Item label="2016 - 2019" color="#E3872D">
              <p>- Study at SMKN 2 Trenggalek</p>
            </Timeline.Item>
            <Timeline.Item label="2014 - 2016" color="#E3872D">
              <p>- Study at MTsN Model Trenggalek</p>
            </Timeline.Item>
          </Timeline>
        </Col>
      </Row>
    </div>
  );
};

export default Timelines;
