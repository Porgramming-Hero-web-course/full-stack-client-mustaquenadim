import React from 'react';
import { Link } from 'react-router-dom';

const Books = (props) => {
    // console.log(props.book);
    const { _id, name, author, price, imageURL} = props.book;
    return (
        <div className="col-lg-4">
            <div className="card h-100">
                <img src={imageURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{author}</p>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col">${price}</div>
                        <div className="col">
                            <Link to={`/checkout/${_id}`} className="btn btn-success">Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;