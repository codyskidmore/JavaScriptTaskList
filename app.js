const title = "Task List [Part 1] - UI & Add Task Items";
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
    taskController.LoadExistingTasks();
    window.onerror = taskController.globalErrorHandler;
    console.log('it ran.');    
})();
