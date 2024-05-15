
import { Link } from "react-router-dom";


const BookCard = ({ books }) => {

    const { _id, name, quantity, rating, category, description, author, image } = books;
    return (
        <div>
            <div className="card card-side bg-base-100 hover:scale-105 border-2 shadow-lg">
                <figure><img className="ml-5 p-2 h-96 w-72 " src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-extrabold">Book Name : {name}</h2>
                    <div className="flex justify-between items-center gap-1">
                        <p className="text-lg font-medium"> Quantity : {quantity}</p>
                        <a className="text-lg font-medium"> Rating : {rating}</a>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                        </div>     
                    </div>
                    <h2 className="text-xl font-mediam"> Category : {category}</h2>
                    <p className="font-light"> Description : {description}</p>
                    <h1 className="card-title font-bold"> Author Name : {author}</h1>
                    <div className="join card-actions justify-end mt-2">
                        <Link to={`/viewDetails/${_id}`}><input className="join-item btn bg-fuchsia-500" type="radio" name="options" aria-label="View" /></Link>
                        <Link to={`/updateCard/${_id}`}><input className="join-item btn bg-sky-500" type="radio" name="options" aria-label="Update" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;