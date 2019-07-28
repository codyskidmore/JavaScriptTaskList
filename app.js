const title = "Task List [Part 2] - Delete & Filter Tasks";
document.title = title;

const form = document.getElementById('task-form');
const taskList = document.getElementById('task-collection');
const clearBtn = document.getElementById('clear-button');
const taskFilter = document.getElementById('task-filter');
const taskInput = document.getElementById('task-input');
const errorMessages = document.getElementById('error-messages');

const taskService = new TaskService(new TaskRepository(), 
    new TargetTypeValidator(HtmlTagTypes.InputTag()),
    new EmptyInputValueValidator('Task Description'), 
    new TargetIdValidator('task-input'), 
    new TaskNameValidator());
    
const taskController = new TaskController(taskService, taskList, taskInput, deleteItemEvent, errorMessages, new HtmlErrorFormatter());

// Load event listeners
(function(){
    form.addEventListener(FormEvents.Submit(), addItemEvent);
    clearBtn.addEventListener(MouseEvents.Click(), clearTasksEvent);
    taskFilter.addEventListener(KeyboardEvents.KeyUp(), filterItemEvent)
    taskController.LoadExistingTasks();
    // Global exception handler.
    window.onerror = globalErrorHandler;
    console.log('it ran.');    
})();
