var formEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input['task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    if (!taskNameInput || !taskTypeInput) {
      alert("You beed to fill out the the task of the form");
      return false;
    }

    formEl.reset();

    // package up data as an object
    var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
    };
    
    // send it as an arguement to createTaskEl
    createTaskEl(taskDataObj);
  };

var createTaskEl = function(taskDataObj) {
  // creates list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // creates div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);
  
  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);