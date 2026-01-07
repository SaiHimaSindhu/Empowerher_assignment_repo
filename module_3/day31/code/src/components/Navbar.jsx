import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logoutUser } = useAuth();

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <h3>Todos App</h3>
      <button onClick={logoutUser}>Logout</button>
    </nav>
  );
}
