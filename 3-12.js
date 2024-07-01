let user = {
  name: "Alex",
  age : 27 ,
  articles : [{ name: "React"},{ name: "JavaScript"},{ name:"New cource"}],
};


const  getUserArticlesCount = (user) =>{ 
  let countArticles = user.articles.length;
  console.log(`User has ${countArticles} articles`);


  switch (countArticles) {
    case 0:
    case 1:
    console.log('Нужно добавить больше статей!');
    break;
    case 2:
    case 3:
    console.log('Отличное начало!');
    break;
    default:
    console.log('Так держать!');
    break;
}

}
getUserArticlesCount(user);