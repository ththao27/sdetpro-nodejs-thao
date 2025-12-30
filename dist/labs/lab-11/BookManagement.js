"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const BookController_1 = __importDefault(require("./BookController"));
const Book_1 = __importDefault(require("./Book"));
// Program Interface
bookManagement();
// Main Program
function bookManagement() {
    let isInteracting = true;
    let bookController = new BookController_1.default();
    while (isInteracting) {
        printMenuApp();
        const userChoice = getUserChoice();
        switch (userChoice) {
            case 0:
                isInteracting = false;
                break;
            case 1: {
                let ISBN = Number(readline_sync_1.default.question('Please enter ISBN: '));
                let title = readline_sync_1.default.question('Please enter title: ');
                let author = readline_sync_1.default.question('Please enter author: ');
                let year = Number(readline_sync_1.default.question('Please enter year: '));
                let book = new Book_1.default(ISBN, title, author, year);
                bookController.addBook(book);
                bookController.printBookList();
                break;
            }
            case 2: {
                let ISBN = Number(readline_sync_1.default.question('Please enter ISBN: '));
                let book = bookController.findBookByISBN(ISBN);
                if (book) {
                    console.log(book.getBookInfo());
                }
                else {
                    console.log(`Book with ISBN '${ISBN}' not found`);
                }
                break;
            }
            case 3: {
                bookController.printBookList();
                let ISBN = Number(readline_sync_1.default.question('Please enter ISBN: '));
                let title = readline_sync_1.default.question('Please enter new title: ');
                let author = readline_sync_1.default.question('Please enter new author: ');
                let year = Number(readline_sync_1.default.question('Please enter new year: '));
                let newBook = new Book_1.default(ISBN, title, author, year);
                bookController.updateBook(ISBN, newBook);
                bookController.printBookList();
                break;
            }
            case 4: {
                bookController.printBookList();
                let ISBN = Number(readline_sync_1.default.question('Please enter ISBN: '));
                bookController.deleteBook(ISBN);
                bookController.printBookList();
                break;
            }
            case 5: {
                bookController.printBookList();
                break;
            }
            default:
                console.log('Invalid number, please try again\n');
                break;
        }
    }
}
// Support Functions
function getUserChoice() {
    return Number(readline_sync_1.default.question('Please enter your choice: '));
}
function printMenuApp() {
    console.log(`
======= Book Management Program (CRUD)============
    1. New book
    2. Find a book(ISBN)
    3. Update a book
    4. Delete a book
    5. Print the book list
    0. Exit
    `);
}
//# sourceMappingURL=BookManagement.js.map