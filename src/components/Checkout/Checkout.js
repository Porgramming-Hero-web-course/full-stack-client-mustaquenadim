import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { _id } = useParams();
    const [book, setBook] = useState([]);
    const dateTime = new Date().toLocaleString();

    useEffect(() => {
        fetch('http://localhost:8000/books')
        .then(res => res.json())
        .then(data => {
            const info = data.filter(book => _id == book._id);
            setBook(info[0]);
        })
    }, [_id])

    const handleOrder = () => {
        const newOrder = {...loggedInUser, ...book, dateTime};
        console.log(newOrder);
        fetch('http://localhost:8000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className="container">
            <h1>Checkout</h1>
            <h4>Email: {loggedInUser.email}</h4>
            <h5>Date: {dateTime}</h5>
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
            <button className="btn btn-primary" onClick={handleOrder}>Order</button>
        </div>
    );
};

export default Checkout;