let articles = ["Fullstack" , "Frontend", "Backend"];

articles.push("React");

console.log(articles);

let firstarticle = articles.shift();

console.log(firstarticle);
console.log(articles);

let indexofBackend = articles.indexOf ("Backend");
console.log("Backend is article number", indexofBackend + 1);

console.log(articles);