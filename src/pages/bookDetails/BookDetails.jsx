import React, { use, useState } from 'react';
import { useParams } from 'react-router';

const bookPromise = fetch('/booksData.json').then((res) => res.json());
const BookDetails = () => {
    const books = use(bookPromise);
    const { bookId } = useParams();
    const expectedBook = books.find(book => book.bookId == bookId)
    const { bookName, image, review, totalPages, rating, tags, publisher, yearOfPublishing } = expectedBook;

    const[storedBook, setStoredBook]=useState([]);
    const[WishListBook, setWishListBook]=useState([]);
    const handleReadBook = (currentBook) =>{
        const isExistBook = storedBook.find(book=>book.bookId == expectedBook.bookId);
        if(isExistBook)
            alert(`${bookName} is already exist`)
        else
            {
                setStoredBook([...storedBook, currentBook]);
                alert(`${bookName} added successful`);
            }
    }
    const handleWishListBook = (currentBook) =>{
        const isExistBook = WishListBook.find(book=>book.bookId == expectedBook.bookId);
        if(isExistBook)
            alert(`${bookName} is already exist`)
        else
            {
                setWishListBook([...WishListBook, currentBook]);
                alert(`${bookName} added successful`);
            }
    }
    
    return (
        <div className="card lg:card-side container mx-auto mt-10 gap-10">
            <figure className='p-18 bg-base-200 rounded-2xl w-full'>
                <img
                    src={image}
                    alt={bookName}
                    className='h-100 w-full' />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-4xl font-bold">The Catcher in the Rye</h2>
                <h5 className="text-[20px] text-gray-600">By : Awlad Hossain</h5>
                <div className="divider"></div>
                <h5 className="text-[20px] text-gray-600">Fiction</h5>
                <div className="divider"></div>
                <p className='text-[1rem] '><span className='font-bold'>Review :</span> {review}</p>
                <div className='space-x-3'>
                    <span className='font-bold'>Tag</span>
                    <div className="badge badge-soft badge-success rounded-full">#{tags[0]}</div>
                    <div className="badge badge-soft badge-success rounded-full">#{tags[1]}</div>
                </div>
                <div className="divider"></div>
                <div className='flex gap-10'>
                    <div className='text-[1rem]'>
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className='font-bold text-[1rem]'>
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className='space-x-3'>
                    <button onClick={()=>handleReadBook(expectedBook)} className="btn btn-outline">Mark As Read</button>
                    <button onClick={()=>handleWishListBook(expectedBook)} className="btn btn-info text-white">Add To Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;