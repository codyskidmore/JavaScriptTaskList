const title = "Task List [Part 2] - Delete & Filter Tasks";
document.title = title;

const form = document.querySelector('#task-form');
const taskList = document.querySelector('#task-collection');
const clearBtn = document.querySelector('#clear-button');
const taskFilter = document.querySelector('#task-filter');
const taskInput = document.querySelector('#task-input');
const errorMessages = document.querySelector('#error-messages');

const taskService = new TaskService(new TaskRepository(), new TargetTypeValidator(HtmlTagTypes.InputTag()),
    new EmptyInputValueValidator('Task Description'), new TargetIdValidator('task-input'), new TaskNameValidator());
const taskController = new TaskController(taskService, taskList, taskInput, deleteItemEvent, errorMessages);

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
