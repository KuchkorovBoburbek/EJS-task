







// B - TASK
// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin. MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.\n\n@MITASK


// 1- usul: Men o'ylagan for orali 
// function getNum(string) {
//   let count = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] >= "0" && string[i] <= "9") { 
//       count++;
//     }
//   }

//   return count;
// }
// console.log(getNum("ad2a54y79wet0sfgb9"));

// Men bu yerda shunchaki typeof bilan hal qilmoqchi bolgnadim lekin 
// string isidan kesib olingan raqamlar ham string ga hisoblanadi 


//2- usul biz ko'rgan  validatordan foydalanib 
// 


// const validator = require("validator");

// function getNum(string) {
//   let count = 0;

//   for (let num of string) {
//     if(validator.isInt(num)) { 
//       count++;
//     }
//   }

//   return count;
// }

// console.log(getNum("ad2a54y79wet0sfgb9"));

























// A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni 
// ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi. 
// Uppercase, Lowercaselarni farqlamasdan hisoblasin deb tasavvur qildim
// 1- yechim 
// function count(letter, word){
//     let emptyArr = [];
//     for(let i =0; i<word.length; i++){
//         emptyArr.push(word[i]);
//     }
//     const result = emptyArr.filter((e) => {
//       return e.toUpperCase() === letter.toUpperCase();
//     });
//     const res = result.length
//     if(res==0){
//       return "Bu letter mavjud emas"
//     }
//     else
//     return `Result: ${res} ta`;
// }

// console.log(count("s", "Encapsulation")); 

// 2- yechim

// 
// function count(a, b) {
//   let count = 0;
//   a = a.toLowerCase();
//   b = b.toLowerCase();

//   for (let i = 0; i < b.length; i++) {
//     if (b[i] === a) count++;
//   }
//   return count;
// }
// console.log(count("s", "Encapsulation")); 







// // asynchronous functionlarni organamiz 

const list = [
    "Yaxsh talaba boling ", //0-20
    "Tog'ri boshliq tanlang va koproq hato qiling ", //20-30
    "uzingizga ishlashni boshlang", // 30-40
    "Siz kuchli bolgan narsalarni qiling ", // 40-50
    "Yoshlarga investitsia qiling ", //50-60
    "Endi dam oling Foydasi yoq" //60+
] ;


//// Callback functionlar 
 //// calback hell 

// function maslahatBering(a, callback){
//     if (typeof a !== "number") callback("ERROR: Iltimos Raqam yozing", null);
//     // 1- qismini error dedim, 1- qismini biz qaytarmoqchi bolgan data
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else{
//         setTimeout(function(){
//             callback(null, list[5])
//         }, 4000);
        
//     }
// }

// console.log("Passed here 0")
// maslahatBering(65, (err, data)=>{
//     if(err)console.log("err", err);
//     else{
//         console.log("Javob:", data);
//     }
// })
// console.log("Passed here 1");
// console.log("0")

// setTimeout(() => {
//     console.log("first")
// }, 3000);

// setTimeout(() => {
//   console.log("second");
// }, 2000); 



// Asynchronous functionlar 
// async function maslahatBering(a){
//     if (typeof a !== "number") throw new Error ("ERROR: Iltimos Raqam yozing");
//     // 1- qismini error dedim, 1- qismini biz qaytarmoqchi bolgan data
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else{
//             // return list[5];
//              return new Promise((resolve, reject)=>{
//               setTimeout(() => {
//                 resolve (list[5]);
//               }, 3000);
//              })
//     }
// }
//// call via then / catch
// console.log("Passed here 0")
// const result = maslahatBering(35);
// result
// .then((data)=>{
//   console.log("data:", data)
// })
// .catch((err)=>{
//   console.log("ERROR:", err)
// })
// console.log("Passed here 1"); // BUning sababi sync functionlar hammasi ishga tushib bolgach async functionlar bilan nodejs ishlay boshlaydi


//// call via async await
// async function run() {
// let javob = await maslahatBering(23)
//   console.log(javob);
//   javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(35);
//   console.log(javob);
    
// }
// run() // demak biz deifne qismida async dan foydalanib , call qismida then catch qilishimiz mn  yoki call da  async await dan foydalanishimiz mumkin. Async bilan ishlaganda imkon qadar try catch dan foydalanishga harakat qiling 




// callback functionlarni ahamiyati va ornini yana bir bor korib chiqamiz 

// function maslahatBering(a, callback){
//     if (typeof a !== "number") callback("ERROR: Iltimos Raqam yozing", null);
//     // 1- qismini error dedim, 1- qismini biz qaytarmoqchi bolgan data
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else{
//        setInterval(() => {
//            callback(null, list[5]);
//        }, 1000);
        
//     }
// }

// console.log("Passed here 0")
// maslahatBering(65, (err, data)=>{
//     if(err)console.log("err", err);
//     else{
//         console.log("Javob:", data);
//     }
// })
// console.log("Passed here 1");

