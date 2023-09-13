import express from "express";
import mysql from "mysql";
import cors from "cors";
import { fileURLToPath } from 'url';
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"staccato"
})

app.use(express.json())
app.use(cors())

// Serve static files from the "backend/images" directory
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})

app.get("/books", (req,res)=>{
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json(err); // Handle errors appropriately
        }
        return res.status(200).json(data); // Send the retrieved data as JSON
    });
})

app.post("/books", (req,res) =>{
    const q ="INSERT INTO books (`title`, `author`, `description`, `price`, `cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.author,
        req.body.description,
        req.body.price,
        req.body.cover,
    ];

    db.query(q,[values], (err,data) =>{
        if(err) return res.json(err)
        return res.json("books has been created successfully")
    })
})

app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?"
    db.query(q, [bookId], (err, data) => {
        if (err) return res.status(500).json(err); // Handle errors with an appropriate status code
        return res.status(200).json("Book has been deleted successfully"); // Send a success message
    });
});

app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET title = ?, description = ?, price = ?, author = ?, cover = ? WHERE id = ?";
    
    const values = [
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.author,   
        req.body.cover,
        bookId, // Make sure to include the bookId as the last parameter
    ];

    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err); // Handle errors with an appropriate status code
        return res.status(200).json("Book has been updated successfully"); // Send a success message
    });
});


app.listen(8000, () => {
    console.log("Connected to backend!")
})