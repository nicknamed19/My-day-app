import { todoList } from "./nodes.js";
const data = [];
let editInputValue = "";

function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function newTodo(text) {
  let newObj = {
    title: text,
    completed: false,
    id: generateUniqueId(),
  };
  data.push(newObj);

  const li = document.createElement("li");

  const div = document.createElement("div");
  div.classList.add("view");

  const input = document.createElement("input");
  input.classList.add("toggle");
  input.type = "checkbox";
  input.addEventListener("click", () => onCompleted(li, newObj.id));

  const lable = document.createElement("label");
  lable.textContent = text;
  lable.addEventListener("dblclick", () => onEdit(li, { lable, editInput }));

  const button = document.createElement("button");
  button.classList.add("destroy");
  button.addEventListener("click", () => onDelete(li));

  const editInput = document.createElement("input");
  editInput.classList.add("edit");
  editInput.value = text;
  editInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && editInputValue.length >= 1) {
      onEdit(li, { finish: true });
    }
  });

  div.append(input, lable, button);
  li.append(div, editInput);
  todoList.appendChild(li);
}

function onCompleted(li, id) {
  li.classList.toggle("completed");

  const filterArray = data.filter((obj) => obj.id === id);
  filterArray.forEach((obj) =>
    obj.completed ? (obj.completed = false) : (obj.completed = true)
  );
}

function onEdit(li, { finish = false, lable, editInput } = {}) {
  li.classList.toggle("editing");

  if (!finish) {
    editInput.focus();
    const initialValue = lable.textContent;
    editInput.value = initialValue;
    editInput.addEventListener("input", (event) => {
      const value = event.target.value.trim();
      editInputValue = value;
      lable.textContent = editInputValue;
    });
    editInput.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        li.classList.remove("editing");
        lable.textContent = initialValue;
      }
    });
  }
}

function onDelete(li) {
  li.remove();
}

export { newTodo, data };
