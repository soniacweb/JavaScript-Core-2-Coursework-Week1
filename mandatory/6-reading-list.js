/**

The Reading List
Keep track of which books you've read and which books you want to read!

=====
Exercise 1
=====

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log at least 5 books

=====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you have read it yet or not. 

If you've read it, log a string like 'You've already read "The Hobbit" by J.R.R. Tolkien', 
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/

let books = [
  {
    Author: "J.R.R Tolkien",
    Title: "The Hobbit",
    read: false,
  },
  {
    Author: "JKR",
    Title: "Harry Potter",
    read: true,
  },
];

// for (book in books) {
//   console.log(books[book]);
//   console.log(`${books[book].Title} by ${books[book].Author}`);
// }

for (book in books) {
  // console.log(books[book]);
  if (books[book].read === true) {
    console.log(`I have read ${books[book].Title} by ${books[book].Author}`);
  } else if (books[book].read !== true) {
    console.log(
      `I still need to read ${books[book].Title} by ${books[book].Author}`
    );
  }
}
