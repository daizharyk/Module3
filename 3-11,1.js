let user = {
  name: "Alex",
  age : 27 ,
  articles : [{ name: "React"},{ name: "JavaScript"},{ name:"New cource"}],
};


for (const key in user) {
    console.log(user[key]);
}


const UserArticles = (user) => {
let userArticle = user.articles;
for (let index = 0; index < userArticle.length; index++){ 
  const article = userArticle[index];
  console.log(`Article ${index +1} name is ${article.name}`);
}
};
UserArticles(user);