// Component5.jsx
import React from "react";
import Component6 from "./Component6";

const Component5 = ({ e, f }) => {
  // does not use prop e, only f
  return (
    <div>
      <h4>This is prop f: {f}</h4>
      <Component6 e={e} />
    </div>
  );
};

export default Component5;
