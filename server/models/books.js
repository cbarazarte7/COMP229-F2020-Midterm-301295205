/* 
    books.js
    Name: Carla Barazarte 
    StudentID: 301295205
    WebAppName: Books 
*/
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

const collection = mongoose.model('Book', Book);

const defaultBooks = [{
 
  // Inserting default values
  Title: "The water",
  Description: "The water is about a shark who terrorized...",
  Price: 20,
  Author: "Mike Tae",
  Genre: "Horror"
},
{

  // Inserting default values
  Title: "Friends",
  Description: "Friends is about 3 friends who struggled...",
  Price: 23.5,
  Author: "Laura Hardy",
  Genre: "Comedy"
},
{

  // Inserting default values
  Title: "Before Sunset",
  Description: "Before Sunset is about a marriage couple...",
  Price: 23.5,
  Author: "Ben Queen",
  Genre: "Romance"
},{

  // Inserting default values
  Title: "My Life",
  Description: "My Life is about my childhood...",
  Price: 15.3,
  Author: "Max Paint",
  Genre: "Biography",
}]
collection.bulkWrite(
  defaultBooks.map((defaultBook) => 
    ({
      updateOne: {
        filter: { Title : defaultBook.Title },
        update: { $set: defaultBook },
        upsert: true
      }
    })
  )
)

module.exports = collection;
