import React, { use } from 'react';
import { useParams } from 'react-router';

const bookPromise = fetch('/booksData.json').then((res) => res.json());
const BookDetails = () => {
    const books = use(bookPromise);
    const { bookId } = useParams();
    const expectedBook = books.find(book => book.bookId == bookId)
    console.log(expectedBook);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;
    return (
        <div className="card card-side container mx-auto mt-10 gap-10">
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
                    <button className="btn btn-outline">Read</button>
                    <button className="btn btn-info text-white">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;