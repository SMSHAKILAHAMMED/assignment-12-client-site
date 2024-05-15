import { useLoaderData } from "react-router-dom";
import AllCard from "../AllCard/AllCard";


const AllBooks = () => {
    const allBooks = useLoaderData();
    console.log(allBooks)
    return (
        <div className="lg:ml-10 lg:mr-10 mt-10">
            <h1 className="text-3xl text-center font-extrabold mt-10 mb-10">All Books : {allBooks?.length} </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
            allBooks.map(books => <AllCard key={books._id} books={books}></AllCard>)
        }
        </div>
      
    </div>
    );
};

export default AllBooks;