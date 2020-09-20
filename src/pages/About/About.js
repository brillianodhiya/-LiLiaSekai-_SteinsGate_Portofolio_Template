import React from "react";
import Header from "../../components/Header";
import Typer from "../../components/Typer";
import {
  Row,
  Col,
  Typography,
  Descriptions,
  Image,
  Divider,
  Space,
  Button,
} from "antd";
import Particle from "../../components/Particle";

const About = ({ isBreakPosition }) => {
  return (
    <div style={{ margin: "24px" }}>
      <Header
        width={isBreakPosition ? 12 : 6}
        title="About Me"
        desciption="Main Information About Me"
      />
      <Row>
        <Col style={{ marginTop: "10vmin" }} span={isBreakPosition ? 24 : 12}>
          <Typer
            level={3}
            heading="I'am Okabe and"
            messages={[
              "Mad Scientist",
              "Web Developer",
              "UI/UX Designer",
              "Time Traveler",
            ]}
            messagesColor="#E3872D"
          />
          <Typography.Paragraph style={{ fontSize: "16px" }}>
            Hi! My name is{" "}
            <span style={{ color: "#E3872D" }}>Okabe Rintarou</span>. I am a Web
            Developer and also a scientist in the field of time machines, I have
            a passion in developing systems and applications. My experience in
            the field of making applications is approximately 11 years since I
            was in junior high school. Now I also have my own laboratory for
            myself and my team to develop a time machine. I also continue to
            open services for creating web and android based applications.
          </Typography.Paragraph>
          <Descriptions title="More Information About me ?" column={2}>
            <Descriptions.Item label={<b>Birthday</b>}>
              December 14th, 1991
            </Descriptions.Item>
            <Descriptions.Item label={<b>Age</b>}>28</Descriptions.Item>
            <Descriptions.Item label={<b>City</b>}>
              Akibahara, Japan
            </Descriptions.Item>
            <Descriptions.Item label={<b>Interests</b>}>
              Time Machine, System
            </Descriptions.Item>
            <Descriptions.Item label={<b>Company</b>}>
              Future Gadget Lab
            </Descriptions.Item>
            <Descriptions.Item label={<b>Mail</b>}>
              rintarou.okabe@yahoo.com
            </Descriptions.Item>
            <Descriptions.Item label={<b>Twitter</b>}>
              @okabe_rintarou
            </Descriptions.Item>
            <Descriptions.Item label={<b>Phone</b>}>
              + 81 828366282
            </Descriptions.Item>
          </Descriptions>
          {!isBreakPosition && (
            <Space size="large" style={{ marginTop: "5vmin" }}>
              <Button size="large" block type="primary">
                Download CV
              </Button>
              <Button size="large" block type="primary">
                Send me a Message
              </Button>
            </Space>
          )}
        </Col>
        <Col
          span={isBreakPosition ? 24 : 10}
          style={{
            maxHeight: 515,
            overflow: "hidden",
            borderBottom: "3px solid",
          }}
        >
          <Image
            width={362}
            src="https://pm1.narvii.com/6460/125a2f99d03a7862350a07ecd0cc362713b086e6_00.jpg"
          />
        </Col>
        {isBreakPosition && (
          <Col span={24} style={{ marginTop: "5vmin" }}>
            <Space size="large">
              <Button size="large" block type="primary">
                Download CV
              </Button>
              <Button size="large" block type="primary">
                Send me a Message
              </Button>
            </Space>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default About;
