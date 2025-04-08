"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(ISBN, title, author, year) {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getBookInfo() {
        return `ISBN: ${this.ISBN}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }
    getISBN() {
        return this.ISBN;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getYear() {
        return this.year;
    }
    setISBN(ISBN) {
        this.ISBN = ISBN;
    }
    setTitle(title) {
        this.title = title;
    }
    setAuthor(author) {
        this.author = author;
    }
    setYear(year) {
        this.year = year;
    }
}
exports.default = Book;
