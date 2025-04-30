// ! Session storage kullanımı
// tarayıcı kapatınca sılınır kodlar acık kalmıcak lcoalstroge biz silmediğimiz sürece silinmez GENELDE LOCALSTROGE KULLANILIR 
// ?Değer Ekleme
// sessionStorage.setItem("350","zeynep")
// sessionStorage.setItem("12","tarayıcıyenılenınce sılınmez kapatınca sılınır")
// ?değer silme
// sessionStorage.removeItem("350");
// ? değer almak
// let donenDeger=sessionStorage.getItem("350")
// console.log(donenDeger)
// ? hepsını sılmek
// sessionStorage.clear()
// ! stroge eklenen değerlerin hepsı strıngtırrr

//session stroge array yazdırmak
// let dizi=["1","2","3"]
// sessionStorage.setItem("dizi",dizi)
// let value=sessionStorage.getItem("dizi")
// console.log(value) //ekran cıktısı 1,2,3, olarak basar array yazmadı bunun ıcın
// let value=sessionStorage.setItem("dizi",JSON.stringify(dizi)); //BU ARRAYI ARRAY OLARAK KAYDEEDER
// let value=JSON.parse(sessionStorage.getItem("dizi",dizi)) //BU ARRAYI ARRAY OLARAK ALMK ICIN
// console.log(value)//dizi olarak yazar konsola
//TODO:örnekkkkkk
// let dizi=["ZEY","ALİ","VELİ"];
// sessionStorage.setItem("dizi",JSON.stringify(dizi));
// let valueDonenDeger=JSON.parse(sessionStorage.getItem("dizi"));
// valueDonenDeger.forEach(function(element){
//      console.log("element",element)
// });