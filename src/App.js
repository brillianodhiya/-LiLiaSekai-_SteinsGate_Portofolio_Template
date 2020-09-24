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
import Home from "./pages/Home/Home";
import Skill from "./pages/Skill/Skill";
import Portofolio from "./pages/Portofolio/Portofolio";
import TimelineMe from "./pages/Timeline/Timeline";
import About from "./pages/About/About";
import { useInView } from "react-hook-inview";
import Contact from "./pages/Contact/Contact";

const { Content, Footer, Sider } = Layout;

const App = () => {
  // state
  const [breakPointPosition, setBreakPointPosition] = React.useState(false);
  const [menu, setMenu] = React.useState(["Home"]);

  const [count, setCount] = React.useState(0);

  // view visible content
  const [homeView, isHomeView] = useInView();
  const [aboutView, isAboutView] = useInView();
  const [skillView, isSkillView] = useInView();
  const [portofolioView, isPortofolioView] = useInView();
  const [timelineView, isTimelineView] = useInView();
  const [contactView, isContactVisible] = useInView();

  // change vuew menu's
  React.useEffect(() => {
    if (count > 0) {
      if (isHomeView) {
        setMenu(["Home"]);
      }
      if (isAboutView) {
        setMenu(["About"]);
      }
      if (isSkillView) {
        setMenu(["Skill"]);
      }
      if (isPortofolioView) {
        setMenu("Portofolio");
      }
      if (isTimelineView) {
        setMenu("Timeline");
      }
      if (isContactVisible) {
        setMenu(["Contact"]);
      }
    } else {
      let section = "Home";
      let view = isHomeView;
      switch (window.location.hash) {
        case "#Home":
          section = "Home";
          view = isHomeView;
          break;

        case "#About":
          section = "About";
          view = isAboutView;
          break;

        case "#Skill":
          section = "Skill";
          view = isSkillView;
          break;

        case "#Portofolio":
          section = "Portofolio";
          view = isPortofolioView;
          break;

        case "#Timeline":
          section = "Timeline";
          view = isTimelineView;
          break;

        case "#Contact":
          section = "Home";
          view = isContactVisible;
          break;

        default:
          section = "Home";
          view = isHomeView;
          break;
      }
      if (view) {
        setMenu([section]);
        setCount(1);
      }
    }
  }, [
    isHomeView,
    isAboutView,
    isSkillView,
    isPortofolioView,
    isTimelineView,
    isContactVisible,
    count,
  ]);

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
          onSelect={(info) => setCount(0)}
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
          <section
            ref={aboutView}
            id="About"
            style={
              breakPointPosition ? {} : { height: "120vh", overflow: "hidden" }
            }
          >
            <About isBreakPosition={breakPointPosition} />
          </section>
          <section ref={skillView} id="Skill">
            <Skill isBreakPosition={breakPointPosition} />
          </section>
          <section ref={portofolioView} id="Portofolio">
            <Portofolio isBreakPosition={breakPointPosition} />
          </section>
          <section ref={timelineView} id="Timeline">
            <TimelineMe isBreakPosition={breakPointPosition} />
          </section>
          <section ref={contactView} id="Contact">
            <Contact isBreakPosition={breakPointPosition} />
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
            zIndex: 1,
          }}
        >
          Copyright © 2020 Created by LiLia Sekai Corp.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
