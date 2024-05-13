import React, { useState } from "react";
import css from "./Dashboard.module.scss";
import {
  DownOutlined
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Col, Row, Flex ,Select,Dropdown,Avatar} from "antd";
import DashBoardLayout from "../DashboardLayout/DashBoardLayout";
import Trading from "../Trading/Trading";
import { Link, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";

const { Header, Sider } = Layout;

const Dashboard = () => {
  const [loginUser, setLoginUser] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const sideBarData = [
    {
      key: "1",
      icon: <img src="sidebar1.svg" className={css.icons} />,
      label: <Link to="">Dashboard</Link>
    },
    {
      key: "2",
      icon: <img src="sidebar2.svg" />,
      label: "Customer",
    },
    {
      key: "3",
      icon: <img src="sidebar3.svg" />,
      label: "Suppliers",
    },
    {
      key: "4",
      icon: <img src="sidebar4.svg" />,
      label: "Financial Institutions",
    },
    {
      key: "5",
      icon: <img src="sidebar5.svg" />,
      label: "Products",
    },
    {
      key: "6",
      icon: <img src="sidebar6.svg" />,
      label: <Link to="/trading">Trading</Link>
    },
    {
      key: "7",
      icon: <img src="sidebar6.svg" />,
      label: "Reports",
    },
    {
      key: "8",
      icon: <img src="sidebar6.svg" />,
      label: "Sales",
    },
    {
      key: "9",
      icon: <img src="sidebar6.svg" />,
      label: "Purchases",
    },
    {
      key: "10",
      icon: <img src="sidebar7.svg" />,
      label: "FAQ",
    },
  ];

  return (
    <section style={{ height: "100vh" }}>
      {!loginUser ? (
        <Login setLoginUser={setLoginUser} />
      ) : (
        <Layout style={{ height: "100vh", background: "#eeefff" }}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <div style={{ padding: "12px 39px", background: "white" }}>
              {!collapsed ? (
                <img src="tmslogo.png" />
              ) : (
                <img src="sidebarcollapse.svg" />
              )}
            </div>
            <Menu
              style={{
                paddingTop: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
              theme="light"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={sideBarData}
            />
          </Sider>
          <Layout style={{ background: "#eeefff", height: "100vh" }}>
            <Header
              style={{
                padding: 0,
                background: "white",
              }}
            >
              <Row>
                <Col span={11}>
                  {!collapsed ? (
                    <Button
                      type="text"
                      icon={<img src="sidebar.svg" />}
                      onClick={() => setCollapsed(!collapsed)}
                      style={{
                        fontSize: "16px",
                        width: 64,
                        height: 64,
                      }}
                    />
                  ) : (
                    <Button
                      type="text"
                      icon={<img src="rightarrow.svg" />}
                      onClick={() => setCollapsed(!collapsed)}
                      style={{
                        fontSize: "16px",
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        boxShadow: "0px 1px 12px -2px rgba(0,0,0,0.5)",
                      }}
                    />
                  )}
                </Col>
                <Col
                  span={13}
                  className="flexCenter"
                  style={{ justifyContent: "space-around" ,marginTop:"-20px"}}
                >
                  <div className={`flexCenter`} style={{ gap: "0.6rem",cursor:"pointer" }}>
                    <img src="meeting.svg" />
                    Meeting
                    <img src="task.svg" />
                    Tasks
                    <img src="map.svg" />
                    Approvals
                  </div>
                  <div className={`flexCenter` } style={{cursor:"pointer"}}>
                    <img src="fullscreen.svg" />
                    <img src="messages.svg" />
                    <img src="notification.svg" />
                  </div>
                  <div className="user-dropdown" >
                  <a className="anchorcss"style={{flexDirection:"row",display:"flex",alignItems:"center",gap:"0.2rem"}} onClick={(e) => e.preventDefault()}>
                    <div style={{height:"max-content"}}>
                      <Avatar src="userlogo.svg" />
                    </div>
                    &nbsp;
                    <div className="user-role">
                      <p className="fontfamily" style={{color:"rgba(35, 35, 35, 1)",fontSize:"14px",fontWeight:500,height:"21px"}}>Jane Doe</p>
                      <p
                        className="fontfamilyy"
                        style={{color:"rgba(108, 108, 108, 1)",fontSize:"12px",fontWeight:400}}
                      >
                        Admin
                      </p>
                    </div>
                    &nbsp; &nbsp;
                    <div className="arrowcss" style={{height:"max-content"}}>
                      <DownOutlined style={{ color: "black" }} />
                    </div>
                  </a>
              </div>
                </Col>
              </Row>
            </Header>
            <Routes>
              <Route path="/" element={<DashBoardLayout />} />
              <Route path="/trading" element={<Trading />} />
            </Routes>
          </Layout>
        </Layout>
      )}
    </section>
  );
};

export default Dashboard;
