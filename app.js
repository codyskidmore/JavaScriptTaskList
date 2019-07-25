const title = "Task List [Part 1] - UI & Add Task Items";
document.title = title;

const form = document.querySelector('#task-form');
const taskList = document.querySelector('#task-collection');
const clearBtn = document.querySelector('#clear-button');
const taskFilter = document.querySelector('#task-filter');
const taskInput = document.querySelector('#task-input');

//console.log(form, taskList, clearBtn, taskFilter, taskInput);

const taskRepository = new TaskRepository();

////////// Just a bunch of tests verifying the repository works.
//const newTask = taskRepository.createTask("Walk the dog 4");
// const task = taskRepository.getTaskById(4);
// taskRepository.deleteTask(task.id);
//console.log(newTask);
// taskRepository.updateTask("New Task Name 3", 2);
//const task = taskRepository.getTaskByName('New Task Name');

//console.log(task);