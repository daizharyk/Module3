function promisF1() {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      console.log("Promis F1");
      resolve();
    },2000);
  })
}
function promisF2() {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      console.log("Promis F2");
      resolve();
    },1000);
  })
}
function promisF3() {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      console.log("Promis F3");
      resolve();
    },2000);
  })
}

async function asyncFunc(){
  await promisF1();
  await promisF2();
  await promisF3();
}
asyncFunc();
