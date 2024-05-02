import "./css/base.css";
import {
  mainInput,
  clearCompleted,
  pendingBtn,
  completedBtn,
  allBtn,
} from "./js/nodes.js";

import {
  newTodo,
  showData,
  clear,
  showPending,
  ShowCompleted,
  showAll,
  navigator,
} from "./js/utils.js";

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

let textValue = "";
mainInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && textValue.length >= 1) {
    newTodo(textValue);
    textValue = "";
    mainInput.value = "";
    showData();
  }
});

mainInput.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  textValue = value;
});

clearCompleted.addEventListener("click", clear);
pendingBtn.addEventListener("click", showPending);
completedBtn.addEventListener("click", ShowCompleted);
allBtn.addEventListener("click", showAll);

showData();
