# Enhanced Todo List with localStorage and Search

This is a simple Todo List web application built using HTML, CSS, and JavaScript.  
Users can add tasks, mark them as completed, delete tasks, and search tasks in real time.  
All tasks are stored in `localStorage` as a JSON array so they persist across page reloads.

## Features

- Add new tasks to the list.
- Mark tasks as completed (with a visual line-through).
- Delete tasks from the list.
- Real-time search filter to show only matching tasks.
- Tasks are saved in `localStorage` with:
  - `id` – unique identifier for each task.
  - `text` – task description.
  - `completed` – completion status (true/false).

## How to Run

1. Clone this repository.
2. Open `index.html` in any modern browser.
3. Type a task in the input box and click **Add Task**.
4. Click on a task text to toggle completed state.
5. Click **Delete** to remove a task.
6. Use the search box to filter tasks by text.

## Technologies Used

- HTML
- CSS
- JavaScript
- Browser `localStorage`
