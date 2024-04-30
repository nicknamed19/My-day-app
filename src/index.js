import "./css/base.css";
import { mainInput, clearCompleted } from "./js/nodes.js";
import { newTodo, showData, clear } from "./js/utils.js";

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

showData();
