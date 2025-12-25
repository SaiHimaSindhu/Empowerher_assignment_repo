import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Home Page</h1>
      <p>
        Please <Link to="/login">go to Login</Link> to view Todos.
      </p>
    </div>
  );
}

export default Home;
