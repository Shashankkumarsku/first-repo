
// // class Students{
// //   name="Peter";
// //   designation="Spider man";
// //   color="red and  blue"
// // }

// // let s= new Students();
// // console.log(s.name);


// class Students{
//   constructor(){
//     this.name="Peter";
//   this.designation="Spider man";
//   this.color="red and  blue";
//   this.display=()=>{
//     console.log('this',this)
//     return "Hello"
//   }
//   }
// }


// let s= new Students();
// console.log(s.name);
// console.log(s.display());
// console.log(this);
// // function show(){
// //   console.log(this)
// // }
// // show()


// Javascript me uper wale ko use karne ke trike

let student={
  name:'Peter',
  designation:'Spider man',
  color:'blue and red'
}
// console.log(student);
// console.log(student.name);
// console.log(student.designation);
// console.log(student.color);

// console.log(student.name);
// const data=[
//   {name: 'john' , uid:91,courseName:'js'},
//   {name: 'Ram' , uid:91,courseName:'express'},
//   {name: 'john' , uid:91,courseName:'Spider Man'}
//]
// console.log(data[0].courseName);
// for(let i=0;i<data.length;i++){
//   console.log(data[i].name)
// }

//..........................map method se print karna.....................///
       //.............All Print.....................///
// const details=data.map((d)=>{
//   return d
// })

// console.log(details);

///.............. section wise print..............///
// data.map((d)=>{
//   console.log(d.courseName)
// })


//....................Arrey ke ander arrey.............................///
const courseDetails={
  NoOfVideos:200,
  courseNames:['js','Express','Node','MongoDB','React','Github',{status:'Live',totalEnrollments:300567}],
  details:{
    noOfHrs:110,
    startDate:'14-05-2024',
    author:'Richa Arora'
  }
}

console.log(courseDetails.courseNames[4]);
console.log(courseDetails.details.author);
console.log(courseDetails.courseNames[6].totalEnrollments);

//.................For Out For In.......................////
//.................Function Constructor.......................////


//.................Function Constructor.......................////
function color(name,types){
  this.name=name;
  this.types=types
  this.display=function(){
    console.log('The color name is ${this.name} and the color type is ${this.types}');
  }

}

const c1=new color("Red","Oil Painting Color");
const c2=new color("Black","Matt Color");
const c3=new color("White","Crayons Color");
c1.display();

//.................For Out For In.......................////
const countries=["India","America","Japan","Bhutan","South korea","Africa"];
for(const value of countries){
  console.log(value);
}



////string....................///

const Fname="Peter Parker, Shashank kumar";
for(let n of Fname){
  console.log(n);
}

const employess={
  eName:'Peter',
  eId:89,
  eDesignation:'CEO'
}
for(const eData in employess){
  console.log(eData);
}

for(const eData in employess){
  console.log(`eData: ${employess[eData]}`);
}
