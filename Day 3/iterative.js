//1 to 10 tak likhna hai
//count Number



// console.log('1')
// console.log('2')
// console.log('3')
// console.log('4')
// console.log('5')
// console.log('6')
// console.log('7')
// console.log('8')
// console.log('9')
// console.log('10')


//1to 10 tak likhne ka short 

//for loop, while loop------for of and for in


// for(let i=1;i<=10;i++){
//   console.log(i);
// }

// for(let i=1;i<=100;i++){
//   console.log(i);
// }


// for(let i=1;i<=1000;i++){
//   console.log(i);
// }


// for(let i=2;i<=20;i=i+2){
//   console.log(i);
// }


// let i=1
// while(i<=10){
//   console.log("hello");
//   i++
// }


// let isplaying=true;
// while(isplaying){
//   const action1=prompt('enter "play" to continue or "quit" to exit','');


//   if(action1=='quit'){
//     isplaying=false
//     console.log('Thanks for playing');
//   }

//   else{
//     console.log('continue playing......');
//   }
// }



// for(;;){
//   console.log('hello')
// }

// let isplaying=true;
// while(isplaying){
//   const action1=prompt('enter "play" to continue or "quit" to exit','');


//   if(action1=='quit'){
//     isplaying=false
//     console.log('Thanks for playing');
//   }

//   else{
//     console.log('continue playing......');
//   }
// }


//guess the number
const correctnumber=3;
let guessthenumber=null;

while(guessthenumber!=correctnumber){

  guessthenumber=prompt("guess a number between 1 and 10")

  if(guessthenumber==correctnumber){
    document.getElementById('demo').innerHTML="<h2>Lucky guess!</h2>";
  }

  else{
    alert('Try Again')
    //document.getElementById('demo').innerHTML="<h2>Try Again</h2>";
  }
}



