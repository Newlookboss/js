const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskList = {
  toDoList: document.querySelector("#to-do-list"),
  inProgressList: document.querySelector("#in-progress-list"),
  doneList: document.querySelector("#done-list"),
  narutoList: document.querySelector("#naruto-list"),
};

function renderTasks() {
  taskList.toDoList.innerHTML = "";
  taskList.inProgressList.innerHTML = "";
  taskList.doneList.innerHTML = "";
  taskList.narutoList.innerHTML = "";

  tasks.forEach(function (task, index) {
    const li = document.createElement("li");

    const deleteBtn = document.createElement("button");
    deleteBtn.style.border = "none";
    deleteBtn.style.background = "none";
    deleteBtn.style.position = "absolute";
    deleteBtn.style.right = "5px";
    deleteBtn.style.top = "5px";
    const nextBtn = document.createElement("button");
    nextBtn.style.backgroundColor = "#4caf50";
    nextBtn.style.border = "none";
    nextBtn.style.width = "100%";
    nextBtn.style.borderRadius = "4px";
    nextBtn.style.cursor = "pointer";
    nextBtn.style.marginTop = "20px";
    nextBtn.style.color = "white";
    nextBtn.style.fontWeight = "bold";
    nextBtn.style.padding = "5px";

    const remuveBtn = document.createElement("button");
    remuveBtn.style.backgroundColor = "red";
    remuveBtn.style.border = "none";
    remuveBtn.style.width = "100%";
    remuveBtn.style.borderRadius = "4px";
    remuveBtn.style.cursor = "pointer";
    remuveBtn.style.marginTop = "20px";
    remuveBtn.style.color = "white";
    remuveBtn.style.fontWeight = "bold";
    remuveBtn.style.padding = "5px";
    const doneBatton = document.createElement("button");

    doneBatton.style.backgroundColor = "#4caf50";
    doneBatton.style.border = "none";
    doneBatton.style.width = "100%";
    doneBatton.style.borderRadius = "4px";
    doneBatton.style.marginTop = "20px";
    doneBatton.style.cursor = "pointer";
    doneBatton.style.color = "white";
    doneBatton.style.fontWeight = "bold";
    doneBatton.style.padding = "5px";

    const narutoListBtn = document.createElement("button");
    narutoListBtn.style.backgroundColor = "#4caf50";
    narutoListBtn.style.border = "none";
    narutoListBtn.style.width = "100%";
    narutoListBtn.style.borderRadius = "4px";
    narutoListBtn.style.marginTop = "20px";
    narutoListBtn.style.cursor = "pointer";
    narutoListBtn.style.color = "white";
    narutoListBtn.style.fontWeight = "bold";
    narutoListBtn.style.padding = "5px";

    li.innerText = task.description;
    deleteBtn.innerText = "X";
    nextBtn.innerText = "in Progress >";
    doneBatton.innerText = "Naruto >";
    narutoListBtn.innerText = "Done";
    remuveBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    });
    remuveBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    });

    nextBtn.addEventListener("click", function () {
      if (task.status === "toDo") {
        task.status = "inProgress";
      }
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    });

    doneBatton.addEventListener("click", function () {
      if (task.status === "inProgress") {
        task.status = "naruto";
      }
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    });

    narutoListBtn.addEventListener("click", function () {
      if (task.status === "naruto") {
        task.status = "done";
      }
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    });

    switch (task.status) {
      case "toDo":
        li.appendChild(deleteBtn);
        li.appendChild(nextBtn);
        taskList.toDoList.appendChild(li);
        break;
      case "inProgress":
        li.appendChild(deleteBtn);
        li.appendChild(doneBatton);
        taskList.inProgressList.appendChild(li);
        break;
      case "naruto":
        li.appendChild(deleteBtn);
        li.appendChild(narutoListBtn);
        taskList.narutoList.appendChild(li);
        break;
      case "done":
        li.appendChild(deleteBtn);
        li.appendChild(remuveBtn);
        taskList.doneList.appendChild(li);
        break;

      default:
        console.log("Invalid task status:", task.status);
    }
  });
}

const newEntryForm = document.querySelector("#new-entry-form");
const messageInput = document.querySelector("#message-input");

newEntryForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTask = {
    description: messageInput.value,
    status: "toDo",
  };
   if (!messageInput.value) return;
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();

  messageInput.value = "";
});

renderTasks();


