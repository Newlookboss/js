const todo = {
  setGuestList: function (names) {
    for (let i = 0; i < names.length; i++) {
      const list = $("#todo-list");
      const newElement = $("<li>");
      newElement.addClass("task");
      list.append(newElement);
      newElement.html(names[i]);
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


