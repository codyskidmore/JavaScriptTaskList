class TaskController{
    constructor(taskService, taskList, taskInput, deleteItemEvent, errorBox){
       this[_taskService] = taskService;
        this[_taskList] = taskList;
        this[_taskInput] = taskInput;
        this[_deleteItemEvent] = deleteItemEvent;
        this[_errorMessages] = errorBox;
    }
    
    addItemEvent(e){
        // Best I can do /w guard code for now. Will 
        // refactor once I discover a better way.

        const serviceResponse = this[_taskService].insertListItem(this[_taskList], 
            this[_taskInput].value, this[_taskInput].nodeName, this[_taskInput].id);

        if (!serviceResponse.success){
            const formatter = new HtmlErrorFormatter();
            this[_errorMessages].innerHTML = formatter.format(serviceResponse.errors);
            alert('Error(s) occured. Please review the error messages.');
            return;
        }

        this[_insertLiTag](taskList, serviceResponse.data);
        taskInput.value = '';
    }

    [_insertLiTag](taskList, newTask){
        const li = document.createElement('li');
        li.className = "collection-item";
        li.id = newTask.id;
        li.appendChild(document.createTextNode(newTask.name));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        link.addEventListener(MouseEvents.Click(), this[_deleteItemEvent]);
        li.appendChild(link);
        taskList.appendChild(li);
    }

    clearTasksEvent(e){
        this[_taskService].clearTasks();

        while(this[_taskList].firstChild){
            this[_taskList].removeChild(this[_taskList].firstChild);
        }

        e.preventDefault();
    }

    deleteItemEvent(e){
        this[_taskService].deleteTask(parseInt(e.target.parentElement.parentElement.id));
        this[_taskList].removeChild(e.target.parentElement.parentElement)
    }

    LoadExistingTasks(){
        const tasks = this[_taskService].getAllTasks();
        tasks.forEach(task => this[_insertLiTag](taskList, task, this[_deleteItemEvent]));
    }

    filterTaskList(e){
        const filterText = e.target.value.toLowerCase();
        Array.from(this[_taskList].children).forEach(task => {
            task.style.display = 'block';
            const itemText = task.firstChild.textContent.toLowerCase();
            if (!itemText.includes(filterText)){
                task.style.display = 'none';
            }
        })
    }
}