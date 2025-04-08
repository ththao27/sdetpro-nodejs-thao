import Book from "./Book";

export default class BookController {
    private bookList: Book[] = [];

    findBookByISBN(ISBN: number): Book | undefined {
        return this.bookList.find(book => book.getISBN() === ISBN);
    }

    addBook(book: Book): boolean {

        if (this.findBookByISBN(book.getISBN())) {
            console.log(`Book with ISBN '${book.getISBN()}' already exists`);
            return false;
        }
        this.bookList.push(book);
        return true;
    }

    updateBook(ISBN: number, newBook: Book): boolean {
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
    
    deleteBook(ISBN: number): boolean {
        const index = this.bookList.findIndex(book => book.getISBN() === ISBN);

        if (index === -1) {
            console.log(`Book with ISBN '${ISBN}' not found`);
            return false;
        }
        this.bookList.splice(index, 1);
        console.log(`Book with ISBN ${ISBN} has been deleted.`);
        return true;
    }

    printBookList(): void {
        console.log("Book List:");
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