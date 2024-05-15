import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Roots from "../../Roots/Roots";


const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <Marquee className="container mx-auto mt-10 text-black bg-purple-300 border border-violet-600 p-3">
                    <Link to="/"> A library management system is software that is designed to manage all the functions of a library. It helps librarian to maintain the database of new books and the books that are borrowed by members along with their due dates. This system completely automates all your library is activities.</Link>
                </Marquee>
            </div>
            <Roots></Roots>

            <div>
                <div>
                    <div className="p-6 py-12 mt-20 dark:bg-violet-600 dark:text-gray-50">
                        <div className="container mx-auto">
                            <h1 className="text-3xl text-center font-bold"> Book Sales : </h1>
                            <p className="text-center mb-10">If they continue like that i think people must like them and <br /> there percale, there memo, there book packing style is perfect and they sell very reasonable ...</p>
                            <div className="flex flex-col lg:flex-row border-2 p-10 items-center justify-between">
                                <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                                    <br className="sm:hidden" /> 30% Off
                                </h2>
                                <div className="space-x-2 text-center py-2 lg:py-0">
                                    <span>Discount Coupon code:</span>
                                    <span className="font-bold text-lg">Book Store</span>
                                </div>
                                <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
                        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                            <img src="https://i.ibb.co/1824T2X/istockphoto-1222563369-2048x2048.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                            <div className="p-4  border-2 bg-slate-200 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                                <div className="space-y-2">
                                    <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Book Store in Bangladesh</a>
                                    <p className="text-xs dark:text-gray-600">Proprietor By :
                                        <a rel="noopener noreferrer" href="#" className="text-xs hover:underline"> SM SHAKIL</a>
                                    </p>
                                </div>
                                <div className="dark:text-gray-800">
                                    <p>Insert the actual text content here...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
                    <div className="container mx-auto space-y-12">
                        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co/bbgB4G6/Book-store.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                                <span className="text-xs uppercase dark:text-gray-600">SM Book Library</span>
                                <h3 className="text-3xl font-bold">Book Shop</h3>
                                <p className="my-6 dark:text-gray-600">The bookshop is closed on Mondays. Incorrect: The book shop is closed on Mondays. Incorrect: The book-shop is closed on Mondays.</p>
                                <button type="button" className="btn btn-primary self-start">Click Now</button>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                            <img src="https://i.ibb.co/YDpkJgD/Screenshot-2024-05-11-051224.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                                <span className="text-xs uppercase dark:text-gray-600">SM Book Library</span>
                                <h3 className="text-3xl font-bold">Book Store</h3>
                                <p className="my-6 dark:text-gray-600">Daraz BD is Bangladesh is largest online book store and online book shop offering a wide range of books and magazines at affordable prices. With our user ...</p>
                                <button type="button" className="btn btn-primary self-start">Click Now</button>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co/FWVV2Cy/WHAT-IS-THE-PURPOSE-OF-A-LIBRARY-MANAGEMENT-SYSTEM-min.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                                <span className="text-xs uppercase dark:text-gray-600">SM Book Library</span>
                                <h3 className="text-3xl font-bold">Books Library</h3>
                                <p className="my-6 dark:text-gray-600">Open Library is an open, editable library catalog, building towards a web page for every book ever published. Read, borrow, and discover more than 3M books ...</p>
                                <button type="button" className="btn btn-primary self-start">Click Now</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Home;