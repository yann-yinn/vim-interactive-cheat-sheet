import React from "react";

const NoResult = () => {
  return (
    <div
      style={{ textAlign: "center", fontSize: "20px", margin: "40px" }}
      className="CommandList"
    >
      No results found{" "}
      <span role="img" aria-label="face ashamed">
        😓
      </span>
    </div>
  );
};

export default NoResult;
