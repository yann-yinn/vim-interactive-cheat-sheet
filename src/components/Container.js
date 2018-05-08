import React from "react";

const style = {
  maxWidth: "800px",
  margin: "auto"
};

const Container = ({ children }) => {
  return (
    <div style={style} className="container">
      {children}
    </div>
  );
};

export default Container;
