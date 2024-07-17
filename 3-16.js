
let user = {
  name: "Alex",
  age: 27,
  articles: [{ name: "React" }, { name: "JavaScript" }, { name: "New cource" }],
};


function logUserArticles() {
  let userArticles = this.articles;
  userArticles.forEach((article, i) => {
    console.log(`Article ${i + 1} name is ${article.name}`);
  });
};

logUserArticles.call(user);
let userLogArticles = logUserArticles.bind(user);
userLogArticles();