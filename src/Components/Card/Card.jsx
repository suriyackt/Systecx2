import React from "react";

const Card = ({count,name,key,image,dollar}) => {
  return (
    <div
      style={{
        height: "213px",
        background: "rgba(255, 255, 255, 1)",
        width: "100%",
        borderRadius: "28px",
      }}
      key={key}
    >
      <div style={{ position: "absolute" }}>
        <img src="widgetcard.png" />
      </div>
        <div style={{ padding: "30px 5px 5px 27px" }}>
        <img src={image}/>
      </div>
      
      <div style={{ padding: "4rem 2rem 0rem 2rem" ,display:"flex",justifyContent:"space-between"}}>
        <div>
        <h1
          style={{
            fontSize: "36px",
            color: "rgba(56, 56, 116, 1)",
            fontWeight: 400,
            lineHeight: 1,
            fontFamily:"Gilroy"
          }}
        >
          {count} 
        </h1>

        </div>
       
        <div style={{color:"rgba(105, 120, 159, 1)",fontSize:"18px",fontWeight:600,fontFamily:"Gilroy"}}>
            {dollar}
          </div>
      
      </div>
      <h4
          style={{
            fontSize: "12px",
            color: "rgba(150, 159, 182, 1)",
            fontWeight: 400,
            padding: "0rem 0rem 0rem 2rem",
            fontFamily:"Gilroy",
            marginTop:"5px"
          }}
        >
          {name}
        </h4>
    </div>
  );
};

export default Card;
