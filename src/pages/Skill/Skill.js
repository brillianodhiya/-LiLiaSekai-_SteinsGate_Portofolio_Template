import React from "react";
import Header from "../../components/Header";
import { Row, Col, Typography, Image } from "antd";
import Gear from "../../assets/gear.png";
import { Bullet } from "@ant-design/charts";

const Skill = ({ isBreakPosition }) => {
  const config = {
    data: [
      {
        title: "Javascript",
        measures: [83],
        targets: [100],
      },
      {
        title: "Node Js",
        measures: [87],
        targets: [100],
      },
      {
        title: "Flutter",
        measures: [45],
        targets: [100],
      },
      {
        title: "Java",
        measures: [72],
        targets: [100],
      },
      {
        title: "Photoshop",
        measures: [75],
        targets: [100],
      },
      {
        title: "Marvel App",
        measures: [56],
        targets: [100],
      },
    ],
    rangeMax: 100,
    color: ["#E3872D"],
    rangeColors: ["#E3872D"],
    markerColors: ["#E3872D"],
    measureColors: ["#E3872D"],
    forceFit: true,
    animation: true,
    label: {
      formatter: (text) => text + "%",
      style: {
        fontSize: 12,
        fontWeight: "bolder",
      },
    },
    xAxis: {
      visible: true,
      label: {
        style: {
          fontSize: 14,
          //   fontWeight: "bold",
        },
      },
    },
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
        <Col span={24} style={{ marginTop: "8vmin" }}>
          <Typography.Paragraph
            style={{ width: isBreakPosition ? "100%" : "50%" }}
          >
            Dolore adipisicing excepteur proident qui ut minim voluptate ipsum
            ad laborum. Dolor irure tempor minim et et Lorem officia quis
            deserunt. Aliquip tempor voluptate ea occaecat officia amet cillum
            ullamco eiusmod consequat tempor eu. Consectetur tempor sint aliquip
            voluptate voluptate.
          </Typography.Paragraph>
        </Col>
        <Col span={24}>
          <Bullet {...config} />
        </Col>
      </Row>
    </div>
  );
};

export default Skill;
