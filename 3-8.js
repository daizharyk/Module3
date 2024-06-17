function User(name) {
  this.name = name;

}

function Article(name , text) {
  this.name = name ;
  this.text=name ;
}

let user = new User ("Didar")



Object.defineProperty(user , "id",{
  value: 1,
  writable : false ,}
);

user.getinfo = function() {
  return `User ${this.name} has ${this.articles.length} articles`;
};

console.log(user);

let article1 = new Article("React" , "Ddadfafdggd");
let article2 = new Article("Angular" , "55959grgrg");

user.articles = [article1 , article2]

console.log(user);


console.log(user.getinfo());