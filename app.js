//document write ile cıktı verme
// document.write("sdfsdf <br/>")
// document.write("sdfsdf")
// console.log("zeynep")

// let a=5;
// let b=10;
// console.log(a>5 ? "" : alert("dogru"))


//CONSOLE LOG SOURCE ORADA YANLIS OLAN SEYKER GORULUYOR
// console.warn("hata olustu")
// debugger;

// console.log(location.port)
// console.log(location.port)
// console.log(location.port)

/*
 BETTER COMMENT EXTENSİONS

 ? Bu bir bilgilendşirme yorumudur
 ! burası cok öenmlıdır dikkat et
 TODO: BURASI SÖYLE YAPILMASI GEREKIYOR
 *TEST MESAJ...


 */



//  var adeger=5;//GLOBAL SCOPE SEN bUNA HER YERDEN ERISEBILIRISN kıvırcık parantez dısında plmalı
//  function method1(){
//     console.log(adeger)
// }
// method1()

 //FUNCTİON SCOPE TANIMLANDIGI ZAMAN O DEGISKENE KIVIRCIK PARANTEZLER ICINDEN ERISEBILIRSIN 
// function method2(){
//     var sayi=10;
//     console.log(sayi)

//     ? BLOK SCOPE FUNCTİON ICINDE İF WHİLE FOR ACARSAN BLOCK SCOPE OLUP

    // if(true){
    //   var b=20 // ? block scope
    // }
    // while
// }
// method2();



// ? es6 ile let ve const geldı

// ? var ile ilgili tanımlanan her sey function scope olur  blockta bıle tanımlasan function scope ozellıgı gorur
// ? let/const : block scope oellıgıne ssahıp
// function selamVer(){
//     var selam="herkese selam"; //? fucntion scope
//     if(true){
//         var b=10;
//         let c=10
//         console.log(c)
//     }
    //console.log(c)//burada patlatır burada erişemezsin
//     console.log(b); 
//     console.log(selam);
// }
// selamVer()


// ? sabit değişmez

// let degismez=5;
// degismez=7;
// console.log(degismez);

// ? değiştirebilirsin


// const user ={
//     username:"zeynep",
//     password:"123"
// }
// user.username="zeynepbas";
// console.log(user)




/*  
! OPERATÖRLER...
= aritmetik OPERATÖRÜ
ü ö ş İ ğ BUNLAR DEGISKEN ISMI OLMAZ rakamla degısken olusturmaz ıkıncı kelımeyı buyuk olarak baslatmak laszım
sorun olmaz ama oyle olmalı
% mod alma operatoru bolumden kalanı ıfade eder
++ 1 arttırmak ıcnn kulanılır 
let a=10
a++;
console.log(a) //a 11 oldu -- ise bir azalrtmaktır
*/


/* 
!ATMA OPERAÖTRLERİ

 = ATAMA OPERATÖRÜ
== 5==5 ESITTIR MATEMATIKTEKI ESTTIR DEMEK GIBI DUSUN BES BESE EDSITTIR
let a=1;
let b=10;
let sonuc=a+b;
connsole.log(sonuc==15); //false
let a="1";
let b=10;
let sonuc=a+b;
console.log(sonuc==11); //true strıng olması onemlı degıl degere bakmıyor

=== 5===5 tip kontrolu yapar
let a=1;
let b=10;
let sonuc=a+b;
connsole.log(sonuc==15); //false
let a="1";
let b=10;
let sonuc=a+b;
console.log(sonuc==11); //false strıng olması ve tipe bakmalı 


örnek

let sayi=4
sayi=sayi+2; //her zaman sagdan okunur
console.log(sayi)
let sayi=4
sayi+=2; //her zaman sagdan okunur
console.log(sayi)
*/



/*  
! MANITKSAL OPERATORLER && || ! 





*/


/* DİALOG KUTULARI
! DİALOG KUTULARI
ALERT PROMPT CONFŞRM 
WİNDOW BASINA YAZMANA GEREK YOK

PROMT KULLANICIDAN MESAJ ALMA KISMI 
prompt("isminizi giriniz") //input 
*/

// let isim=prompt("isminiz")//string tipindedir
// console.log(isim)
// let soyad=prompt("soyadınızı")
// console.log(soyad)
// const deta=confirm("silmek istediğinize emin misiniz")// true veya false doner(boolean) basılan sonuca gore ıslem yapar
// console.log(deta)



// ? kOŞUL YAPIALRI 
//if else kullanırken ıllede else kullanamk zorunda degılsın

//
// let not=40;
// if(not>50){
//     console.log("geçtiniz"+not)
// }
// else{
//     console.log("kaldınız"+not)
// }
// let yas=Number(prompt("yasınız"));
// let para=Number(prompt("butcenız"));
//  if(yas>=18 && para>=3000){
//     alert("ehliyet sınavına katılabilirsiniz");

