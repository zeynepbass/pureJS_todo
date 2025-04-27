// /*
// dizel:24.53
// benzin:22.25
// lpg:11.1
// gelen müşteriden alacagımız bilgiler;
// yakıt tipi
// yüklenecek yakıt litresi

// */
// let dizel = 24.53, benzin = 22.25, lpg = 11.1
// const yeniSatir = "\r\n"
// const yakitMetni = "1 dizel" + yeniSatir
//     + "2 benzin" + yeniSatir
//     + "3 lpg" + yeniSatir
//     + "yakıt turunu secınız"
// let yakitTipi = prompt(yakitMetni)
// let yakitLitresi = Number(prompt("yakıt litresi giriniz:"))
// let bakiye = Number(prompt("bakiye giriniz:"))
// if (yakitTipi == "1" || yakitTipi == "2" || yakitTipi == 3) {
//     if (yakitTipi == "1") {
//         let odenecekTutar = dizel * yakitLitresi
//         if (odenecekTutar < bakiye) {
//             bakiye = bakiye - odenecekTutar
//             alert("yakıt alma işlemi basarılı" + yeniSatir + "kalan bakiye:" + bakiye)
//             console.log("bakiyeniz yeterli")
//         }
//         else {
//             alert("yakıt alma işlemi basarısız" + yeniSatir + "odenecek tutar:" + odenecekTutar + yeniSatir + "bakiye" + bakiye + yeniSatir + "eksik tutar" + (odenecekTutar - bakiye))
//         }
//     }
//     else if (yakitTipi == "2") {
//         let odenecekTutar = benzin * yakitLitresi
//         if (odenecekTutar < bakiye) {
//             bakiye = bakiye - odenecekTutar
//             alert("yakıt alma işlemi basarılı" + yeniSatir + "kalan bakiye:" + bakiye)
//             console.log("bakiyeniz yeterli")
//         }
//         else {

//             alert("yakıt alma işlemi basarısız" + yeniSatir + "odenecek tutar:" + odenecekTutar + yeniSatir + "bakiye" + bakiye + yeniSatir + "eksik tutar" + (odenecekTutar - bakiye))

//         }
//     }
//     else if (yakitTipi == "3") {
//         let odenecekTutar = lpg * yakitLitresi
//         if (odenecekTutar < bakiye) {
//             bakiye = bakiye - odenecekTutar
//             alert("yakıt alma işlemi basarılı" + yeniSatir + "kalan bakiye:" + bakiye)
//             console.log("bakiyeniz yeterli")
//         }
//         else {
//             alert("yakıt alma işlemi basarısız" + yeniSatir + "odenecek tutar:" + odenecekTutar + yeniSatir + "bakiye" + bakiye + yeniSatir + "eksik tutar" + (odenecekTutar - bakiye))
//         }
//     }

// }
// else {
//     alert("lütfen geçerli bir yakıt turu secınız")
// }