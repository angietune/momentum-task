const nameValue = document.querySelector(".yourname");
let list = document.querySelector(".todo-list");

export function setLocalStorage() {
  localStorage.setItem("yourname", nameValue.value);
}
export function getLocalStorage() {
  nameValue.value = localStorage.getItem("yourname");
  list = JSON.parse(localStorage.getItem("todos"));
}
