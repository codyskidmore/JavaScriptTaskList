function addItemEvent(e){
    if (taskInput.value === '')
    {
        alert('New task requires a description.');
    }
    const task = taskRepository.createTask(taskInput.value);
    domUpdater.InsertListItem(taskList, task, deleteItemEvent);
    taskInput.value = '';
    e.preventDefault();
}
function clearTasksEvent(e){
    taskRepository.clearTasks();
    Array.from(taskList.children).forEach(child => child.remove());
    e.preventDefault();
}
function deleteItemEvent(e){
    taskRepository.deleteTask(e.target.parentElement.parentElement.id);
    e.target.parentElement.parentElement.remove();        
}
function LoadExistingTasks(){
    taskRepository.getTasks().forEach(task => domUpdater.InsertListItem(taskList, task, deleteItemEvent));
}
function globalErrorHandler(msg, url, line, col, error) {
    ///// Borrowed this from a guy who borrowed it from 
    ///// someone else and put it on StackOverflow.

    // Note that col & error are new to the HTML 5 spec and may not be 
    // supported in every browser.  It worked for me in Chrome.
    var extra = !col ? '' : '\ncolumn: ' + col;
    extra += !error ? '' : '\nerror: ' + error;
 
    // You can view the information in an alert to see things working like this:
    alert("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);
 
    // TODO: Report this error via ajax so you can keep track
    //       of what pages have JS issues
 
    var suppressErrorAlert = true;
    // If you return true, then error alerts (like in older versions of 
    // Internet Explorer) will be suppressed.
    return suppressErrorAlert;
 };