'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class BookController {
  constructor() {
    this.bookList = [];
  }
  findBookByISBN(ISBN) {
    return this.bookList.find(book => book.getISBN() === ISBN);
  }
  addBook(book) {
    if (this.findBookByISBN(book.getISBN())) {
      console.log(`Book with ISBN '${book.getISBN()}' already exists`);
      return false;
    }
    this.bookList.push(book);
    return true;
  }
  updateBook(ISBN, newBook) {
    const book = this.findBookByISBN(ISBN);
    if (!book) {
      console.log(`Book with ISBN '${ISBN}' not found`);
      return false;
    }
    book.setISBN(newBook.getISBN());
    book.setTitle(newBook.getTitle());
    book.setAuthor(newBook.getAuthor());
    book.setYear(newBook.getYear());
    return true;
  }
  deleteBook(ISBN) {
    const index = this.bookList.findIndex(book => book.getISBN() === ISBN);
    if (index === -1) {
      console.log(`Book with ISBN '${ISBN}' not found`);
      return false;
    }
    this.bookList.splice(index, 1);
    console.log(`Book with ISBN ${ISBN} has been deleted.`);
    return true;
  }
  printBookList() {
    console.log('Book List:');
    this.bookList.forEach((book, index) => {
      console.log(`
    Book ${index + 1}: ${book.getTitle()}
    ISBN: ${book.getISBN()}
    Author: ${book.getAuthor()}
    Year: ${book.getYear()}
            `);
    });
  }
}
exports.default = BookController;
