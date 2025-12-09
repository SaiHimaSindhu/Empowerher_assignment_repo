const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task on button click
addTaskBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();

  // Edge case: ignore empty input
  if (text === '') return;

  // Create list item
  const li = document.createElement('li');
  li.textContent = text;

  // Create Complete button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Create Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  // Attach buttons to list item
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // Add list item to UL
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
});
