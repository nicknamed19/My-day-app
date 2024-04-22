import "./css/base.css";
import { mainInput, footer, sectionMain } from "./js/nodes.js";
import { newTodo, data } from "./js/utils.js";

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

console.log(sectionMain, footer);

function showData() {
  if (data.length < 1) {
    sectionMain.classList.add("hidden");
    footer.classList.add("hidden");
  } else {
    sectionMain.classList.remove("hidden");
    footer.classList.remove("hidden");
  }
}
showData();
