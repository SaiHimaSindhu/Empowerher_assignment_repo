import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import { getTodos, createTodo, updateTodo, deleteTodo } from "../services/todo.service"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"

export default function Todos() {
  const { user } = useAuth()
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos(user.uid).then(setTodos)
  }, [])

  const addTodo = async () => {
    await createTodo({ title: "New Todo", completed: false, uid: user.uid })
    setTodos(await getTodos(user.uid))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar todos={todos} />
        <main className="flex-1 p-6">
          <button onClick={addTodo} className="btn">Add Todo</button>
          {todos.map(t => (
            <div key={t.id} className="p-2 border my-2">
              <span>{t.title}</span>
              <button onClick={() => updateTodo(t.id, { completed: !t.completed })}>
                Toggle
              </button>
              <button onClick={() => deleteTodo(t.id)}>Delete</button>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  )
}
