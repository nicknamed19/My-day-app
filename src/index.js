import "./css/base.css";
import { mainInput } from "./js/nodes.js";
import { newTodo, newObjTodo } from "./js/utils.js";

let textValue;

mainInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    newObjTodo(textValue);
    newTodo(textValue);
  }
});

mainInput.addEventListener(
  "input",
  (event) => (textValue = event.target.value)
);
