let askBir = 10
let askIki = 50
let askUc = 100

let giris = Number(prompt("yüz de kaç seviyorsun:"))

if (giris == askBir) {
    alert("az seviyor")

}
else if (giris == askIki || giris>=askIki) {
    alert("orta seviyor")

}
else if(giris == askUc) {
    alert("cok seviyor")
}
