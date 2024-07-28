// function show(){
//   console.log('show function');
// }

// function display(callback){
//   callback()
// }
// display(show)


// val=10;
// add=val+4;
// sub=add-7;
// mul=sub*2;
// div=mmul/5;

addition(5,function(addres){
  subtraction(addres,function(subres){
    multiplication(subres,function(mulres){
      division(mulres,function(divres){
        console.log("the answer is",divres);
      })
    })
  })
})

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

