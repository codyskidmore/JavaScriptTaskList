// Will improve this once I figure out TypeScript.
class Validator{
    constructor(){
        this[_errors] = [];
    }
    get errors(){
        return this[_errors];
    }
    clearErrors()
    {
        this[_errors] = [];
    }
    get isValid(){
        return this[_errors].length === 0;
    }
}
class TargetIdValidator extends Validator{
    constructor(targetId){
        super();
        this[_targetId] = targetId;
    }
    validate(targetId){
        if (targetId !== this[_targetId]){
            this[_errors].push(new InvalidTargetIdEvent(this[_targetId], targetId));
        }
    }
}
class TargetTypeValidator extends Validator{
    constructor(targetType){
        super();
        this[_targetType] = targetType;
    }
    validate(targetType){
        if (targetType !== this[_targetType]){
            this[_errors].push(new InvalidTargetTypeEvent(this[_targetType], targetType));
        }
    }
}
class EmptyInputValueValidator extends Validator{
    constructor(targetName){
        super();
        this[_targetName] = targetName;
    }
    validate(inputValue){
        if (inputValue === ''){
            this[_errors].push(new EmptyInputValueEvent(this[_targetName]));
        }        
    }
}
class TaskNameValidator extends Validator{
    constructor(){
        super();
    }
    validate(tasklist, newTaskName){
        if (tasklist.find( task => task.name === newTaskName) != null){
            this[_errors].push(new TaskExistsEvent(newTaskName));
        }
    }
}