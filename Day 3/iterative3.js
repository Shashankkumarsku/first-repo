const item1=20;
const item2=30;
const item3=35;
const item4=45;
const item5=60;
const discountlimmit=100;
const discountrate=0.10;

let totalprice=0;

for(let i=1;i<=5;i++){
  if (i==1){
    totalprice+=item1;

  }
  else if(i==2){
    totalprice+=item2;
  }

  else if(i==3){
    totalprice+=item3;
  }

  else if(i==4){
    totalprice+=item4;
  }

  else if(i==5){
    totalprice+=item5;
  }
}


console.log("total price is ",totalprice);

if(totalprice>discountlimmit){
  const discount=totalprice*discountrate;
  totalprice-=discount;
  console.log('After discount total price is',totalprice);
}
else{
  console.log('no discount applied',totalprice);
}