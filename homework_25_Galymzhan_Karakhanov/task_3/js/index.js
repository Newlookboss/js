const todo = {
  setGuestList: function (names) {
    for (i = 0; i < names.length; i++) {
      const newElement = document.createElement(`li`);
      newElement.className = "task";
      const list = document.getElementById("todo-list");
      list.appendChild(newElement);
      newElement.innerHTML += names[i];
    }
  },
};

const tasks = [
  "Buy lemonade",
  "Make toasts",
  "Repair car",
  "Play games",
  "Pet a cat",
];
todo.setGuestList(tasks);

