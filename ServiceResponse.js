class ServiceResponse{
    constructor(){
        this[_errors] = [];
        this[_data] = null;
    }
    get success(){
        return this.errors.length === 0;
    }
    addErrors(errors){
        errors.forEach(error => this.errors.push(error));
    }
    get errors(){
        return this[_errors];
    }
    get data(){
        return this[_data];
    }
    set data(value){
        this[_data] = value;
    }
}