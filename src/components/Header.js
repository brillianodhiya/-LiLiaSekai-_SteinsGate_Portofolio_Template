import React from "react";
import { Typography, Row, Col } from "antd";

const Header = ({
  width = 6,
  title = "Default Title",
  desciption = "Description",
  withDesc,
}) => {
  return (
    <Row>
      <Col span={width} style={{ textAlign: "left" }}>
        <Typography.Title
          level={2}
          style={{ borderBottom: "3px solid #E3872D", paddingBottom: "4px" }}
        >
          {title}
        </Typography.Title>
        <hr
          style={{
            borderTop: "3px solid #403D3C",
            maxWidth: "80%",
            marginLeft: "0",
            marginTop: "0",
          }}
        />
        {withDesc ? desciption : null}
      </Col>
      <Col span={19}></Col>
    </Row>
  );
};

export default Header;
