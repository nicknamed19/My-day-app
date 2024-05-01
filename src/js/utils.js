import {
  todoList,
  strongCounter,
  footer,
  sectionMain,
  counter,
  completedBtn,
  pendingBtn,
  allBtn,
} from "./nodes.js";
import { useLocalStorage } from "./localStorage.js";

const { parsedTodos: data } = useLocalStorage("mydayapp-js", []);
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
  renderTodos(data);
}

function renderTodos(arr) {
  const fragment = document.createDocumentFragment();
  todoList.innerHTML = "";

  arr.forEach((obj) => {
    const li = document.createElement("li");

    const div = document.createElement("div");
    div.classList.add("view");

    const input = document.createElement("input");
    input.classList.add("toggle");
    input.type = "checkbox";
    input.addEventListener("click", () => onCompleted(obj.id));

    const lable = document.createElement("label");
    lable.textContent = obj.title;
    lable.addEventListener("dblclick", () =>
      onEdit(li, { lable, editInput, id: obj.id })
    );

    const button = document.createElement("button");
    button.classList.add("destroy");
    button.addEventListener("click", () => onDelete(obj.id));

    const editInput = document.createElement("input");
    editInput.classList.add("edit");
    editInput.value = obj.title;
    editInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && editInputValue.length >= 1) {
        onEdit(li, { finish: true });
      }
    });

    obj.completed
      ? (li.classList.add("completed"), (input.checked = true))
      : (li.classList.remove("completed"), (input.checked = false));

    div.append(input, lable, button);
    li.append(div, editInput);

    fragment.appendChild(li);
    todoList.appendChild(fragment);
  });
  onCounter();
  useLocalStorage("mydayapp-js", data);
}

function onCompleted(id) {
  const filterArray = data.filter((obj) => obj.id === id);

  filterArray.forEach((obj) =>
    obj.completed ? (obj.completed = false) : (obj.completed = true)
  );
  renderTodos(data);
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
  } else {
    renderTodos(data);
  }
}

function onDelete(id) {
  const objIndex = data.findIndex((obj) => obj.id === id);
  data.splice(objIndex, 1);
  renderTodos(data);
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
    renderTodos(data);
    onCounter();
  }
}

function clear() {
  const completedTodos = data.filter((obj) => !!obj.completed);
  completedTodos.forEach((obj) => {
    const indexObj = data.findIndex((dataObj) => dataObj.id === obj.id);
    data.splice(indexObj, 1);
  });
  renderTodos(data);
  showData();
}

function ShowCompleted() {
  const completedData = data.filter((obj) => obj.completed);
  completedBtn.classList.add("selected");
  pendingBtn.classList.remove("selected");
  allBtn.classList.remove("selected");
  renderTodos(completedData);
}

function showPending() {
  const pendingData = data.filter((obj) => !obj.completed);
  completedBtn.classList.remove("selected");
  pendingBtn.classList.add("selected");
  allBtn.classList.remove("selected");
  renderTodos(pendingData);
}

function showAll() {
  completedBtn.classList.remove("selected");
  pendingBtn.classList.remove("selected");
  allBtn.classList.add("selected");
  renderTodos(data);
}

function navigator() {
  if (location.hash === "#/pending") {
    showPending();
  } else if (location.hash === "#/completed") {
    ShowCompleted();
  } else {
    location.hash = "#/";
    showAll();
  }
}

export { newTodo, data, showData, clear, showPending, ShowCompleted, showAll, navigator };
