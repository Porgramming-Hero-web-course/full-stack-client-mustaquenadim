import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { _id } = useParams();
    // const [book, setBook] = useState({});
    // useEffect(() => {
    //     const info = books.filter((type) => id == type.id);
    //     setBook(info[0]);
    // }, [_id]);

    const [book, setBook] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/books')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const info = data.filter(book => _id == book._id);
            setBook(info[0]);
        })
    }, [_id])

    return (
        <div>
            <h1>Checkout component is under construction.</h1>
        </div>
    );
};

export default Checkout;