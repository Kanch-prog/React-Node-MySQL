import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() =>{
        const fetchAllBooks = async ()=> {
            try{
              const res = await axios.get("http://localhost:8000/books")
              setBooks(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchAllBooks();
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/books/${id}`); // Include id as a parameter
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }
   
    return(
        <div>
            <h1 className="header">Sarasavi Book Shop</h1>
            <div className="books">
                {books.map((book) => (
                    <div className="book" key={book.id}>
                        {console.log(book.cover)}
                        {book.cover && <img src={`http://localhost:8000/images/${book.cover}`}alt="" />} 
                        <h2>{book.title}</h2>
                        <h3>{book.author}</h3>
                        <p>{book.description}</p>
                        <span>{book.price}</span>
                        <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
                        <button className="update"><Link to={`/update/${book.id}`}>Update</Link></button>
                    </div>
                ))}
            </div>
            <button>
                <Link to="/add">Add new book</Link>
            </button>
        </div>
    )
}
export default Books;