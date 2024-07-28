// var mypromise= new Promise(function(res,rej){
//   const num1=5;
//   const num2=6;
// if(num1==num2){
//   res();
// }
// else{
//   rej();
// }
// })

// mypromise.then(()=>console.log("resolved"))
// .catch(()=>console.log("rejected"))


// function addition (val,){
//   return  val+5;
// }


// function subtraction (val,callback){
//   return val-3;
// }


// function multiplication(val,callback){
//   return val*5;
// }


// function division(val,callback){
//   return val/7;
// }


// var mypromise=new Promise(function(resolve,reject){
//   let a=5;
//   if(a){
//     resolve(a)
//   }
//   else{
//     reject()
//   }
// })

// // var mypromise=new Promise(function(resolve,rejecte){
// //   resolve(5)
// // });

// //......................... CHAINING PROMISE....................................................//
// mypromise.then(addition).then(subtraction).then(multiplication).then(division)
// .then((data)=>console.log("the answe is",data))

// .catch((e)=>console.log(e))



//........................ PROMISE ALL............................................................//
const promise1= new Promise.resolve("First promise resolved");
const promise2= new Promise.resolve("Second promise resolved");

Promise.all([promise1,promise2])
.then((result)=>console.log(result))
.then((e)=>console.log(e))

// Promise.rece,Promise.allSettled, Promise.any................//
