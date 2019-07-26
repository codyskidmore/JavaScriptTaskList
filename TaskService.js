class TaskService{
    constructor(taskRepository, targetTypeValidator, emptyInputValidator, 
        targetIdValidator, taskNameValidator){
        this[_tasksRepository] = taskRepository;
        this[_targetTypeValidator] = targetTypeValidator;
        this[_emptyInputValidator] = emptyInputValidator;
        this[_targetIdValidator] = targetIdValidator;
        this[_taskNameValidator] = taskNameValidator;
    }
    insertListItem(taskList, taskDesc, targetType, targetId){
        const serviceResponse = new ServiceResponse();
        
        this[_targetTypeValidator].validate(targetType);
        if (!this[_targetTypeValidator].isValid){
            serviceResponse.addErrors(this[_targetTypeValidator].errors);
            this[_targetTypeValidator].clearErrors();
        }

        this[_emptyInputValidator].validate(taskDesc);
        if (!this[_emptyInputValidator].isValid){
            serviceResponse.addErrors(this[_emptyInputValidator].errors);
            this[_emptyInputValidator].clearErrors();
        }

        this[_targetIdValidator].validate(targetId);
        if (!this[_targetIdValidator].isValid){
            serviceResponse.addErrors(this[_targetIdValidator].errors);
            this[_targetIdValidator].clearErrors();
        }

        const existingTasks = this[_tasksRepository].getTasks();
        this[_taskNameValidator].validate(existingTasks, taskDesc);
        if (!this[_taskNameValidator].isValid){
            serviceResponse.addErrors(this[_taskNameValidator].errors);
            this[_taskNameValidator].clearErrors();
        }

        if (!serviceResponse.success){
            return serviceResponse;
        }

        serviceResponse.data = this[_tasksRepository].createTask(taskDesc)
        return serviceResponse;
    }
    clearTasks(){
        this[_tasksRepository].clearTasks();
    }
    deleteTask(targetId){
        this[_tasksRepository].deleteTask(targetId);
    }
    getAllTasks(){
        return this[_tasksRepository].getTasks();
    }
}