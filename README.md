# Full-Stack Application: CRUD Operations with MySQL, Node.js, and React


https://github.com/Kanch-prog/React-Node-MySQL/assets/121807277/0eebbe68-54de-4104-893a-742f1570a856


## Introduction
This full-stack application allows users to perform CRUD (Create, Read, Update, Delete) operations on book records stored in a MySQL database. It's built using Node.js and React, providing a seamless user experience for managing book data.

## Features
- **View Books:** Fetch and display book records from the MySQL database.
- **Add New Book:** Create new book entries with titles, authors, descriptions, prices, and covers.
- **Update Book Details:** Modify existing book records by updating their titles, descriptions, prices, authors, and covers.
- **Delete Book:** Remove book entries from the database.

## Backend (Node.js & Express)
The backend is developed using Node.js and Express. It handles API requests, interacts with the MySQL database, and performs CRUD operations.

### Installation
1. Clone the repository.
2. Navigate to the backend directory.
3. Install dependencies using `npm install`.
4. Configure MySQL database connection in `index.js`.
5. Run the server using `npm start`.

### API Endpoints
- **GET /books:** Fetch all books from the database.
- **POST /books:** Add a new book to the database.
- **PUT /books/:id:** Update a book's details.
- **DELETE /books/:id:** Delete a book from the database.

## Frontend (React)
The frontend is built using React, providing an interactive user interface to manage book records.

### Installation
1. Navigate to the frontend directory.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.

### Routes
- **/**: Homepage displaying a list of books.
- **/add**: Form to add a new book.
- **/update/:id**: Form to update details of a specific book.

## Folder Structure
- **backend/**: Contains Node.js backend code.
- **frontend/**: Contains React frontend code.
- **database.sql**: SQL script to create the database schema.

## Technologies Used
- **Backend:** Node.js, Express.js, MySQL
- **Frontend:** React.js, React Router
- **Others:** CORS, Axios

## Contributors
- [Kanchana Karunarathna](https://github.com/Kanch-prog)

## License
This project is licensed under the [MIT License](LICENSE).
