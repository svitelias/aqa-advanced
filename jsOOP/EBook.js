import Book from './Book.js';

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() { return this._fileFormat; }
  set fileFormat(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('File format must be a non-empty string');
    }
    this._fileFormat = value;
  }

  printInfo() {
    console.log(`Title: ${this._title}, Author: ${this._author}, Year: ${this._year}, Format: ${this._fileFormat}`);
  }

  static fromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

export default EBook;
