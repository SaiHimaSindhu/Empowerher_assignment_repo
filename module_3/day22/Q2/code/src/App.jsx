// App.jsx (or Component1.jsx)
import React from "react";
import Component2 from "./components/Component2";

const Component1 = () => {
  const a = "value of a";
  const b = "value of b";
  const c = "value of c";
  const d = "value of d";
  const e = "value of e";
  const f = "value of f";

  return (
    <div>
      <h4>This is prop a: {a}</h4>
      <h4>This is prop b: {b}</h4>
      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>
      <h4>This is prop e: {e}</h4>
      <h4>This is prop f: {f}</h4>

      <Component2 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  );
};

export default Component1;
