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
   for(array in object){
     title = object[array]["title"] 
     console.log(title)
   }
};

getTheTitles(books)

module.exports = getTheTitles;
