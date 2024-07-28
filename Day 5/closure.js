const outer=()=>{
  let a=9
  console.log('outer function');
  const inner=()=>{
    let b=10
    const inner=('inner',a,b);
  }
  inner();
  
}
outer();


