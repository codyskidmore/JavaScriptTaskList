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

// Load event listeners
(function(){
    form.addEventListener(FormEvents.Submit(), addItemEvent);
    clearBtn.addEventListener(MouseEvents.Click(), clearTasksEvent);
    LoadExistingTasks();
    window.onerror = globalErrorHandler;
    console.log('it ran.');    
})();
