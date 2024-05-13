import React, { useState } from "react";
import css from "./Mobile.module.scss";
import { Tabs } from "antd";
import Chart from "../Chart/Chart";

const MobileChart = () => {
  const [metal, setMetal] = useState(true);
  const [mineral, setMineral] = useState(false);
  const [hover, setHover] = useState("");

  const styleData = {
    background: "rgba(0, 0, 0, 0.25)",
    padding: "5px 20px",
    borderRadius: "50px",
    marginTop: "-5px",
    fontFamily:"Gilroy"
  };

  const onChange = (key) => {
    console.log(key);
  };

  const tabData = [
    {
      name: "Coal",
      key: 1,
      dollar: "2303.72",
      status: "10.3% ↑",
      statusCode: "rgba(18, 148, 140, 1)",
      datacolor: "rgba(58, 163, 69, 1)",
      statusSign: "↑",
    },
    {
      name: "Aluminium",
      key: 2,
      dollar: "1242.82",
      status: "11.5% ↓",
      statusCode: "rgba(252, 89, 128, 1)",
      datacolor: "rgba(221, 184, 52, 1)",
      statusSign: "↓",
    },
    {
      name: "Iron Ore",
      key: 3,
      dollar: "398.53",
      status: "8.9% ↓",
      statusCode: "rgba(252, 89, 128, 1)",
      datacolor: "rgba(66, 174, 235, 1)",
      statusSign: "↓",
    },
  ];

  const insideChart = tabData.filter((n) => {
    return n.name === hover;
  });
  console.log(insideChart, "insideChart");

  const items = [
    {
      key: "1",
      label: <div style={{fontFamily:"Gilroy"}}>Amount</div>,
      children: (
        <div>
          {tabData.map((n) => {
            return (
              <div style={{ display: "flex", gap: "0.5rem" }} key={n.key}>
                <div
                  style={{
                    height: "12px",
                    width: "12px",
                    background: n.datacolor,
                    borderRadius: "50%",
                    marginTop: "5px",
                    fontFamily:"Gilroy"
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    fontFamily:"Gilroy"
                  }}
                >
                  <div style={{ fontSize: "15px",fontFamily:"Gilroy" }}>{n.name}</div>
                  <div style={{ display: "flex", gap: "0.4rem" }}>
                    <div style={{ fontSize: "18px",fontFamily:"Gilroy" }}>
                      <span style={{ color: "rgba(184, 181, 208, 1)",fontFamily:"Gilroy" }}>$</span>
                      {n.dollar}
                    </div>
                    <div
                      style={{
                        background: n.statusCode,
                        fontSize: "12px",
                        padding: "5px 8px 0px 6px",
                        borderRadius: "3px",
                        fontFamily:"Gilroy"
                      }}
                    >
                      {n.status}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      key: "2",
      label: <div style={{fontFamily:"Gilroy"}}>Volume</div>,
      children: <div style={{fontFamily:"Gilroy"}}>Content of Tab Pane 2</div>,
    },
  ];
  return (
    <div style={{fontFamily:"Gilroy"}}>
      <div
        style={{
          height: "700px",
          borderRadius: "26px",
          padding: "18% 8%",
          textAlign: "center",
          width: "100%",
          fontFamily:"Gilroy"
        }}
        className={css.widgetthree}
      >
        <div
          style={{
            color: "rgba(255, 255, 255, 1)",
            fontSize: "18px",
            fontWeight: 600,
            paddingBottom: "25px",
            fontFamily:"Gilroy"
          }}
        >
          Divisions
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            fontSize: "15px",
            fontWeight: 400,
            color: "rgba(255, 255, 255, 1)",
            fontFamily:"Gilroy"
          }}
        >
          <div
            style={metal ? styleData : {}}
            onClick={() => {
              setMetal(true);
              setMineral(false);
            }}
            className={css.metal}
          >
            Metals
          </div>
          <div
            style={mineral ? styleData : {}}
            onClick={() => {
              setMetal(false);
              setMineral(true);
            }}
            className={css.mineral}
          >
            Minerals
          </div>
        </div>
        <div
          style={{
            height: "270px",
            marginTop: "35px",
            alignItems: "center",
            justifyContent: "center",
            fontFamily:"Gilroy",
            display:"flex"
          }}
        >
          <div
            style={{
              width: 200,
              height: 200,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily:"Gilroy"
            }}
            className={css.chartRound}
          >
            <Chart setHover={setHover} />

            <div
              style={{
                height: "76%",
                width: "76%",
                borderRadius: "50%",
                background: "rgba(42, 38, 88, 1)",
                position: "absolute",
                top: "12%",
                left: "12%",
                display: "flex",
                fontFamily:"Gilroy",
                alignItems:"center"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#fff",
                  justifyContent: "center",
                  width: "100%",
                  fontFamily:"Gilroy",
                  position:"absolute",
                }}
              >
                <p
                  style={{
                    color: "rgba(255, 255, 255, 1)",
                    fontSize: "15px",
                    fontWeight: 500,
                    fontFamily:"Gilroy"
                  }}
                >
                  {insideChart[0]?.name}
                </p>
                <p
                  style={{
                    display: "flex",
                    color: "rgba(255, 255, 255, 1)",
                    fontSize: "20px",
                    gap:2,
                    fontFamily:"Gilroy"
                  }}
                >
                  <span
                    style={{
                      color: insideChart.length > 0 ? "rgba(184, 181, 208, 1)" : "transparent",
                      fontSize: "18px",
                      fontWeight: 400,
                      fontFamily:"Gilroy"
                    }}
                  >
                    $
                  </span>
                  {insideChart[0]?.dollar}
                  <p
                    style={{
                      background: insideChart[0]?.statusCode,
                      padding: "0px 10px 3px 10px",
                      borderRadius: "5px",
                      height: "28px",
                      fontFamily:"Gilroy",
                    }}
                  >
                    {insideChart[0]?.statusSign}
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "0rem 0.9rem" ,fontFamily:"Gilroy"}}>
          <div className="tabsformobile">
            <Tabs
              defaultActiveKey="1"
              items={items}
              onChange={onChange}
              style={{ color: "white" }}
              topBarStyle={{
                color: "white",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileChart;
