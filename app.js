//document write ile cıktı verme
document.write("sdfsdf <br/>")
document.write("sdfsdf")
console.log("zeynep")

let a=5;
let b=10;
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



 var adeger=5;//GLOBAL SCOPE SEN bUNA HER YERDEN ERISEBILIRISN kıvırcık parantez dısında plmalı
 function method1(){
    console.log(adeger)
}
method1()

 //FUNCTİON SCOPE TANIMLANDIGI ZAMAN O DEGISKENE KIVIRCIK PARANTEZLER ICINDEN ERISEBILIRSIN 
function method2(){
    var sayi=10;
    console.log(sayi)

   // ? BLOK SCOPE FUNCTİON ICINDE İF WHİLE FOR ACARSAN BLOCK SCOPE OLUP

    // if(true){
    //   var b=20 // ? block scope
    // }
    // while
}
method2();



// ? es6 ile let ve const geldı

// ? var ile ilgili tanımlanan her sey function scope olur  blockta bıle tanımlasan function scope ozellıgı gorur
// ? let/const : block scope oellıgıne ssahıp
function selamVer(){
    var selam="herkese selam"; //? fucntion scope
    if(true){
        var b=10;
        let c=10
        console.log(c)
    }
    //console.log(c)//burada patlatır burada erişemezsin
    console.log(b); 
    console.log(selam);
}
selamVer()


// ? sabit değişmez

// let degismez=5;
// degismez=7;
// console.log(degismez);

// ? değiştirebilirsin


const user ={
    username:"zeynep",
    password:"123"
}
user.username="zeynepbas";
console.log(user)




/*  *OPERATÖRLER...
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
ATMA OPERAÖTRLERİ

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



/* MANITKSAL OPERATORLER && || ! 





*/


/* DİALOG KUTULARI
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



/* kOŞUL YAPIALRI 
if else kullanırken ıllede else kullanamk zorunda degılsın

*/
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