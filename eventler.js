// ! eventler
// ? addEventListener esnek kullanım genelde bunu kulancak event atayabıldıgımız bır method
//? bu oldugunda bunu yap su oldugunda bu hju uyap demektır


// const button=document.querySelector("#btn")
// button.addEventListener("click",function(){
//    alert("merhaba")
// })
// function ChangeTitle(){
//     document.querySelector(".card-title").textContent="yeni baslık değişti"
// }

//? mouse eventlar

// !sayfa yuklenınce calısan DOMContentLoaded
// document.addEventListener("DOMContentLoaded",run);
// function run(){
//     alert("sayfa yüklendi");
// }

// !click-dblclick calısanclick-dblclick
// const cardTitle=document.querySelector(".card-title")
 //cardTitle.addEventListener("click",run);//click oldugunda
// cardTitle.addEventListener("dblclick",run);//double clşck oldugunda
// function run(e){
//     console.log(e.type)
// }

// !mouse-over-mouse-out-mouseenter-mouseleave
// const cardTitle=document.querySelector(".card-title")
//  cardTitle.addEventListener("mouseover",run);//üzerine geldıgınde hepsı ıcın
//  cardTitle.addEventListener("mouseout",run);//üzerinden cıktıgında 
//  cardTitle.addEventListener("mouseenter",run);//sadece verilen etiket uzerune geldıgınde calsıır 
//  cardTitle.addEventListener("mouseleave",run);//sadece verilen etiket uzerunden cıktıgında calsıır 
// function run(e){
//     console.log(e.type)
// }

// ! keypress-keydown-keyup

//keypress basmıs olfdugumuz harf ve sayılarda tetıkler m basınca consola m cıkar gıbı
//const cardTitle=document.querySelector("keypress",run)
//keypress basmıs olfdugumuz herseyde tetıkler enter enter
//const cardTitle=document.querySelector("keydown",run)
//keypup tustan elını kaldırıldıgında calısır 
 //const cardTitle=document.querySelector("keyup",run)
// function run(e){
//     console.log(e.key)

// }

 // todo:ÖRNEKKKKKKKK
// const cardTitle=document.querySelector(".card-title");
// const input=document.querySelector("#todoInput")
// input.addEventListener("keyup",run)
// function run(e){
//     input.textContent=e.target.value
//     console.log(input)
// }

//! input eventleri
// const input=document.querySelector("#todoInput")
// input.addEventListener("focus",run); //input ıcıne girilince tetıklenır
// input.addEventListener("blue",run); //input dısına cıktıgımızda tetıklenır
// input.addEventListener("copy",run); //input içine değeri kopyalandıgında tetıklenır
// input.addEventListener("paste",run); //input içine değeri yapıstırıldıgında tetıklenır
// input.addEventListener("cut",run); //input içine değeri kestıgında tetıklenır
// input.addEventListener("select",run); //input içine değeri sadece secılen olan mesela zeynep ın zey secıyorsun 
//  o tetıklenır tetıklenır
// function run(e){
//     console.log(e.type)
// }
