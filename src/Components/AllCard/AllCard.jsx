import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllCard = ({ books }) => {
    const [book, setBook] = useState();

    const handleDelele = () => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://assignment-11-seven-beta.vercel.app/book/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your book has been deleted.",
                                icon: "success"

                            })

                            const remaining = book.filter(c => c._id !== _id);
                            setBook(remaining);
                        }

                    })

            }
        });
    }

    const { _id, name, quantity, rating, category, description, author, image } = books;
    return (
        <div >
            <div className="card h-full w-96 border-2 bg-base-100 hover:scale-110  shadow-xl">
                <figure><img className="border-2 mt-5 p-3 rounded-lg h-64 w-80" src={image} alt="book" /></figure>
                <div className="card-body">
                    <h1 className="text-2xl font-extrabold">Book Name : {name}</h1>
                    <h2 className="card-title font-bold"> Author Name : {author}</h2>
                    <div>
                        <p className="text-lg font-medium"> Quantity : {quantity}</p>
                        <div className="flex gap-2">
                            <a className="text-lg font-medium"> Rating : {rating}</a>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-xl font-mediam"> Category : {category}</h2>
                    <p className="font-light"> Description : {description}</p>

                    <div className="card-actions justify-center">
                        <div className="join card-actions justify-end mt-2">
                            <Link to={`/viewDetails/${_id}`}><input className="join-item btn bg-fuchsia-500" type="radio" name="options" aria-label="Show" /></Link>
                            <Link to={`/updateCard/${_id}`}><input className="join-item btn bg-orange-500" type="radio" name="options" aria-label="Update" /></Link>
                            <button onClick={() => handleDelele(_id)} className="join-item btn bg-red-500" type="radio" name="options" aria-label="Delete">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCard;