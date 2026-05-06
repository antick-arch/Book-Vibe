import { use, useState } from 'react';
import BookContext from './BookContext';

const bookPromise = fetch('/booksData.json').then((res) => res.json());
const BookProvider = ({children}) => {
    const books = use(bookPromise);
    const[storedBook, setStoredBook]=useState([]);
    const[WishListBook, setWishListBook]=useState([]);
    const handleReadBook = (currentBook) =>{
        const isExistBook = storedBook.find(book=>book.bookId == currentBook?.bookId);
        if(isExistBook)
            alert(`${currentBook?.bookName} is already exist`)
        else
            {
                setStoredBook([...storedBook, currentBook]);
                alert(`${currentBook?.bookName} added successful`);
            }
    }
    const handleWishListBook = (currentBook) =>{
        const isExistBook = WishListBook.find(book=>book.bookId == currentBook?.bookId);
        if(isExistBook)
            alert(`${currentBook?.bookName} is already exist`)
        else
            {
                setWishListBook([...WishListBook, currentBook]);
                alert(`${currentBook?.bookName} added successful`);
            }
    }
    const data = {
        books,
        storedBook,
        WishListBook,
        handleReadBook,
        handleWishListBook,
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;