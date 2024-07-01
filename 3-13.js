let user = {
  name: "Alex",
  age: 27,
  articles: [{ name: "React" }, { name: "JavaScript" }, { name: "New cource" }],
};

const logUserArticles = (user) => {
  let userArticles = user.articles;

  userArticles.forEach((articleName , articleIndex) => {
    console.log(`Article ${articleIndex + 1} name is ${articleName.name}`);
  });
}
logUserArticles(user);

user.articles = user.articles.map((text) => {
  text.text = 'default text';
  return text;
});
console.log(user);


let articleName = user.articles.reduce((prev , curr) =>{
 return prev + " " + curr.name;
}, "");
 console.log(articleName);