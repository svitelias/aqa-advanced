import Book from './Book.js';
import EBook from './EBook.js';

// Створення екземплярів Book
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
const book3 = new Book('1984', 'George Orwell', 1949);

book1.printInfo();
book2.printInfo();
book3.printInfo();

// Створення екземпляра EBook
const ebook1 = new EBook('Dune', 'Frank Herbert', 1965, 'PDF');
ebook1.printInfo();

// Статичний метод getOldest
const oldest = Book.getOldest([book1, book2, book3, ebook1]);
console.log('Oldest book:');
oldest.printInfo();

// Статичний метод fromBook
const ebook2 = EBook.fromBook(book2, 'EPUB');
console.log('EBook from Book:');
ebook2.printInfo();
