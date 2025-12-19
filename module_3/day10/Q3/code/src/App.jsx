import MessageCard from "./components/MessageCard";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Message Cards</h1>

      <MessageCard
        title="Welcome"
        message="Welcome to React reusable components."
      />

      <MessageCard
        title="Success"
        message="You have successfully passed props!"
      />

      <MessageCard
        title="Reminder"
        message="Practice React daily for better understanding."
      />

      <MessageCard
        title="Motivation"
        message="Keep learning and keep growing 🚀"
      />
    </div>
  );
}

export default App;
