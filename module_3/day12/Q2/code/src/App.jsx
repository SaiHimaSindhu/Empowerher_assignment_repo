import { useState } from "react";

export default function App() {
  const [isRed, setIsRed] = useState(true); // initial: red

  const handleToggleColor = () => {
    setIsRed((prev) => !prev);
  };

  const boxStyle = {
    width: "200px",
    height: "100px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: isRed ? "red" : "blue",
  };

  return (
    <div>
      <div style={boxStyle}>This div changes color</div>
      <button onClick={handleToggleColor}>Toggle Color</button>
    </div>
  );
}

