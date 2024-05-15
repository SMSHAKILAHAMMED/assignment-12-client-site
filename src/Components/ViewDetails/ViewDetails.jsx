import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewDetails = () => {
    const [book, Setart] = useState({});
    const { _id } = useParams()

    useEffect(() => {
        fetch('https://assignment-11-seven-beta.vercel.app/book')
            .then(res => res.json())
            .then(data => {
                const avarage = data.find(item => item._id == _id)
                Setart(avarage)
            })
    }, [_id])
    console.log(book.location);

    const { name, quantity, rating, category, description, author, image } = book;
    return (
        <div className="container mx-auto mt-5">
            <div className="card card-side bg-base-100 border-2 shadow-lg">
                <figure><img className="ml-5 p-2 h-full w-96 " src={image} alt="Movie" /></figure>
                <div className="card-body space-y-6 mt-3">
                    <h1 className="text-4xl font-extrabold">Book Name : {name}</h1>
                    <h1 className="text-3xl font-bold"> Author Name : {author}</h1>
                    <p className="text-2xl font-medium"> Quantity : {quantity}</p>
                    <p className="text-2xl font-semibold"> Category Name : {category}.</p>
                    <div className="flex gap-2">
                        <div>
                            <p className="text-xl font-medium"> Rating : {rating}</p>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <p className="text-lg font-light"> Description : {description}</p>
                    <div className="card-actions justify-end">
                        <Link to='/addBorrowedBooks'><button className="btn btn-success rounded-full">Add Borrowed Books</button></Link>
                        <Link to='/'><button className="btn btn-accent rounded-3xl">Back to home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;