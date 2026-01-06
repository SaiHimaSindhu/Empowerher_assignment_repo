import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"


export function TodoApp() {
const [todo, setTodo] = useState("")
const [todos, setTodos] = useState([])


const addTodo = () => {
if (!todo.trim()) return
setTodos([...todos, { text: todo, done: false }])
setTodo("")
}


const toggleTodo = index => {
const updated = [...todos]
updated[index].done = !updated[index].done
setTodos(updated)
}


return (
<Card className="max-w-md">
<CardHeader>
<CardTitle>Todo List</CardTitle>
</CardHeader>
<CardContent className="space-y-3">
<div className="flex gap-2">
<Input placeholder="Add todo" value={todo} onChange={e => setTodo(e.target.value)} />
<Button onClick={addTodo}>Add</Button>
</div>


{todos.map((t, i) => (
<div key={i} className="flex items-center gap-2">
<Checkbox checked={t.done} onCheckedChange={() => toggleTodo(i)} />
<span className={t.done ? "line-through" : ""}>{t.text}</span>
</div>
))}
</CardContent>
</Card>
)
}