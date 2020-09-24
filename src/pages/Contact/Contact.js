import React from "react";
import Gear from "../../assets/gear.png";
import Header from "../../components/Header";
import {
  Row,
  Col,
  Avatar,
  Typography,
  Card,
  Divider,
  Space,
  Tooltip,
} from "antd";
import {
  FieldTimeOutlined,
  InstagramFilled,
  TwitterCircleFilled,
  WhatsAppOutlined,
  LinkedinFilled,
  MediumCircleFilled,
  GithubFilled,
} from "@ant-design/icons";
import FormContact from "./FormContact";

const Contact = ({ isBreakPosition }) => {
  return (
    <div style={{ margin: "24px" }}>
      <Header
        width={isBreakPosition ? 16 : 8}
        title="Contact Me"
        desciption="Get in touch with me"
        withDesc
      />
      <img
        alt="gear-background"
        style={{ right: 0, position: "absolute" }}
        src={Gear}
      />
      <Row>
        <Col span={isBreakPosition ? 24 : 12} style={{ marginTop: "8vmin" }}>
          <Typography.Paragraph>
            <Avatar
              style={{ float: "left", margin: 12 }}
              size={100}
              src="https://cdn.myanimelist.net/images/characters/9/344294.jpg"
            />
            Dolore in sunt sit sint ipsum esse labore dolor eiusmod sint.
            Excepteur tempor labore proident eiusmod enim exercitation laboris
            deserunt veniam tempor ex dolore non. Do duis reprehenderit deserunt
            consectetur anim sunt consequat. Lorem sint commodo esse ad. Nulla
            Lorem esse cillum in ad aliquip nisi. Magna reprehenderit eiusmod ad
            incididunt irure pariatur sint anim cupidatat veniam aliquip elit
            incididunt.
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{ display: "flex", alignItems: "center" }}
          >
            <FieldTimeOutlined
              style={{ color: "#E3872D", fontSize: "32px", marginRight: 10 }}
            />
            All-time available for your offer
          </Typography.Paragraph>
          <Divider>Find me in other media</Divider>
          <Space size={52} align="center">
            <Tooltip title="@okabe_rintarou" placement="right">
              <a href="https://www.instagram.com/">
                <InstagramFilled
                  style={{ color: "#403D3C", fontSize: "32px" }}
                />
              </a>
            </Tooltip>
            <Tooltip title="@okabe_rintarou" placement="right">
              <a href="https://www.twitter.com/">
                <TwitterCircleFilled
                  style={{ color: "#403D3C", fontSize: "32px" }}
                />
              </a>
            </Tooltip>
            <Tooltip title="+ 81 828366282" placement="right">
              <a href="https://www.whatsapp.com/">
                <WhatsAppOutlined
                  style={{ color: "#403D3C", fontSize: "32px" }}
                />
              </a>
            </Tooltip>
            <Tooltip title="Okabe Rintarou" placement="right">
              <a href="https://www.linkin.com/">
                <LinkedinFilled
                  style={{ color: "#403D3C", fontSize: "32px" }}
                />
              </a>
            </Tooltip>
            <Tooltip title="Okarin" placement="right">
              <a href="https://www.medium.com/">
                <MediumCircleFilled
                  style={{ color: "#403D3C", fontSize: "32px" }}
                />
              </a>
            </Tooltip>
            <Tooltip title="Okarin" placement="right">
              <a href="https://www.github.com/">
                <GithubFilled style={{ color: "#403D3C", fontSize: "32px" }} />
              </a>
            </Tooltip>
          </Space>
        </Col>
        <Col
          span={isBreakPosition ? 24 : 12}
          style={{
            padding: !isBreakPosition ? 16 : 0,
            marginTop: isBreakPosition && "8vmin",
            // order: isBreakPosition ? 1 : 2,
          }}
        >
          <Card
            title="Contact Form"
            style={{
              padding: 16,
            }}
          >
            <FormContact />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
