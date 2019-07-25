const title = "Task List [Part 1] - UI & Add Task Items";
document.title = title;

const form = document.querySelector('#task-form');
const taskList = document.querySelector('#task-collection');
const clearBtn = document.querySelector('#clear-button');
const taskFilter = document.querySelector('#task-filter');
const taskInput = document.querySelector('#task-input');
const errors = document.querySelector('#errors');
const taskRepository = new TaskRepository();
const domUpdater = new DomUpdater();

function addItemEvent(e){
    try{
        if (taskInput.value === '')
        {
            alert('New task requires a description.');
        }
        const task = taskRepository.createTask(taskInput.value);
        domUpdater.InsertListItem(taskList, task, deleteItemEvent);
        taskInput.value = '';
        e.preventDefault();
        }
    catch(err){
        errors.innerHTML = err.message;
    }
}

function clearTasksEvent(e){
    try{
        taskRepository.clearTasks();
        Array.from(taskList.children).forEach(child => child.remove());
        e.preventDefault();
        }
    catch(err){
        errors.innerHTML = err.message;
    }
}
function deleteItemEvent(e){
    try{
        taskRepository.deleteTask(e.target.parentElement.parentElement.id);
        e.target.parentElement.parentElement.remove();        
    }
    catch(err){
        errors.innerHTML = err.message;
    }
}
function LoadExistingTasks(){
    try{
        taskRepository.getTasks().forEach(task => domUpdater.InsertListItem(taskList, task, deleteItemEvent));
    }
    catch(err){
        errors.innerHTML = err.message;
    }
}

// Load event listeners
(function(){
    try{
        form.addEventListener(FormEvents.Submit(), addItemEvent);
        clearBtn.addEventListener(MouseEvents.Click(), clearTasksEvent);
        LoadExistingTasks();
        console.log('it ran.');    
    }
    catch(err){
        errors.innerHTML = err.message;
    }
})();