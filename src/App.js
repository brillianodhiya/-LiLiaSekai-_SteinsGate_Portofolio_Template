import React from "react";
import {
  Layout,
  Menu,
  Divider,
  Avatar,
  Badge,
  Typography,
  BackTop,
} from "antd";
import "./App.less";
import TypeWriter from "./components/Typer";
import Home from "./pages/Home/Home";
import Skill from "./pages/Skill/Skill";
import Portofolio from "./pages/Portofolio/Portofolio";
import TimelineMe from "./pages/Timeline/Timeline";
import About from "./pages/About/About";
import { useInView } from "react-hook-inview";
import Contact from "./pages/Contact/Contact";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [breakPointPosition, setBreakPointPosition] = React.useState(false);
  const [menu, setMenu] = React.useState(["Home"]);

  const [homeView, isHomeView] = useInView();
  React.useEffect(() => {
    if (isHomeView) {
      setMenu(["Home"]);
    }
  }, [isHomeView]);

  const [aboutView, isAboutView] = useInView();
  React.useEffect(() => {
    if (isAboutView) {
      setMenu(["About"]);
    }
  }, [isAboutView]);

  const [skillView, isSkillView] = useInView();
  React.useEffect(() => {
    if (isSkillView) {
      setMenu(["Skill"]);
    }
  }, [isSkillView]);

  const [portofolioView, isPortofolioView] = useInView();
  React.useEffect(() => {
    if (isPortofolioView) {
      setMenu("Portofolio");
    }
  }, [isPortofolioView]);

  const [timelineView, isTimelineView] = useInView();
  React.useEffect(() => {
    if (isTimelineView) {
      setMenu("Timeline");
    }
  }, [isTimelineView]);

  const [contactView, isContactVisible] = useInView();
  React.useEffect(() => {
    if (isContactVisible) {
      setMenu(["Contact"]);
    }
  }, [isContactVisible]);

  return (
    <Layout>
      <Sider
        className="sider-custom"
        breakpoint="xl"
        collapsedWidth="0"
        theme="light"
        width="300"
        onBreakpoint={(broken) => {
          console.log(broken);
          setBreakPointPosition(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type, "INI KAH");
        }}
      >
        <Badge.Ribbon text="Web Developer" color="#E3872D">
          <div style={{ textAlign: "center", paddingTop: "24px" }}>
            <Avatar
              size={112}
              src="https://images.wallpapersden.com/image/download/rintarou-okabe-steins-gate_67019_2048x2732.jpg"
            />
            <Typography.Title style={{ marginTop: "20px" }} level={4}>
              <span style={{ color: "#E3872D" }}>Okabe</span> Rintarou
            </Typography.Title>
          </div>
        </Badge.Ribbon>
        <Divider />
        <Menu
          onSelect={(info) => setMenu([info.key])}
          selectedKeys={menu}
          style={{ maxHeight: "55vh", overflow: "auto" }}
        >
          <Menu.Item
            key="Home"
            onClick={() => window.location.replace("#Home")}
            style={{ fontSize: "larger", textAlign: "center" }}
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="About"
            onClick={() => window.location.replace("#About")}
            style={{ fontSize: "larger", textAlign: "center" }}
          >
            About
          </Menu.Item>
          <Menu.Item
            key="Skill"
            onClick={() => window.location.replace("#Skill")}
            style={{ fontSize: "larger", textAlign: "center" }}
          >
            Skill
          </Menu.Item>
          <Menu.Item
            key="Portofolio"
            onClick={() => window.location.replace("#Portofolio")}
            style={{ fontSize: "larger", textAlign: "center" }}
          >
            Portofolio
          </Menu.Item>
          <Menu.Item
            key="Timeline"
            onClick={() => window.location.replace("#Timeline")}
            style={{ fontSize: "larger", textAlign: "center" }}
          >
            Timeline
          </Menu.Item>
          <Menu.Item
            key="Contact"
            onClick={() => window.location.replace("#Contact")}
            style={{ fontSize: "larger", textAlign: "center" }}
          >
            Contact
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        {/* <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        /> */}
        <Content
          style={{
            marginLeft: breakPointPosition ? 0 : 300,
            transition: "0.5s",
            background: "#fff",
          }}
        >
          <BackTop>
            <div
              style={{
                height: 40,
                width: 40,
                lineHeight: "40px",
                borderRadius: 4,
                backgroundColor: "#E3872D",
                color: "#fff",
                textAlign: "center",
                fontSize: 14,
              }}
            >
              UP
            </div>
          </BackTop>
          <section ref={homeView} id="Home" style={{ height: "120vh" }}>
            <Home />
          </section>
          <section ref={contactView} id="About" style={{ height: "120vh" }}>
            <About />
          </section>
          <section ref={skillView} id="Skill" style={{ height: "120vh" }}>
            <Skill />
          </section>
          <section
            ref={portofolioView}
            id="Portofolio"
            style={{ height: "120vh" }}
          >
            <Portofolio />
          </section>
          <section ref={timelineView} id="Timeline" style={{ height: "120vh" }}>
            <TimelineMe />
          </section>
          <section ref={contactView} id="Contact" style={{ height: "120vh" }}>
            <Contact />
          </section>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            marginLeft: breakPointPosition ? 0 : 300,
            background: "#403D3C",
            color: "#E3872D",
            // textShadow: "0 0 3px #E3872D, 0 0 5px #E3872D",
            fontWeight: "bold",
          }}
        >
          Copyright © 2020 Created by LiLia Sekai
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
