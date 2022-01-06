const newTodo = document.querySelector(".todo-input");
const list = document.querySelector(".todo-list");
export let todoList = JSON.parse(localStorage.getItem("todos")) || [];

export function getTodoList() {
  todoList.map((item) => {
    let li = document.createElement("li");
    li.className = "li-item";
    li.innerHTML = item;
    li.onclick = function () {
      li.classList.toggle("done");
    };
    list.append(li);
    const del = document.createElement("span");
    li.append(del);
    del.onclick = function () {
      li.remove();
      const newTodoList = todoList.filter((item) => item !== li.innerText);
      localStorage.setItem("todos", JSON.stringify(newTodoList));
    };
  });
}

export const addTodo = () => {
  todoList.push(newTodo.value);
  let li = document.createElement("li");
  li.innerHTML = newTodo.value;
  list.append(li);
  clearInput();
};

function clearInput() {
  localStorage.setItem("todos", JSON.stringify(todoList));
  newTodo.value = null;
}

newTodo.addEventListener("change", addTodo);
list.addEventListener("change", getTodoList);
