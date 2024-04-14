const submitButton = document.querySelector('#subt');
const pendingTask = document.getElementById('taskList');
const completedTask = document.getElementById('completedTaskList')

submitButton.addEventListener('click', function(e){
    e.preventDefault();
    const newTask = document.querySelector('#addtasks').value.trim();
    if(newTask !== ''){
        addNewTask(newTask, pendingTask);
    }
})

function addNewTask(task, pendingTask){
    const li = document.createElement('li')
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Completed';
    completeBtn.classList.add('completeBtn');

    completeBtn.addEventListener('click', function() {
        li.remove();
        addToCompletedTasks(task, completedTask);
    });

    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);

    pendingTask.appendChild(li);
}

function addToCompletedTasks(task, completedTask){
    const li = document.createElement('li')
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteBtn);

    completedTask.appendChild(li);
}



