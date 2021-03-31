import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div className='container py-3'>
            <div className="row g-4">
                {
                    books.map(book =><Book book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Home;