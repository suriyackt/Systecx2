import React from "react";
// import Card from "../Card/Card";
import MobileChart from "../MobileLayout/MobileChart";
import { Layout, Col, Row, Select } from "antd";
import css from "./Dashboard.module.scss";
import Card from "../Card/Card";
 
const { Content } = Layout;

const DashBoardLayout = () => {
  const cardData = [
    {
      count: "12",
      name: "NEW REQUIREMENTS",
      key: 1,
      image: "inout.png",
    },
    {
      count: "02",
      name: "INITIATED",
      key: 2,
      image: "inout.png",
    },
    {
      count: "03",
      name: "UPCOMING",
      key: 3,
      image: "inout.png",
    },
  ];

  const tradeData = [
    {
      count: "12",
      name: "CONTRACT STAGE",
      key: 1,
      image: "inout.png",
      dollar: "$3,5678",
    },
    {
      count: "20",
      name: "PRE SHIPMENT",
      key: 2,
      image: "cube.png",
      dollar: "$3,5678",
    },
    {
      count: "8",
      name: "POST FIXTURES VESSEL",
      key: 3,
      image: "case.png",
      dollar: "$3,5678",
    },
    {
      count: "5",
      name: "IN-TRANSIT",
      key: 3,
      image: "case.png",
      dollar: "$20,5678",
    },
    {
      count: "5",
      name: "PRE CLOSURE",
      key: 3,
      image: "case.png",
      dollar: "$3,5678",
    },
  ];

  const widgetThree = [
    {
      count: "1369",
      name: "CUSTOMERS",
      key: 1,
      image: "inout.png",
    },
    {
      count: "02",
      name: "SUPPLIERS",
      key: 2,
      image: "inout.png",
    },
    {
      count: "03",
      name: "MEETINGS",
      key: 3,
      image: "meetingcard.png",
    },
  ];

  const profileData = [
    {
      name: "Aneesh thomas",
      key: 1,
      status: "Freight charges",
      duration: "3h ago",
      statusCode: "TR-22-00001",
      profile: "Aneesh.png",
    },
    {
      name: "Nita Chakaravarty",
      key: 2,
      status: "Freight",
      duration: "3h ago",
      statusCode: "TR-22-00001",
      profile: "Nikitha.png",
    },
    {
      name: "Aneesh thomas",
      key: 3,
      status: "Freight",
      duration: "3h ago",
      statusCode: "TR-22-00001",
      profile: "Aneesh.png",
    },
  ];
  return (
    <div style={{ overflow: "auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2% 3% 0% 3%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "rgba(112, 120, 149, 1)",
          }}
        >
          <img src="Dashboard.svg" />
          DashBoard
        </div>
        <Select
          style={{
            width: 120,
            color: "rgba(35, 35, 35, 1)",
            fontSize: "14px",
            fontWeight: 400,
            height: "40px",
          }}
          value={"Montly"}
        />
      </div>
      <Content
        style={{
          margin: "2% 1% 8% 2%",
        }}
      >
        <Row style={{ flexDirection: "row", gap: "1.3rem" }}>
          <Col span={14}>
            <div
              className={css.widgetone}
              style={{
                height: "360px",
                borderRadius: "28px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "0.6rem",
                  padding: "27px 1px 0px 30px",
                }}
              >
                <div>
                  <img src="profile.svg" />
                </div>
                <div>
                  <h4 style={{ fontFamily: "Gilroy" }}>Good morning</h4>
                  <h3 style={{ fontFamily: "Gilroy" }}>Vishwanath</h3>
                </div>
              </div>
              <Row>
                <Col span={24} style={{ padding: "3% 4% 0% 3%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "1rem",
                    }}
                  >
                    {cardData.map((data) => {
                      return (
                        <Card
                          count={data.count}
                          name={data.name}
                          key={data.key}
                          image={data.image}
                        />
                      );
                    })}
                  </div>
                </Col>
              </Row>
            </div>
            <div
              style={{
                height: "320px",
                borderRadius: "28px",
                background: "white",
                marginTop: "18px",
              }}
            >
              <div>
                <div className={css.widgettwo}>
                  <span
                    className="notification"
                    style={{
                      color: "rgba(105, 120, 159, 1)",
                      fontWeight: 500,
                      fontSize: "20px",
                      fontFamily: "Gilroy",
                    }}
                  >
                    Notifications
                  </span>
                  <div>
                    <a
                      style={{
                        color: "rgba(44, 103, 255, 1)",
                        fontWeight: 500,
                        fontSize: "14px",
                        borderBottom: "1px solid rgba(44, 103, 255, 1)",
                      }}
                    >
                      View All
                    </a>
                  </div>
                </div>
                {profileData.map((user) => {
                  return (
                    <div
                      className={css.profiledata}
                      style={{ borderBottom: user.key === 3 && "0px" }}
                      key={user.key}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <img src={user.profile} />
                        <p
                          style={{
                            color: "rgba(36, 52, 72, 1)",
                            fontSize: "13px",
                            fontWeight: 600,
                          }}
                        >
                          {user.name}
                          <span
                            style={{
                              color: "rgba(102, 104, 125, 1)",
                              fontSize: "13px",
                              fontWeight: 500,
                            }}
                          >
                            &nbsp; has updated &nbsp;
                          </span>
                          {user.status}
                          <p
                            style={{
                              background: "rgba(226, 231, 255, 1)",
                              borderRadius: "6px",
                              width: "max-content",
                              padding: "4px 10px",
                              color: "rgba(5, 23, 46, 1)",
                              fontSize: "10px",
                              fontWeight: 500,
                            }}
                          >
                            {user.statusCode}
                          </p>
                        </p>
                      </div>
                      <div
                        style={{
                          color: "rgba(102, 104, 125, 1)",
                          fontSize: "10px",
                          fontWeight: 400,
                        }}
                      >
                        {user.duration}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col span={5}>
            <MobileChart />
          </Col>
          <Col span={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              {widgetThree.map((data) => {
                return (
                  <Card
                    count={data.count}
                    name={data.name}
                    key={data.key}
                    meeting={data.meeting}
                    image={data.image}
                  />
                );
              })}
            </div>
          </Col>
        </Row>

        <div
          style={{
            padding: "25px 10px",
            color: "rgba(105, 120, 159, 1)",
            fontSize: "22px",
            fontWeight: 500,
            letterSpacing: "7",
            fontFamily: "Gilroy",
          }}
        >
          TRADES OVERVIEW
        </div>
        <Row style={{ padding: "0% 2% 0% 1%" }}>
          <Col span={24}>
            <div
              className={css.widgetlast}
              style={{
                height: "420px",
                borderRadius: "28px",
                padding: "2rem",
                margin: "-15px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p
                      style={{
                        color: "rgba(159, 173, 199, 1)",
                        fontSize: "12px",
                        fontWeight: 600,
                        fontFamily: "Gilroy",
                      }}
                    >
                      TOTAL TRADES
                    </p>
                    <div
                      style={{
                        color: "rgba(56,56, 116, 1)",
                        fontSize: "48px",
                        fontWeight: 400,
                        fontFamily: "Gilroy",
                      }}
                    >
                      3586
                    </div>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "rgba(159, 173, 199, 1)",
                        fontSize: "12px",
                        fontWeight: 600,
                        fontFamily: "Gilroy",
                      }}
                    >
                      TOTAL REVENUE OF TRADES
                    </p>
                    <div
                      style={{
                        color: "rgba(56,56, 116, 1)",
                        fontSize: "48px",
                        fontWeight: 400,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.2rem",
                        fontFamily: "Gilroy",
                      }}
                    >
                      <span
                        style={{
                          color: "rgba(105,120, 159, 1)",
                          fontSize: "41px",
                          fontWeight: 400,
                        }}
                      >
                        $
                      </span>
                      3,945.07{" "}
                      <div
                        style={{
                          background: "rgba(18, 148, 140, 1)",
                          borderRadius: "5px",
                          color: "rgba(255, 255, 255, 1)",
                          fontSize: "20px",
                          fontWeight: 500,
                          padding: "4px 12px 3px 12px",
                          width: "max-content",
                          height: "max-content",
                        }}
                      >
                        10.2% ↑
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Row>
                <Col span={24} style={{ padding: "5% 0%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "1.5rem",
                    }}
                  >
                    {tradeData.map((data) => {
                      return (
                        <Card
                          count={data.count}
                          name={data.name}
                          key={data.key}
                          image={data.image}
                          dollar={data.dollar}
                        />
                      );
                    })}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Content>
    </div>
  );
};

export default DashBoardLayout;
