import Swal from 'sweetalert2'
const AddBook = () => {
    const handleAddBook = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const quantity = event.target.quantity.value;
        const rating = event.target.rating.value;
        const category = event.target.category.value;
        const description = event.target.description.value;
        const author = event.target.author.value;
        const image = event.target.image.value;

        const newBook = { name, quantity, rating, category, description, author, image };
        console.log(newBook);

        //send data to server
        fetch("https://assignment-11-seven-beta.vercel.app/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User added successfully',
                        showConfirmButton: 'cool',
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24 ">
            <h2 className="text-5xl font-extrabold text-center text-black  mb-5">Add Book Now</h2>
            <p className="text-center mb-10">Goodreads Librarians are volunteers who help ensure the <br /> accuracy of information about books and authors in the Goodreads catalog. The Goodreads Librarians Group <br /> is the official group for requesting additions or updates to the Goodreads catalog.</p>
            <form onSubmit={handleAddBook}>
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
                                Fantasy
                            </option>
                            <option value="Scrapbooking" selected>
                                Thriller
                            </option>
                            <option value="Paper Quilling & origami" selected>
                                History
                            </option>
                            <option value="Glass Painting" selected>
                                Drama
                            </option>
                            <option value="Lampworking" selected>
                                Sci-Fi

                            </option>
                            <option value="Glass Dying & Staining" selected>
                                Novel Books
                            </option>
                            <option value="Glass Dying & Staining" selected>
                                All Categorys
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

                <input type="submit" value="Add Book" className="btn btn-block text-xl bg-black text-white" />
            </form>
        </div>
    );
};

export default AddBook;