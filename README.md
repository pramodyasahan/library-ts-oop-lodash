
---


# 📚 Library Catalogue System (TypeScript + Lodash)

A simple, extensible library management system built using TypeScript and object-oriented programming (OOP) principles. This project demonstrates clean design patterns such as abstraction, inheritance, encapsulation, and singleton, along with utility enhancements using Lodash.

---

## Features

- 📦 Object-Oriented structure with `Book`, `AudioBook`, and `User` classes.
- 🧠 Abstract class `LibraryItems` for extensibility.
- 🔐 Singleton pattern used for `LibraryCatalogue`.
- 📚 Catalogue operations:
  - Add items (books, audiobooks, etc.)
  - Display all items
  - Find item by title
  - Remove item by ID
- ⚡ Enhanced with [Lodash](https://lodash.com/) for array utilities and data handling.
- ✅ Fully typed with TypeScript.

---

## 📁 Project Structure

```bash
.
├── src/
│   └── index.ts         # Main logic for catalog and usage
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project metadata and scripts
├── README.md            # Project documentation
```

---

## 🛠️ Technologies Used

- **TypeScript** – for static typing and OOP structure
- **Lodash** – for simplified data manipulation
- **Node.js** – runtime for executing the TypeScript code

---

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/pramodyasahan/library-catalogue-ts.git
cd library-catalogue-ts
```

2. **Install dependencies (using pnpm)**
```bash
pnpm install
```

3. **Compile and Run**
```bash
pnpm ts-node src/index.ts
```

> Make sure you have `typescript` and `ts-node` installed globally or as dev dependencies.

---

## 📘 Example Usage

```ts
const book1 = new Book(1, "The Alchemist", "Paulo Coelho", "ABC123");
library.addItem(book1);

const user1 = new User("Alice", "alice@example.com");
user1.borrowBook("The Alchemist");

library.displayItems();
```

---

## possible Extensions

- Add a `returnBook()` function
- Integrate JSON file/database storage
- Add UI (React, CLI, etc.)
- Implement due dates and fine system

---

## Learning Outcomes

This project is a great starting point for:
- Practicing **TypeScript OOP design**
- Applying the **Singleton pattern**
- Using **Lodash** for cleaner code
- Understanding the benefits of **typed programming** and code maintainability

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

## Author

Made with ❤️ by [Pramodya Sahan](https://github.com/pramodyasahan)

---