const message="Hello How Are You.";
const tittle="react"
console.log(message.length);
// console.log(message.toUpperCase());
// console.log(message.concat(tittle));

//..............................String.............................................//
////// String===str////////////////////////////
let str="Apple,Banana, Orange";
console.log(str.charAt(15));
console.log(str.indexOf("Apple"));
// let fruits=str.substring(4,10);
//let fruits=str.slice(4);
//let fruits=str.slice(4,10);
// let fruits=str.slice(-12,-4);
// console.log(fruits)

//Form fill up karte samay  piche ka space htane ke liye ham trimstart() ka use karte hai............//
// const fname="           Peter"
// console.log(fname.trimStart());


//Form fill up karte samay  last ka space htane ke liye ham trimend() ka use karte hai............//
// const fname="Peter         "
// console.log(fname.trimEnd());

//Form fill up karte samay first and last ka space htane ke liye ham trim() ka use karte hai............//

// const fname="                Peter         "
// console.log(fname.trim());

// let a=9;
// let b="9";
// if(a==b){
//   console.log('equal');
// }
// else{
//   console.log("not equal");
// }

// if(a===b){
//   console.log('equal');
// }
// else{
//   console.log("not equal");
// }





const name1="Peter";
const name2="Peter";
const name3=new String("Peter");
const name4=new String("Peter");

// if(name1==name2){
//   console.log('true')
// }

if(name1==name3){
     console.log('true')
}

