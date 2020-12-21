let addTodoButton = document.getElementById("todoButton");
let todoContainer = document.getElementById("todoListContainer");
let addInput = document.getElementById("input");
let noTasks = document.getElementById("emptyTasks");

addTodoButton.disabled = true;
addTodoButton.addEventListener("click", addTask);
addInput.addEventListener("input", function () {
  addTodoButton.disabled = addInput.value == "" ? true : false;
});

function addTask(e) {
  let paragraph = document.createElement("p");
  paragraph.innerHTML = addInput.value + '<i class="fas fa-trash-alt"></i>';
  todoContainer.appendChild(paragraph);
  paragraph.classList.add("todoTask");
  noTasks.style.display = todoContainer.children.length > 0 ? "none" : "block";

  paragraph.addEventListener("click", function () {
    paragraph.classList.add("taskDone");
  });

  paragraph.addEventListener("dblclick", function () {
    paragraph.classList.replace("taskDone", "todoTask");
  });

  paragraph.firstElementChild.addEventListener("click", function () {
    todoContainer.removeChild(paragraph);
    noTasks.style.display = todoContainer.children.length > 0 ? "none" : "block";
  });

  addTodoButton.disabled = true;
  addInput.value = "";
  e.preventDefault();
}
