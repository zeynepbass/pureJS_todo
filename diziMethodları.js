let arabalar=["bmw","toyota","porche"]

// ?PUSH METHOD
//console.log(arabalar.push("data"),arabalar) //datayı ekler


// ?UNSİFT
//arabalar.unshift("bmwabasi")
//console.log(arabalar) //basına bmwbası ekler

// ?POP
// arabalar.pop("porsche")
// console.log("sonelemanısil",arabalar)

// ?SHİFT
// arabalar.shift();
// console.log("dizinin basından siler",arabalar)


// ? SPLİCE
// arabalar.splice(0,2,"hundai");//0 ındexe ekle 3 elemanı sıl hundai ekledıgı ıcın toyotaya dnek geldı
// console.log("dizideki porche sıl basa ekle",arabalar)
// arabalar.splice(2,0,"hundai");//ikinci indexsin oldugu yere ekle ıkıncı deger sılmeden demek
// console.log("dizinin basına veya ırtasına eleman eklıcem",arabalar);


// ?TOSTRİNG METHOT
// console.log(typeof arabalar)
// let stringMethod=arabalar.toString();
// console.log(typeof stringMethod)
// console.log( stringMethod) //stringe cevirir


// ?OIN METHOT
// let stringArabalar=arabalar.join("-"); //string yapıp aralara - koyduk
// console.log(stringArabalar)

// ?CONCAT METHOT
// let arabalar2=["şahin","tofaş"]
// let stringArabalar=arabalar.concat(arabalar2); //iki diziyi birleştirdi
// console.log(stringArabalar)




// ?SLİCE-DİZİYİ İSTENİLEN YERDEN BOLUP TEKRAR OLUSTURMA
// const ayriDizi=arabalar.slice(1);//ilk 0-1-2 yazdırdık
// console.log(ayriDizi)


// ? SPLİT METHOD
// let isimler="zeynep,ali,veli";
// const data=isimler.split(",");//VİRGÜLE GÖRE BÖL ONLARI ARRAY CEVIR DEMEK
// console.log(data)

// ? INDEXOF METHOD 
//indexe göre sorghu atar
//  let isimler="zeynep,ali,veli";
//  const data=isimler.split(",");
//  let index=data.indexOf("zeynep")
// if(index==0){
//     console.log("belirtilen elemena vardır")
    
// }
// else{
//     console.log("elaman yoktur")
// }

// ? INCLUDES METHOD 
//bu elemanı ıcerıyormu
// let sonuc=arabalar.includes("porche");
// console.log(sonuc)