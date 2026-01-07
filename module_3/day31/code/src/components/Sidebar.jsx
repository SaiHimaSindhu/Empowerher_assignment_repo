export default function Sidebar({ todos }) {
  return (
    <aside style={{ width: "200px", padding: "10px", borderRight: "1px solid #ccc" }}>
      <h4>All Todos</h4>
      {todos.map(todo => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </aside>
  );
}
