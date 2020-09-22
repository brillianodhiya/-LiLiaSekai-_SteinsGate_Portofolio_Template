import React from "react";
import Header from "../../components/Header";
import { Row, Col, Typography, Image } from "antd";
import Gear from "../../assets/gear.png";
import { Gauge } from "@ant-design/charts";

const Skill = ({ isBreakPosition }) => {
  const config = {
    title: {
      visible: false,
      text: "扇形仪表盘",
    },
    value: 34,
    min: 0,
    max: 100,
    range: [0, 70],
    format: (v) => {
      return v + "%";
    },
    color: ["l(0) 0:#ddc0a3 1:#E3872D"],
  };

  return (
    <div style={{ margin: "24px" }}>
      <Header
        width={isBreakPosition ? 12 : 8}
        title="Some About my Skill"
        desciption="More info about my skill"
        // withDesc
      />
      <img style={{ right: 0, position: "absolute" }} src={Gear} />
      <Row>
        <Col span={isBreakPosition ? 24 : 12} style={{ marginTop: "8vmin" }}>
          <Typography.Paragraph>
            Dolore adipisicing excepteur proident qui ut minim voluptate ipsum
            ad laborum. Dolor irure tempor minim et et Lorem officia quis
            deserunt. Aliquip tempor voluptate ea occaecat officia amet cillum
            ullamco eiusmod consequat tempor eu. Consectetur tempor sint aliquip
            voluptate voluptate.
          </Typography.Paragraph>
        </Col>
        <Col span={isBreakPosition ? 12 : 6}>
          <Gauge {...config} />
        </Col>
      </Row>
    </div>
  );
};

export default Skill;
