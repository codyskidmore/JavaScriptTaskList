const _getTasks = Symbol('_getTasks');
const _tasks = Symbol('_tasks');

class TaskRepository {
    constructor(){
        this[_tasks] = this[_getTasks]();
    }

    createTask(newTaskName) {
        const test = this[_tasks].find( task => task.name === newTaskName);
        if (this[_tasks].find( task => task.name === newTaskName) != null){
            throw `Task ${newTaskName} already exists.`;
        }

        const newTask = new Task(newTaskName, this.getNextTaskId());

        this[_tasks].push(newTask);
        localStorage.setItem('tasks', JSON.stringify(this[_tasks]));
        return newTask;
    }
    getTaskById(id){
        return this[_tasks].find( task => task.id === id);
    }
    deleteTask(id){
        const task = this[_tasks].find( task => task.id === id);
        this[_tasks].pop(task);
        localStorage.setItem('tasks', JSON.stringify(this[_tasks]));
    }
    updateTask(name, id){
        const task = this[_tasks].find( task => task.id === id);
        task.name = name;
        localStorage.setItem('tasks', JSON.stringify(this[_tasks]));
    }
    [_getTasks] () {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks === null) {
            tasks = [];
        }
        return tasks;
    }
    getTasks(){
        return this[_tasks];
    }
    clearTasks(){
        localStorage.removeItem('tasks');
        localStorage.removeItem('lastTaskId');
    }
    getTaskByName(name){
        if (this[_tasks].length === 0)
        {
            return null;
        }
        return this[_tasks].find( task => task.name === name);
    }
    getNextTaskId()
    {
        let lastTaskId = localStorage.getItem('lastTaskId');
        if (lastTaskId === null){
            lastTaskId = '0';
        }
        let nextTaskId = parseInt(lastTaskId);
        localStorage.setItem('lastTaskId', ++nextTaskId);
        return nextTaskId;
    }
}
