import React from "react";
import { Table, Tag, Tabs,Popover } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const Trading = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Contract In Process",
      children: "",
    },
    {
      key: "2",
      label: "Contracts Finalized (In-Execution)",
      children: "",
    },
    {
      key: "3",
      label: "Shipment Completed (Pre-Closure)",
      children: "",
    },
    {
      key: "4",
      label: "Closed Trades",
      children: "",
    },
  ];

  const content = (
    <div style={{cursor:"pointer"}}>
      <p style={{padding:"4% 4%",borderBottom:"1px solid #e8e0e0",fontSize:"12px",fontWeight:500,color:"rgba(88, 89, 102, 1)"}}>Edit</p>
      <p style={{padding:"4% 4%",borderBottom:"1px solid #e8e0e0",fontSize:"12px",fontWeight:500,color:"rgba(88, 89, 102, 1)"}}>Freight Charges Updates</p>
      <p style={{padding:"4% 4%",borderBottom:"1px solid #e8e0e0",fontSize:"12px",fontWeight:500,color:"rgba(88, 89, 102, 1)"}}>Prepare Estimated Cost Sheet</p>
      <p style={{padding:"4% 4%",borderBottom:"1px solid #e8e0e0",fontSize:"12px",fontWeight:500,color:"rgba(88, 89, 102, 1)"}}>Customer Draft Contract</p>
      <p style={{padding:"4% 4%",borderBottom:"1px solid #e8e0e0",fontSize:"12px",fontWeight:500,color:"rgba(88, 89, 102, 1)"}}>Supplier Draft Contract</p>
      <p style={{padding:"4% 4%",borderBottom:"1px solid #e8e0e0",fontSize:"12px",fontWeight:500,color:"rgba(88, 89, 102, 1)"}}>Mark Contracts Finalized</p>
    </div>
  );

  const columns = [
    {
      title: "TRADE#",
      dataIndex: "trade",
      key: "trade",
      render: (tags) => (
        <>
         <div>
            <div style={{fontSize:"12px",letterSpacing:"1%",color:"rgba(79, 84, 102, 1)",fontWeight:600,display:"flex",gap:"2px"}}>
              {tags.content}
              <InfoCircleOutlined style={{height:"15px",fill:"rgba(167, 179, 195, 1)"}}  />
            </div>
            <div style={{color:"rgba(102, 104, 125, 1)",fontSize:"11px",fontWeight:400}}>
              {tags.date}
            </div>
          </div>
        </>
      )
    },
    {
      title: "CONTRACT DETAILS",
      dataIndex: "contractdetails",
      key: "contractdetails",
      render: (tags) => (
        <>
        {
          tags.map((n)=>{
            return<>
            <div style={{paddingBottom:"10%"}}>
              <div style={{paddingBottom:"2%", color:"rgba(102, 104, 125, 1)",font:"10px",fontWeight:400}}>
                <p style={{color:"rgba(79, 84, 102, 1)",fontWeight:600,fontSize:"12px"}}>{n.content}</p>
                {n.company}
              </div>
              <div style={{color:"rgba(79, 84, 102, 1)",fontWeight:600,fontSize:"12px"}}>
                  {n.credit}
              </div>
            </div>
            </>
          })
        }
        </>
      )
    },
    {
      title: "PRODUCTS",
      dataIndex: "products",
      key: "products",
      render: (tags) => (
        <>
        <div>
        {
          tags.map((n)=>{
            return<>
            <div style={{paddingBottom:"7%"}}>
              <div style={{paddingBottom:"2%", color:"rgba(102, 104, 125, 1)",font:"10px",fontWeight:400}}>
                <p style={{color:"rgba(79, 84, 102, 1)",fontWeight:700,fontSize:"12px"}}>{n.content}</p>
                {n.amount}
              </div>           
            </div>
            </>
          })
        }
        <div>
          <a style={{color:"rgba(44, 103, 255, 1)",fontSize:"12px",fontWeight:600,borderBottom:"1px solid rgba(44, 103, 255, 1)", paddingTop:"5%"}}>+3 Products</a>
        </div>
        </div>
        </>
      )
    },
    {
      title: "SHIPPING DETAILS",
      dataIndex: "shippingdetails",
      key: "shippingdetails",
      render: (tags) => (
       <>
       <div style={{display:"flex",gap:"5%"}}>
<div>
<div style={{paddingBottom:"7%"}}>
              <div style={{ color:"rgba(79, 84, 102, 1)",font:"12px",fontWeight:600}}>
                <span style={{color:"rgba(79, 84, 102, 1)",fontWeight:400,fontSize:"12px"}}>Long-term</span>&nbsp;
                FOB
              </div>    
              <div style={{ color:"rgba(79, 84, 102, 1)",font:"12px",fontWeight:600}}>
                <span style={{color:"rgba(79, 84, 102, 1)",fontWeight:400,fontSize:"12px"}}>By</span> &nbsp;
                Sea
              </div>           
            </div>
            <div style={{paddingBottom:"7%"}}>
              <div style={{paddingBottom:"2%", color:"rgba(102, 104, 125, 1)",font:"12px",fontWeight:700}}>
                <span style={{fontWeight:400,fontSize:"12px"}}>Laycan</span>
              </div>    
              <div style={{paddingBottom:"2%", color:"rgba(36, 52, 72, 1)",font:"12px",fontWeight:500}}>
                01/09/22 - 10/09/22
              </div>           
            </div>
</div>
<div>
<div style={{paddingBottom:"7%"}}>
               <div style={{paddingBottom:"2%", color:"rgba(102, 104, 125, 1)",font:"12px",fontWeight:700}}>
                 <span style={{fontWeight:400,fontSize:"12px"}}>Load Port</span>
               </div>    
               <div style={{paddingBottom:"2%", color:"rgba(36, 52, 72, 1)",font:"12px",fontWeight:500}}>
                 Dubai, UAE
               </div>           
             </div>
             <div style={{paddingBottom:"7%"}}>
               <div style={{paddingBottom:"2%", color:"rgba(102, 104, 125, 1)",font:"12px",fontWeight:700}}>
                 <span style={{fontWeight:400,fontSize:"12px"}}>Destination</span>
               </div>    
               <div style={{paddingBottom:"2%", color:"rgba(36, 52, 72, 1)",font:"12px",fontWeight:500}}>
                 Sharjah, UAE
               </div>           
             </div>
</div>
       </div>
           
        </>
           )
    },
    {
      title: "STATUS",
      key: "status",
      dataIndex: "status",
      render: (tags ) => (
        <>
        <div>
          <div style={{color:"rgba(79, 84, 102, 1)",fontSize:"12px",fontWeight:600,paddingBottom:"2%"}}>
            Contract Stage
          </div>
          {tags.map((tag) => {
            let color = ""
            if (tag === "Estimated Cost Sheet") {
              color = "rgba(47, 177, 130, 1)";
            }
            if (tag === "Estimated Cost Sheet - Pending Approval") {
              color = "rgba(255, 174, 0, 1)";
            }
            if (tag === "Customer Contract") {
              color = "rgba(47, 177, 130, 1)";
            }
            if (tag === "Supplier Contract Draft Ver2.0") {
              color = "rgba(255, 174, 0, 1)";
            }
            return (
              <div>
                <div style={{display:"flex",flexDirection:"column",marginBottom:"3%",background:"transparent"}}>
              <div color={color} key={tag} style={{background:"transparent",border:`1px solid ${color}`,color:color,borderRadius:"50px",padding:"3px 10px",width:"max-content",fontSize:"12px",fontWeight:600}}>
                {tag.toUpperCase()}
              </div>
              </div>
              </div>
            );
          })}
        </div>
         
        </>
      ),
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Popover placement="bottomLeft"  content={content}>
        <img src="edit.png" style={{cursor:"pointer"}} />
      </Popover>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      trade: { content: "TR-22-00001", date: "19/06/2022" },
      contractdetails: [
        {
          content: "SMJ-001",
          company: "SMJ Power LTD",
          credit: "Letter of credit",
        },
        {
          content: "SMJ-001",
          company: "SMJ Power LTD",
          credit: "Letter of credit",
        },
      ],
      products: [
        { content: "SMJ-001", amount: "2000MT" },
        { content: "SMJ-001", amount: "2000MT" },
      ],
       shippingdetails: "",
      status: [
        "Estimated Cost Sheet",
        "Customer Contract",
        "Supplier Contract Draft Ver2.0",
      ],
    },
    {
      key: "2",
      trade: { content: "TR-22-00002", date: "19/06/2022" },
      contractdetails: [
        {
          content: "SMJ-001",
          company: "SMJ Power LTD",
          credit: "Letter of credit",
        },
        {
          content: "SMJ-001",
          company: "SMJ Power LTD",
          credit: "Letter of credit",
        },
      ],
      products: [
        { content: "SMJ-001", amount: "2000MT" },
        { content: "SMJ-001", amount: "2000MT" },
      ],
       shippingdetails: "",
      status: [
        "Estimated Cost Sheet - Pending Approval",
        "Customer Contract",
        "Supplier Contract Draft Ver2.0",
      ],
    },
    {
      key: "3",
      trade: { content: "TR-22-00003", date: "19/06/2022" },
      contractdetails: [
        {
          content: "SMJ-001",
          company: "SMJ Power LTD",
          credit: "Letter of credit",
        },
        {
          content: "SMJ-001",
          company: "SMJ Power LTD",
          credit: "Letter of credit",
        },
      ],
      products: [
        { content: "SMJ-001", amount: "2000MT" },
        { content: "SMJ-001", amount: "2000MT" },
      ],
       shippingdetails: "",
      status: [
        "Estimated Cost Sheet",
        "Customer Contract",
        "Supplier Contract Draft Ver2.0",
      ],
    },
  ];
  return (
    <div style={{overflow:"auto"}}>
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
                TRADES TRANSACTIONS
              </div>
            </div>
            <section style={{ padding: "2% 3% 0%" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" ,paddingBottom:"3%"}}>
        <div style={{ background: "white", borderRadius: "12px 12px 0px 0px" }}>
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            style={{
              padding: "12px 30px 0px 30px",
            }}
        
          />
        </div>
        <div
          style={{ padding: "1%", background: "#fff", borderRadius: "14px" }}
        >
          <Table columns={columns} dataSource={data} pagination={false}/>
        </div>
      </div>
    </section>
    </div>
   
  );
};

export default Trading;
