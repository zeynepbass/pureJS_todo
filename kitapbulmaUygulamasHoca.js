
// let kitaplar = [
//     { isim: "Ürün 1", fiyat: 120, yazar: "Yazar A", kitap: "Kitap A",raf:"2.1" },
//     { isim: "Ürün 3", fiyat: 180, yazar: "Yazar C", kitap: "Kitap C",raf:"2.4" },
//     { isim: "Ürün 4", fiyat: 300, yazar: "Yazar D", kitap: "Kitap D",raf:"3.1" },
//     { isim: "Ürün 5", fiyat: 90, yazar: "Yazar E", kitap: "Kitap E",raf:"5.1" },
//     { isim: "Ürün 6", fiyat: 450, yazar: "Yazar F", kitap: "Kitap F" ,raf:"7.1"}
// ];
// let raf = [
//     { kod: "2.1.raf", goster: false },
//     { kod: "2.4.raf", goster: false },
//     { kod: "3.1.raf", goster: false },
//     { kod: "5.1.raf", goster: false },
//     { kod: "7.1.raf", goster: false }

// ]
// function rafOlustur() {
//     let satir = ""
//     for (let i = 0; i < raf.length; i++) {

//             satir += "|" + raf[i].kod + "|";

//         console.log(satir);
//             satir="";
        
//     }
// }
// let kitapIsmi=prompt("kitapa adı girin");

// function raftaGoster(rafKod){
// for( let i=0; i<raf.length; i++){
//     if(raf[i].kod==rafKod){
//         raf[i].goster=true
//         break;
//     }
// }
// }
// function kodBul(kitapIsmi) {
//     let rafKod = null;
//     kitaplar.forEach(function(kitap) {
//         if (kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(), 0)) {
//             rafKod = kitap.raf;
//         }
//     });
//     return rafKod; 
// }

// rafOlustur();
// let rafKod=kodBul(kitapIsmi)

// if(rafKod!=null){
//     raftaGoster(rafKod);
//     rafOlustur();
// }
// else{
//     alert("girdiğiniz kitap kodu bulunamdı")
// }
