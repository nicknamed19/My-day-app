import { todoList, mainInput } from "./nodes.js";
const data = [];

function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function newTodo(text) {
  let newObj = {
    title: text,
    completed: false,
    edit: false,
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

  const button = document.createElement("button");
  button.classList.add("destroy");

  div.append(input, lable, button);
  li.appendChild(div);
  todoList.appendChild(li);

  mainInput.value = "";
}

function onCompleted(li, id) {
  li.classList.toggle("completed");

  const filterArray = data.filter((obj) => obj.id === id);
  filterArray.forEach((obj) =>
    obj.completed ? (obj.completed = false) : (obj.completed = true)
  );
}

export { newTodo };
