// ! ilkel tipler(primitive) string, number, booolen, undefined, null, symbol birbirlerinde bag yoktu
// let a=7;
// let b=a;
// console.log("a",a)// 7
// console.log("b",b)// 7
// console.log("--------")
// b=10;
// console.log("a",a) //7 
// console.log("b",b)// 10

// ! ilkel olmayan(references) object, array, function eşit değildir çünkü hib bölgesindedir referansları ayrıdır 
// let dizi1=[1,2,3];
// let dizi2=[1,2,3];

// if(dizi1==dizi2){
//  TODO:referanları eşit olmadıgı ıcın eşit değildir
//     console.log("eşittir")
// }
// else{
//     console.log("eşit değildir")
// }
// ? burada birbirlerini etkiler çünkü dizi2 1 atadık
let dizi1=[1,2,3];
let dizi2=dizi1;
dizi2.push(12);
console.log(dizi1);
console.log(dizi2);
