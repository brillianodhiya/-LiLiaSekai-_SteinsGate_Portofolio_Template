import React from "react";
import Header from "../../components/Header";
import { List, Space } from "antd";
import Gear from "../../assets/gear.png";
import GearReverse from "../../assets/gear-reverse.png";
import { StarOutlined, ForkOutlined } from "@ant-design/icons";

const listData = [];
for (let i = 1; i < 18; i++) {
  listData.push({
    href: "https://github.com/",
    title: `Project ${i}`,
    description:
      "Ea incididunt laboris consectetur exercitation consequat anim eiusmod sit eu pariatur exercitation eiusmod. Do dolore irure aliqua quis eiusmod.",
    content:
      "Aliqua labore dolore Lorem elit nostrud adipisicing anim veniam aliqua sit Lorem magna. Occaecat aliqua irure consectetur nisi voluptate fugiat sunt excepteur laboris exercitation. Amet minim in occaecat labore dolore pariatur exercitation proident.",
    star: Math.floor(Math.random() * 1000) + 1,
    fork: Math.floor(Math.random() * 1000) + 1,
    image: `https://picsum.photos/id/${i}/272`,
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Portofolio = ({ isBreakPosition }) => {
  return (
    <div style={{ margin: "24px", paddingTop: "24px", paddingBottom: "32px" }}>
      <img style={{ right: 0, position: "absolute" }} src={Gear} />
      <img style={{ left: 50, position: "absolute" }} src={GearReverse} />
      <Header
        width={isBreakPosition ? 16 : 8}
        title="Mostly the Result of My Work"
        desciption="mostly the result of my work"
        // withDesc
      />
      <List
        style={{ marginTop: "24px" }}
        itemLayout="vertical"
        size="default"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
          simple: true,
        }}
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text={item.star}
                key="list-vertical-star-o"
              />,
              <IconText
                icon={ForkOutlined}
                text={item.fork}
                key="list-vertical-like-o"
              />,
            ]}
            extra={<img width={272} alt="Image" src={item.image} />}
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Portofolio;
