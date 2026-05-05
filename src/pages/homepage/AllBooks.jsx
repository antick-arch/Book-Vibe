import { use } from "react";
import Cards from "./Cards";

const bookPromise = fetch('/booksData.json').then((res) => res.json());
const AllBooks = () => {
    const books = use(bookPromise);
    return (
        <div className="my-20 container mx-auto">
            <h2 className="text-center font-bold text-4xl mb-7">Books</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
                {
                    books.map((book) => <Cards key={book.bookId} book={book}></Cards>)
                }
            </div>
        </div>
    );
};

export default AllBooks;