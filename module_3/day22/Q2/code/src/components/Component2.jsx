// Component2.jsx
import React from "react";
import Component3 from "./Component3";

const Component2 = ({ a, b, c, d, e, f }) => {
  // does not use any props; just forwards them
  return <Component3 a={a} b={b} c={c} d={d} e={e} f={f} />;
};

export default Component2;
