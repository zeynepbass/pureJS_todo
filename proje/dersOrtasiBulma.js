//----DERS ORTALAMASI BULMA UYGULAMASI ----//
//VİSE %30, VİZE2 %30 FİNAL %40
// let vize1=Number(prompt("vize bir notunuzu giriniz"))
// let vize2=Number(prompt("vize ik inotunuzu giriniz"));
// let final=Number(prompt("final notunuzu giriniz"));
// let ortalama=(vize1*0.3) + (vize2*0.3) + (final*0.4);

// if(ortalama>=60){
//     alert("dersten geçtiniz tebrikler :)) <3")
//       console.log("dersten geçtiniz tebrikler :)) <3")
// }
// else{
//     alert("kaldınız geçmiş olsun")
//     console.log("kaldınız geçmiş olsun")
// } 


/*  
*ÖRNEK İF ELSE... 

*/
// let secilenYol=prompt("lütfen gitmek istediğiniz yolu seçiniz")
// if(secilenYol==1){
// alert("seçilen yol" + secilenYol + ".yoldur");
// }
// else if(secilenYol==2){
// alert("seçilen yol" + secilenYol + ".yoldur")
// }
// else if(secilenYol==3){
//     alert("seçilen yol" + secilenYol+".yoldur")
// }
// else{
//     alert("böyle bir seçim yok")
// }


/* ÇOKLU İF KLULLANIMI 
KULLANICIDAN ADI VE TC ALINCAK TC 11 KARAKTERDEN OLSUCAK AD BOS GECILMICEK
*/
// let isim2 = prompt("isim giriniz")
// let tckn = prompt("tc giriniz")
// if (isim2 != "") {
//     if (tckn.length == 11) {
//         console.log("isim ve tckn problem yokk")
//     }
//     else {
//         console.log("tckn 11 karakterlı olmalı")
//     }
// }
// else {
//     console.log("isim alanını kontorl edin")
// }
// kontrolet2(isim2, tckn)
// function kontrolet2(isim2, tckn) {
//     if (isim2 == "") {
//         console.log("lütfen isim alanını bos bırakmayın")
//         return; //bu methodu sonlandır yanı buradan sonra hıcbır kod calısmasın

//     }
//     if (tckn.length != 11) {
//         console.log("tckn 11 karakterlı olmalı")
//         return;
//     }
// }