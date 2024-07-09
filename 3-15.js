let user = {
  name: "Alex",
  age: 27,
  articles: [{ name: "React" }, { name: "JavaScript" }, { name: "New cource" }],
};

function logUserArticles(){
  let userArticles = this.articles;

  userArticles.forEach((articleName , articleIndex) => {
    console.log(`Article ${articleIndex + 1} name is ${articleName.name}`);
  });
}
user.logArticles = logUserArticles
user.logArticles();