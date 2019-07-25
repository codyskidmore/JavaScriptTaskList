class TaskRepository {
    saveTasks(newTask) {
        const tasks = this.getTasks();
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    getTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks === null) {
            tasks = [];
        }
        return tasks;
    }
    clearTasks(){
        localStorage.removeItem('tasks');
    }
}
