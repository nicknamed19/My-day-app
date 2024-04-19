import { todoList } from "./nodes.js";
const data = [];

function newObjTodo(text) {
  let newObj = {
    title: text,
    completed: false,
    edit: false,
  };
  data.push(newObj);
  console.log(data);
}

function newTodo(text) {
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.classList.add("view");

  const input = document.createElement("input");
  input.classList.add("toggle");
  input.type = "checkbox";

  const lable = document.createElement("label");
  lable.textContent = text;

  const button = document.createElement("button");
  button.classList.add("destroy");

  div.append(input, lable, button);
  li.appendChild(div);
  todoList.appendChild(li);
}

export { newTodo, newObjTodo };
