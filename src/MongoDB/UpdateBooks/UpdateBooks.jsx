import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBooks = () => {
    const books = useLoaderData();
    console.log(books)
    const handleUpdateBook = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const description = form.description.value;
        const author = form.author.value;
        const image = form.image.value;
        const updateBook = { name, quantity, rating, category, description, author, image };
        console.log(updateBook);

        fetch(`https://assignment-11-seven-beta.vercel.app/book/${books._id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateBook),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Book Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                console.log(data);
            })
            .catch((data) => {
                console.log(data);
               
            });
    }

    return (
        <div className="bg-[#F4F3F0] p-24 ">
            <h2 className="text-5xl font-extrabold text-center text-violet-600  mb-5">Update Book Now :</h2>
            <p className="text-center mb-10">Update: To make changes to a published book. <br /> Some changes can be made directly to the published version on your bookshelf. Other changes require you to <br /> publish a new edition of your book.</p>
            <form onSubmit={handleUpdateBook}>
                {/* form name and quantity  row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Book Name :</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="book_name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Quantity of the book :</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="quantity"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form author & description row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Author Name :
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="author" placeholder="author_name
"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Short Description :</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="short_description"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* form category and rating row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label
                            className="block mt-3 rounded-xl dark:text-white"
                            htmlFor="country"
                        >
                            Category Name :
                        </label>
                        <select
                            name="category"
                            id="country"
                            className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                            type="text"

                            placeholder="category_name"
                        >
                            <option value="Card Making" selected>
                                Islamic Book
                            </option>
                            <option value="Scrapbooking" selected>
                                Thriller Book
                            </option>
                            <option value="Paper Quilling & origami" selected>
                                History Book
                            </option>
                            <option value="Glass Painting" selected>
                                Drama Book
                            </option>
                            <option value="Lampworking" selected>
                                Sci-Fi Book

                            </option>
                            <option value="Glass Dying & Staining" selected>
                                Novel Books
                            </option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> Rating :</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="rating"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form image-url row */}
                <div className="md:flex gap-4 mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Image URL :</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="image"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <input type="submit" value="Update Book" className="btn btn-block text-xl bg-black text-white" />
            </form>
        </div>
    );
};

export default UpdateBooks;