//  }
//  else{
//     alert("ehliyet sınavına katılamazsınız")
//  }


//!  TÜR DÖNÜŞÜMLERİ

// let aDeger=5;
// let bDeger="10";
//! let c = Number(b); //parseInt("10") olur
// console.log(typeof c)
// console.log("toplam", a+c)

// let aDeger=5;
// let bDeger="10";
// let c = String(b); //(55).toString() olur
// console.log(typeof c)
// console.log("toplam", a+c)

// let aNun =Number("B") //bu bır sayı degıl dıyor
// console.log(a)

// !DEBUGGER breakpoint ve TOOLTİP KULLANIMI

// TOOLTİP:VSCODE ACIKLAMA SATIRI GELIYOR ONA DENIR entera basmadan gelen acıklama

// function OrtalamaBul(vize1,vize2,finalNot){
// return "75"
// }

// breakpoint: yukarıdan asagıya calıstır fakat 300 satırlık kod yazdın bır yerde bir hata var kodda hatayı duzeltıyorsun
// derleyıcının butun kodları mılısanıye olarak calıstırmasını engelleyerek breakpoınt kullanarak adım adım calıstırmasını saglamak
// için breakpoint kullanıyoruz kodun basına debugger yazıyoruz
// debugger;  //source kısmında dbegger modunda calıstu en sagda oka bastıkca sonuclar gelır
// let a=10; 
// let b=15;
// let c=14
// console.log(a+b+c)


// !DÖNGÜLER (LOOKS)
// 1-FormData 
// 2-WHİLE
// 3-Do-while
// 4-ForEach //dizilerde kesınlıkle foreach kullanılcak kesınlıkle

// for (let i=1; i<=10; i++){
// console.log(i)
// }
// for(let ikiser=0; ikiser<=10; ikiser+=2){

//     console.log(ikiser)
// }
// for(let ikiser=1; ikiser<=10; ikiser++){
    
//    if(ikiser%2==1){
//     console.log("zeynep")
//    }
//    else{


//    console.log("tek değil")
//    }
// }



// let toplam=0;
// for(let i=10; i>=1; i--){
//     toplam=toplam+i;
//     console.log(i);
// }
// console.log("toplam",toplam)


// ?break-contınue
//break mesela 8 e gelınce donguyu kıralım 8 gelınce cıkalım sadece dongulere ozgudur whıle vs dahıl kulalnılabılrı
//1 den 10 kadar sayıları yazdıralım 8 e geldıgımızde donguden cıkarım

// for(let i=1; i<=10; i++){
//     if(i==8){
//         break
//     }
//    console.log("9 10 YAZDIRMADIK",i)
// }

//  ? Continue
// // //1 2 3 4 5 6 7  9 
// for(let i=0; i<=10; i++){
// if(i==8){
//     continue;
// }
// console.log("8 YAZDIRMADIK 9 10 YAZILI",i)
// }

//? METODLAR (FUNCTİONS OLARAK DA GEÇEBİLİR)
// ? parca par kodlayıp bır sayfaya eklemeye denır kodun
//? okunmadsı gelıstırılmesı ıcın gereklı olan bır sey ama aynı sayfada da kullanırsın buda 
// ? saglıklı olmaz senden
// ? senden sonraki yazılımcı için sıkıntılı bır durumdur bir 
// ? kere yazıp lazım olunca cagırmak daha saglıklı 
// parametresim ve geriye deper dondurmeden en basit metodtur
//function Yazdir(){
  //kodlar yazdırılıcak
  // console.log("zeynep")
//}
//Yazdir()
// ? parametreli methodlar
//ismne soyisme farklı degerler verebılır
// function Yazdir(isim,soyisim){
//     debugger;
//     console.log(isim+ "" +soyisim)
// }
// debugger;
// Yazdir("zeynep","bas")
// function cube(sayi){
//     console.log(sayi*sayi*sayi)
// }
// cube(3)

// let yasData=Number(prompt("yasınızı giriniz"));
// function kontrolEt(yas){
//     if(yas>18){
//         console.log("Ehliyet alabılırsınız")
//     }
//     else {
//         console.log("ehliyet alamazsın")
//     }
// }
// kontrolEt(yasData)

//? GERİYE DEĞER DONDUREN METOT (return)
//? bir degerı methodun dısarıya cıkarmak,tasımak ıcı kuallnılır
//? bir methodu bitiren anahtar kelimedir.
//? void geriye deger dondurmeyen function yazdir(){console.log(zeynep)} yazdir() budur

// function cube(sayi){
//     let sonuc=sayi*sayi*sayi
//    return sonuc
// }
// sonuc;//boyle donduremezsın returnle cevırebılırsın
// let donenDeger=cube(3)
// console.log(donenDeger)

// function dondurenMethod(isim){
//     let zeynep=isim+isim
// return zeynep
// }
// let sonuc=dondurenMethod("zeynep")
// console.log(sonuc)
