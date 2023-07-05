document.getElementById("task-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var taskInput = document.getElementById("task-input").value;
    var deadlineInput = document.getElementById("deadline-input").value;
    var priorityInput = document.getElementById("priority-input").value;
    var labelInput = document.getElementById("label-input").value;
  
    var taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
      <div class="task-info">
        <span class="task-priority ${priorityInput.toLowerCase()}">${priorityInput}</span>
        <span class="task-title">${taskInput}</span>
        <span class="task-deadline">Deadline: ${deadlineInput}</span>
      </div>
      <div class="task-label">${labelInput}</div>
    `;
  
    var deleteButton = createDeleteButton(taskItem);
    taskItem.appendChild(deleteButton);
  
    document.getElementById("task-list").appendChild(taskItem);
  
    document.getElementById("task-input").value = "";
    document.getElementById("deadline-input").value = "";
    document.getElementById("priority-input").value = "high";
    document.getElementById("label-input").value = "";
  });
  
  function createDeleteButton(taskItem) {
    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerHTML = "&times;";
  
    deleteButton.addEventListener("click", function() {
      taskItem.parentNode.removeChild(taskItem);
    });
  
    return deleteButton;
  }
