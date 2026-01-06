import { FeedbackForm } from "./components/FeedbackForm"
import { ImageSlideshow } from "./components/ImageSlideshow"
import { TodoApp } from "./components/TodoApp"

export default function App() {
  return (
    <div className="p-6 grid gap-6 md:grid-cols-3">
      <FeedbackForm />
      <ImageSlideshow />
      <TodoApp />
    </div>
  )
}
