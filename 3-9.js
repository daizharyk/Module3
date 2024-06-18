let user1 = {name: "Alex"};
let user2 = {name: "Didar"};

let article1 = { name: "React" };
let article2 = { name: "Angular" };
let article3 = { name: "Vue" };

let userArticles = new Map ();

userArticles.set(user1, [article1 ,article2]);
userArticles.set(user1, [article3]);

console.log(userArticles);

function  onlyunq(arr){
  let setFromArray = new Set (arr);
  return Array.from(setFromArray);

}

let newArr = [1,2,2,3,5,5,6,925,56,65,8,96,5,88,87,1 ];
console.log(onlyunq(newArr));