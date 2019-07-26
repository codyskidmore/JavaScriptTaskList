class EventId{
    static invalidTargetTypeEvent() {
        return 1;
    }
    static emptyInvalidInputValueEvent() {
        return 2;
    }
    static invalidTargetIdEvent() {
        return 3;
    }
    static taskAlreadyDefinedEvent() {
        return 4;
    }
}

class EventInfo{
    constructor(eventId, message){
        this.eventId = eventId;
        this.message = message;
    }
}

class InvalidTargetTypeEvent extends EventInfo{
    constructor(expectedTarget, actualTarget){
        super(EventId.invalidTargetTypeEvent(), `Invalid target type: ${actualTarget}. Type must be ${expectedTarget}`);
    }
}

class EmptyInputValueEvent extends EventInfo{
    constructor(targetName){
        super(EventId.emptyInvalidInputValueEvent(), `Invalid input value for ${targetName}. Expected : ${expectedInput}, Acutal must have a value.`);
    }
}

class InvalidTargetIdEvent extends EventInfo{
    constructor(expectedTargetId, actualTargetId){
        super(EventId.invalidTargetIdEvent(), `Invalid target Id: ${actualTargetId}. ID must be ${expectedTargetId}`);
    }
}

class TaskExistsEvent extends EventInfo{
    constructor(taskName){
        super(EventId.taskAlreadyDefinedEvent(), `Task '${taskName}' already exists.`)
    }
}
function addItemEvent(e){
    taskController.addItemEvent(e);
    e.preventDefault();
}
function clearTasksEvent(e){
    taskController.clearTasksEvent(e);
    e.preventDefault();
}
function deleteItemEvent(e){
    taskController.deleteItemEvent(e);
    e.preventDefault();
}
function globalErrorHandler(msg, url, line, col, error) {
    ///// Borrowed this from a guy who borrowed it from 
    ///// someone else and put it on StackOverflow.

    // Note that col & error are new to the HTML 5 spec and may not be 
    // supported in every browser.  It worked for me in Chrome.
    var extra = !col ? '' : '\ncolumn: ' + col;
    extra += !error ? '' : '\nerror: ' + error;
 
    // You can view the information in an alert to see things working like this:
    alert("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);
 
    // TODO: Report this error via ajax so you can keep track
    //       of what pages have JS issues
 
    var suppressErrorAlert = true;
    // If you return true, then error alerts (like in older versions of 
    // Internet Explorer) will be suppressed.
    return suppressErrorAlert;
 }
