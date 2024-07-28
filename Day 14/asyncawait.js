// let a=9;
// function show(){
//   let b=10;
//   console.log("show function");

// }
// console.log("Hello");
// show();
// console.log("Hello Again");

// let a=9;
// async function show(){
//   let b=await 10;
//   console.log("show function",b);
// }

// async function show1(){
//   let b=await 6868;
//   console.log("show function",b);

// }

// async function show2(){
//   let b=await 34534354;
//   console.log("show function",b);

// }

// console.log("Hello");
// show();
// show1();
// show2();
// console.log("Hello Again");

async function answer(){
  let a=5;
  let add=await addition(a);
  let sub=await subtraction(add);
  let mul=await multiplication(sub);
  let div=await division(mul);
  console.log(div);
}
function addition (val,callback){
  return callback(val+5)
}


function subtraction (val,callback){
  return callback(val-3)
}


function multiplication(val,callback){
  return callback(val*5)
}


function division(val,callback){
  return callback(val/7)
}

