import React, { useEffect, useState } from 'react';

const Manage = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://apple-shortcake-30747.herokuapp.com/books')
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
            });
    }, []);
    const handleDeleteBook = (id) => {
        const url = `https://apple-shortcake-30747.herokuapp.com/deleteBook/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };
    return (
        <div className='container'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>Book Name</th>
                        <th scope='col'>Author Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr>
                            <th scope='row'>{book.name}</th>
                            <td>{book.author}</td>
                            <td>${book.price}</td>
                            <td>
                                <button className='btn btn-warning'>
                                    Edit
                                </button>
                                <button
                                    className='btn btn-danger'
                                    onClick={() => handleDeleteBook(book._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Manage;
