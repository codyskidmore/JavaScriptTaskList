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
