import "./css/base.css";
import { mainInput } from "./js/nodes.js";
import { newTodo, onCounter, showData } from "./js/utils.js";

let textValue = "";

mainInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && textValue.length >= 1) {
    newTodo(textValue);
    textValue = "";
    mainInput.value = "";
    showData();
    onCounter();
  }
});

mainInput.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  textValue = value;
});

showData();
