function addTask() {
    const taskInput = document.getElementById('task');
    const deadlineInput = document.getElementById('deadline');
    const priorityInput = document.getElementById('priority');
    const categoryInput = document.getElementById('category');

    const task = taskInput.value;
    const deadline = deadlineInput.value;
    const priority = priorityInput.value;
    const category = categoryInput.value;

    if (task.trim() === '' || deadline.trim() === '') {
      alert('Please enter both task and deadline.');
      return;
    }

    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.classList.add('task');
    li.classList.add(`priority-${priority}`);
    li.classList.add(`category-${category}`);
    
    const label = document.createElement('label');
    label.textContent = `${task} - Deadline: ${deadline} - Priority: ${priority} - Category: ${category}`;

    const button = document.createElement('button');
    button.textContent = 'Done';
    button.addEventListener('click', () => li.classList.toggle('done'));

    li.appendChild(label);
    li.appendChild(button);

    taskList.appendChild(li);

    // Clear input fields
    taskInput.value = '';
    deadlineInput.value = '';
    priorityInput.value = 'high';
    categoryInput.value = 'design';
  }