import React from "react";
import { HomeFilled, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const BreadcrumComponent = ({ textpages }) => {
  return (
    <div
      style={{
        color: "#212529",
        padding: "0 300px",
        borderBottom: "1px solid red",
      }}
    >
      <div style={{ color: "#212529", font: "16px", padding: "15px 0" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#252525",
            font: "16px",
            margin: "0 28px 0 0",
          }}
        >
          <HomeFilled
            style={{
              display: "inline-flex",
              color: "#00000",
              gap: "10px",
              alignItems: "center",
              fontSize: "16px",
              padding: "5px 5px",
            }}
          />
          Home
          <RightOutlined />
        </Link>
        <span style={{ color: "#B2B2B2" }}>{textpages}</span>
      </div>
    </div>
  );
};

export default BreadcrumComponent;
