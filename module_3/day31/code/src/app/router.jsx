import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<h1 style={{ textAlign: "center" }}>ROUTER WORKS</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

