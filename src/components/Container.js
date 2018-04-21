import React from "react";

export default ({ children }) => {
  const style = {
    maxWidth: "800px",
    margin: "auto"
  };
  return (
    <div style={style} className="container">
      {children}
    </div>
  );
};
