import _ from 'lodash';

abstract class LibraryItems {
    id: number;
    title: string;

    protected constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }

    abstract display(): void;
}

class Book extends LibraryItems {
    author: string;
    ISBN: string;

    constructor(id: number, title: string, author: string, ISBN: string) {
        super(id, title);
        this.author = author;
        this.ISBN = ISBN;
    }

    display(): void {
        console.log(`${this.title} book by ${this.author}`);
    }
}

class AudioBook extends LibraryItems {
    narrator: string;
    length: number;

    constructor(id: number, title: string, narrator: string, length: number) {
        super(id, title);
        this.narrator = narrator;
        this.length = length;
    }

    display(): void {
        console.log(`${this.title} audio book by ${this.narrator}, length: ${this.length} mins`);
    }
}

class User {
    private name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    borrowBook(bookTitle: string): void {
        console.log(`${this.name} borrowed "${bookTitle}"`);
    }

    manageLibrary(): void {
        console.log(`${this.name} manages the library`);
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }
}

class LibraryCatalogue {
    private libraryItems: LibraryItems[] = [];
    private static instance: LibraryCatalogue;

    private constructor() {
    } // make constructor private for Singleton

    static getInstance(): LibraryCatalogue {
        if (!LibraryCatalogue.instance) {
            LibraryCatalogue.instance = new LibraryCatalogue();
        }
        return LibraryCatalogue.instance;
    }

    findItemByTitle(title: string): LibraryItems | undefined {
        return _.find(this.libraryItems, {title});
    }

    getAllItems(): LibraryItems[] {
        return _.cloneDeep(this.libraryItems);
    }
}

// Usage
const book1 = new Book(1, "The Alchemist", "Paulo Coelho", "ABC123");
const book2 = new Book(2, "1984", "George Orwell", "DEF456");

const library = LibraryCatalogue.getInstance();

const user1 = new User("Alice", "alice@example.com");
user1.borrowBook(book1.title);
user1.manageLibrary();

// Additional usage
const foundBook = library.findItemByTitle("1984");
console.log("Found book:", foundBook);

