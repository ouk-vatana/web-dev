// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function addItem() {
  // 1- Create a new task
  let task = {};

  // 2- Set the description from the text field
  task.description = document.getElementById("description").value;

  // 3- Set the priority from select field
  task.priority = document.getElementById("priority").value;

  // 4- Add the new object to the array
  tasks.push(task);

  // 5- Update the DOM to display the new tasks
  displayTasks(tasks);
}

// Function to display tasks on the DOM
function displayTasks(tasks) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear the existing tasks in DOM

  tasks.forEach(task => {
    // Create a div for each task
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    // Set the background color based on the priority
    if (task.priority === "High") {
      taskDiv.style.backgroundColor = "red";
    } else {
      taskDiv.style.backgroundColor = "grey";
    }

    // Set the task description
    taskDiv.innerHTML = `<p>${task.description}</p>`;

    // Append the task div to the task list in the DOM
    taskList.appendChild(taskDiv);
  });
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

// Run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
