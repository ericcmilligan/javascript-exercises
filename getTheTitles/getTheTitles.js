const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]


const getTheTitles = function(object) {
  var titlelist = [];
   for(array in object){
     title = object[array]["title"]; 
     titlelist.push(title);
   }
   return console.log(titlelist);
};

getTheTitles(books);


module.exports = getTheTitles;
