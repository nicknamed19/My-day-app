import {
  todoList,
  strongCounter,
  footer,
  sectionMain,
  counter,
} from "./nodes.js";

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
  renderTodos(newObj);
}

function renderTodos() {
  const fragment = document.createDocumentFragment();
  todoList.innerHTML = "";

  data.forEach((obj) => {
    const li = document.createElement("li");

    const div = document.createElement("div");
    div.classList.add("view");

    const input = document.createElement("input");
    input.classList.add("toggle");
    input.type = "checkbox";
    input.addEventListener("click", () => onCompleted(li, obj.id));

    const lable = document.createElement("label");
    lable.textContent = obj.title;
    lable.addEventListener("dblclick", () =>
      onEdit(li, { lable, editInput, id: obj.id })
    );

    const button = document.createElement("button");
    button.classList.add("destroy");
    button.addEventListener("click", () => onDelete(li, obj.id));

    const editInput = document.createElement("input");
    editInput.classList.add("edit");
    editInput.value = obj.title;
    editInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && editInputValue.length >= 1) {
        onEdit(li, { finish: true });
      }
    });

    div.append(input, lable, button);
    li.append(div, editInput);

    fragment.appendChild(li);
    todoList.appendChild(fragment);
  });
}

function onCompleted(li, id) {
  li.classList.toggle("completed");

  const filterArray = data.filter((obj) => obj.id === id);
  filterArray.forEach((obj) =>
    obj.completed ? (obj.completed = false) : (obj.completed = true)
  );
  onCounter();
}

function onEdit(li, { finish = false, lable, editInput, id } = {}) {
  li.classList.toggle("editing");

  if (!finish) {
    editInput.focus();
    const initialValue = lable.textContent;
    editInput.value = initialValue;
    const todoToEdit = data.filter((obj) => obj.id === id);

    editInput.addEventListener("input", (event) => {
      const value = event.target.value.trim();
      editInputValue = value;
      todoToEdit[0].title = editInputValue;
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

function onDelete(li, id) {
  const objIndex = data.findIndex((obj) => obj.id === id);
  data.splice(objIndex, 1);
  li.remove();
  onCounter();
}

function onCounter() {
  const itemsLeft = data.filter((obj) => !obj.completed);
  strongCounter.textContent = itemsLeft.length;

  const itemText = counter.childNodes[1];
  itemsLeft.length === 1
    ? (itemText.textContent = " item left")
    : (itemText.textContent = " items left");
  data.length < 1 && showData();
}

function showData() {
  if (data.length < 1) {
    sectionMain.classList.add("hidden");
    footer.classList.add("hidden");
  } else {
    sectionMain.classList.remove("hidden");
    footer.classList.remove("hidden");
  }
}

function clear() {
  const completedTodos = data.filter((obj) => !!obj.completed);
  completedTodos.forEach((obj) => {
    const indexObj = data.findIndex((dataObj) => dataObj.id === obj.id);
    data.splice(indexObj, 1);
  });
  renderTodos();
}

export { newTodo, data, onCounter, showData, clear };
