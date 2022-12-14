var formEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();

    var taskNameInput = document.querySelector("input['task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
  
    // creates list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // creates div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    // give it class name
    listItemEl.className = "task-info";
   
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";    
    listItemEl.appendChild(taskInfoEl);
    
    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
  };

formEl.addEventListener("submit", createTaskHandler);