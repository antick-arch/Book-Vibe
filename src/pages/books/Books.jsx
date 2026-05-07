import { useContext } from "react";
import BookContext from "../../context/BookContext";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ListedBookList from "../../listedBook/ListedBookList";
import ListedWishList from "../../listedBook/ListedWishList";
const Books = () => {
    const { storedBook, WishListBook } = useContext(BookContext);
    return (
        <div className="container mx-auto">
            <div className="min-h-28 lg:rounded-2xl bg-base-200 flex justify-center items-center my-10">
                <h2 className="font-bold text-3xl">Books</h2>
            </div>
            <div className="flex items-center justify-center">
                
            <div className="dropdown dropdown-center">
                <div tabIndex={0} role="button" className="btn m-1">Click  ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ListedBookList></ListedBookList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList></ListedWishList>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Books;