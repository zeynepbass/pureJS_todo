// TODO:"TODO PROJE EKLEME"
const form = document.querySelector("#todoAddForm")
const addInput = document.querySelector("#todoInput")
const searchInput = document.querySelector("#todoSearch");
const cardBody = document.querySelectorAll(".card-body")[1];
const todoList = document.querySelector(".list-group")
const firstCardBody = document.querySelectorAll(".card-body")[0];


const clearButton = document.querySelector(".clear-btn")
let liste = []
runEvent();
function runEvent() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    todoList.addEventListener("click", removeTodoUI);
    clearButton.addEventListener("click", allTodosEverywhere);
    searchInput.addEventListener("keyup", filter);

}
function filter(e) {
    const filterValue = e.target.value.toLowerCase().trim();
    const todosListesi = document.querySelectorAll(".list-group-item");

    if (todosListesi.length > 0) {
        todosListesi.forEach(function (todo) {
            const text = todo.textContent.toLowerCase().trim();
            if (text.includes(filterValue)) {
                todo.setAttribute("style","display:block")
            } else {
                todo.setAttribute("style","display:none !important")
            }
        });
    } else {
        showAlert("warning", "En az bir todo olmalı!");
    } 
}



function allTodosEverywhere() {
    const todos = document.querySelectorAll(".list-group-item");
    if (todos.length > 0) {
        todos.forEach(function (element) {
            element.remove();
        })
        todo = [];
        localStorage.setItem("li", JSON.stringify(todo))
        showAlert("success", "başarılı bir şekilde silindi!")
    } else {
        showAlert("warning", "Silmek için en az bir todo olmalı!")
    }

}
function removeTodoUI(e) {
    if (e.target.className === "fas fa-minus") {
        const todo = e.target.parentElement;
        todo.remove();

        removeTodoStorage(todo.textContent);
        showAlert("warning", "basarıyla silindi")
    }

}
function removeTodoStorage(removeTodo) {
    checkTodosFromStorage()
    liste.forEach(function (todo, index) {
        if (removeTodo === todo) {
            liste.splice(index, 1);

        }
    });
    localStorage.setItem("li", JSON.stringify(liste))
}
function pageLoaded() {
    checkTodosFromStorage();
    liste.forEach(function (element) {
        addTodoInput(element);


    })
}
function addTodo(e) {
    e.preventDefault()
    const inputText = addInput.value.trim();
    if (inputText === null || inputText == "") {
        alert("lütfen bir deger giriniz")
        showAlert("warning", "Lütfen Boş bırakmayınız!");
    }
    else {
        addTodoInput(inputText)
        addTodoToStorage(inputText)
        showAlert("success", "Görev başarıyla eklendi!");
    }



}
function addTodoInput(newTodo) {
    const li = document.createElement("li");
    li.className = "list-group-item m-1 d-flex justify-content-space-around";
    li.textContent = newTodo;
    const i = document.createElement("i");
    i.className = "fas fa-minus";
    li.appendChild(i);
    todoList.appendChild(li);
    addInput.value = "";


}
function addTodoToStorage(newTodo) {
    checkTodosFromStorage()
    liste.push(newTodo)
    localStorage.setItem("li", JSON.stringify(liste))
}
function checkTodosFromStorage() {
    if (localStorage.getItem("li") === null) {
        liste = []
    } else {
        liste = JSON.parse(localStorage.getItem("li"))

    }
}
function showAlert(type, message) {
    const div = document.createElement("div");
    div.setAttribute("role", "alert");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    firstCardBody.appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 3000);
}