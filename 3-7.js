function User(name) {
  this.name = name;

}

function Article(name , text) {
  this.name = name ;
  this.text=name ;
}

let user = new User ("Didar")
console.log(user);

let article1 = new Article("React" , "Ddadfafdggd");
let article2 = new Article("Angular" , "55959grgrg");

user.articles = [article1 , article2]

console.log(user);