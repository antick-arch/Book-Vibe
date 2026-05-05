import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const Cards = ({book}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">

                <figure className="p-6 ">
                    <div className="p-6 rounded-xl bg-base-200 w-full flex justify-center items-center">
                        <img
                        src={book.image}
                        alt="Shoes" 
                        className="rounded-xl h-55"/>
                    </div>
                </figure>
                <div className="card-body">
                    <div>
                        <div className="badge badge-soft badge-success rounded-full">{book.tags[0]}</div>
                        <div className="badge badge-soft badge-success rounded-full">{book.tags[1]}</div>
                    </div>
                    <h2 className="card-title font-bold text-2xl">{book.bookName}</h2>
                    <p>By : {book.author}</p>
                    <div className="border text-gray-200 border-dashed my-3"></div>
                    <div className="card-actions justify-between text-xxl">
                        <div>{book.category}</div>
                        <div className='flex justify-center items-center gap-2'><span>{book.rating}</span> <FaRegStar /></div>
                    </div>
                </div>

            </div>
    );
};

export default Cards;