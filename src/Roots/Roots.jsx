import { useLoaderData } from "react-router-dom";
import BookCard from "../MongoDB/BookCard/BookCard";

const Roots = () => {
    const books = useLoaderData();


    return (
        <div className="container mx-auto">
            <h1 className="text-3xl text-center font-extrabold mt-10">Card Book : </h1>
            <p className="text-center">Rokomari.com is the largest online bookstore in Bangladesh. <br /> Buy Novel, Story, Islamic, Computer Programming, Children, West Bengal, Fiction, Non fiction ...</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {
                 books.slice(0,6).map(book => <BookCard
                    key = {book._id}
                    books = {book}
                    ></BookCard> )
            }
            </div>
        </div>
    );
};

export default Roots;