// ? selector(seçiciler) -style özellikleri
// !classname, id , tag name

// ? getElementById: id göre elementi yakalar
// ? getElementByClassName=class ismine göre yakalar
// ? getElementByTagName: etiket ismine göre yakalar
// ? querySelector-querySelectorAll //hepsini yapar

//const button=document.getElementById("btn");
// console.log(button)
// console.log(button.id)
// console.log(button.getAttribute("id")) //butonun içindeki title class
// console.log(button.getAttribute("class"))
// console.log(button.className) //butonunun class
// const classList=button.classList; //tüm butonların classların hepsını alır 
// console.log(classList)

//button.textContent="<b>todo ekleyın</b>"; //direk ekrana string kabul eder ekran cıktısı<b>todo ekleyin</b>
//button.innerHTML="<b>todo ekleyın</b>";  //direk kalınlatırıp todo ekleyın yazar

// const todoList=document.getElementsByClassName("ekle") //BUNA AİL OLANALRI GOSTERIR
// console.log(todoList)
// const forms=document.getElementsByTagName("form"); //form li yazarsdan li leri
// console.log(forms) 
//const clearButton=document.querySelector("#todoInput"); //id aldık css secer gibi class olsa . koyardık
//const clearButtonAll=document.querySelectorAll("#todoInput")[2]; //bu id ait olan hepsını alır 2 indexındekını bana getır
//const clearButtonAll=document.querySelectorAll("li:first-child") //lilerdeki bastakını last-child en 
// sondaki nth-child(2): ikinci cocugu getirir index olarak secme olmaz
//console.log(clearButton)