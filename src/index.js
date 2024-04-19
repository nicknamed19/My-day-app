import "./css/base.css";
import { mainInput } from "./js/nodes.js";
import { newTodo } from "./js/utils.js";

let textValue;

mainInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    newTodo(textValue);
  }
});

mainInput.addEventListener(
  "input",
  (event) => (textValue = event.target.value)
);
