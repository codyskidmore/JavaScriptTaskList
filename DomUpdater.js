class DomUpdater{
    InsertListItem(taskList, task, deleteEvent){
        const li = document.createElement('li');
        li.className = "collection-item";
        li.id = task.id;
        li.appendChild(document.createTextNode(task.name));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        link.addEventListener(MouseEvents.Click(), deleteEvent);
        li.appendChild(link);
        taskList.appendChild(li);
    }
}