import React, { useContext } from 'react';
import BookContext from '../context/BookContext';
import Cards from '../pages/homepage/Cards';

const ListedBookList = () => {
    const { storedBook } = useContext(BookContext);
    return (
        <div className='container mx-auto my-5 grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>
            {
                storedBook.map((book, index) => <Cards key={index} book={book}></Cards>)
            }
        </div>
    );
};

export default ListedBookList;