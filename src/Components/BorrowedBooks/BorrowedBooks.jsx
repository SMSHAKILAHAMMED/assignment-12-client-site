
const BorrowedBooks = () => {
   
    return (
        <div className="bg-[#F4F3F0] p-24 ">
            <h2 className="text-5xl font-extrabold text-center text-black  mb-5">Return Books</h2>
            <form>
                {/* form name and Borrowed Date  row */}
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
                            <span className="label-text">Return Date :</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="return_date" 
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and Return Date row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label
                            className="block mt-3 rounded-xl dark:text-white"
                            htmlFor="country"
                        >
                            Category :
                        </label>
                        <select
                            name="category"
                            id="country"
                            className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                            type="text"

                            placeholder="category_name"
                        >
                            <option value="Card Making" selected>
                               Islami
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
                            Novel Books

                            </option>
                            <option value="Glass Dying & Staining" selected>
                            All Categorys
                            </option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> Time :</span>
                        </label>
                        <label className="input-group">
                            <input type="time" name="time" 
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form image-url row */}
                <div className="md:flex gap-4 mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo URL :</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Photo" placeholder="Photo"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <input type="submit" value="Add Book From" className="btn btn-block text-xl bg-black text-white" />
            </form>
        </div>
    );
};

export default BorrowedBooks;