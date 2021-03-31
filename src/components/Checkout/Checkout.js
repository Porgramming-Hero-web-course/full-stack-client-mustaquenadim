import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { _id } = useParams();
    const [book, setBook] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/books')
        .then(res => res.json())
        .then(data => {
            const info = data.filter(book => _id == book._id);
            setBook(info[0]);
        })
    }, [_id])

    return (
        <div className="container">
            <h1>Checkout</h1>
            <h6>Email:</h6>
            <h6>Date:</h6>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={book.imageURL} alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{book.name}</h5>
                            <p className="card-text">{book.author}</p>
                            <p className="card-text">${book.price}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary">Order</button>
        </div>
    );
};

export default Checkout;