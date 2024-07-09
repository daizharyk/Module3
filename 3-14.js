function userBuilder  (name, age) {
  const nameDefault = "username";
  const ageDefault = 99;

  if(!name) name = nameDefault;
  if(!age) age = ageDefault;

  function creatUser(){
    return {
    name: name,
    age: age,
  };
  }
  return creatUser;
}

let userCreat1 = userBuilder("Didar", 20);
let userCreat2 = userBuilder("Didar");
let userCreat3 = userBuilder();

console.log(userCreat1());
console.log(userCreat2());
console.log(userCreat3());