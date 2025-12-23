import { AppContext } from "./AppContext";
import Component2 from "./Component2";

const Component1 = () => {
  const contextValue = {
    a: "Value A",
    b: "Value B",
    c: "Value C",
    d: "Value D",
    e: "Value E",
    f: "Value F",
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Component2 />
    </AppContext.Provider>
  );
};

export default Component1;
