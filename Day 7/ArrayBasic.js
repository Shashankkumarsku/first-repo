// let fruits=["Apple", "Banana", "Orange", "Kiwi", "Melon", "Mango", "Pine Apple", "Watermelon"]

//  type of operations 
// (1) insertion
// (2) deletion 
// (3) traverse
// (4) search 
// (5) sorting
// (6) sub Array
// (7) two pointer 
// (8) sloding window 


//insert at the end or delete at the end

//...............................push opretion...............................................//
// console.log(fruits, fruits.length)
// fruits.push("cherries");
// console.log("after-------");
// console.log(fruits, fruits.length);


//...............................pop opretion...............................................//
// console.log(fruits, fruits.length)
// fruits.pop();
// console.log("after-------");
// console.log(fruits, fruits.length);

// insert at the start or delete at the start
// console.log(fruits, fruits.length)
// fruits.shift();                 //........ shift First  me Delete karta hai...............//
// fruits.unshift("guava");          ///........ Unshift First  me Add karta hai................///
// console.log("after-------");
// console.log(fruits, fruits.length)



// pop - delete element at the end of the Array
// push - Add element at the end of the Array
// shift - delete element at the start from the Array
// unshift - add element at the start of the Array 


// in between
//splice

let fruits=["Apple", "Banana", "Orange", "Kiwi", "Melon", "Mango", "Pine Apple", "Watermelon"];

// fruits.splice(1,3,"Hello", "Again");
// fruits.splice(-4,2,);
// fruits.splice(4);
fruits.splice(-5);
console.log(fruits);


