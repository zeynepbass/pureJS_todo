// ? style özellikleri
// const todo=document.querySelector(".ekle")
// todo.style.color="white";
// todo.style.fontWeight="bold"
// todo.style.backgroundColor="purple"
// todo.style.paddingTop="10px"
// todo.style.paddingLeft="50px"
// console.log(todo)

// ? elementler üzerinde gezinme

// const todo=document.querySelector("#todoList");
// let value;
// value=todo;
// value=todo.children[0];
// value=todo.children[1].textContent="birinci eleman değişti"
// value=todo.parentElement; //YANI ANNESINI AL BIR USTTEKI AL 
// value=todo.parentElement.parentElement; //YANI ANAANNESINI AL BIR USTTEKI AL 
// value=todo.nextElementSibling//bir sonraki kardeısnı al yanı butonu getırcek
// value=todo.nextElementSibling.nextElementSibling //bir snrakının bır sonrakı
// console.log(value)

// ! element olusturma dinamik olarak
// const link=document.createElement("a");
// const li=document.createElement("li");
//const i=document.createElement("i");
// const cardBody=document.querySelector("#btn");
//const todoList=document.querySelector("#todoList");
// link.id="goBlogGit";
// link.className="btn-sm "
// link.target="_blank";
// link.innerHTML="kişisel web siteme git";

// cardBody.appendChild(link)// cocukların sonuna ekle cardbOdy sonuna
// li.className="lift-group-iştem d-flex justify-content-between"
// li.innerHTML="TODO 5"
// link.href="#";
// link.className="delete-item"
// link.appendChild(i)
// todoList.appendChild(li)
// console.log(link)

// ! element silme dinamik olarak

// const todoList=document.querySelector(".list-group");
// const todos=document.querySelectorAll(".list-group-item")
// todos[0].remove();//birinciyi sil
// console.log(todos)

// todoList.removeChild(todos[0])
// console.log(todos)


// ! iki html etiketin yerını degıstırme

//yenı elementı eskı elementle degıstır
// const cardyBodyDegisti = document.querySelector(".card-body");
// const newTitle = document.createElement("h2");
// newTitle.className = "card-title";
// newTitle.textContent = "yeni todo listesi değişti";

// const oldTitle = cardyBodyDegisti.querySelector("h2"); // Değiştirilecek mevcut h2 etiketi

// cardyBodyDegisti.replaceChild(newTitle, oldTitle);
