import React from "react";

const HeavyComponent = () => {
  console.log("HeavyComponent rendered");

  // Simulate heavy UI
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Heavy Component</h2>
      <p>This is a heavy UI section.</p>
    </div>
  );
};

// Prevent re-render unless props change
export default React.memo(HeavyComponent);
