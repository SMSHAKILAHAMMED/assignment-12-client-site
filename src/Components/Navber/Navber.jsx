import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";


const Navber = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)

    }, [theme])

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('synthwave')
        } else {
            setTheme('light')
        }
    }
    console.log(theme);

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }


    const links = <>
        <li className="btn bg-neutral-100 border-2 border-purple-500 lg:ml-20 text-black font-bold rounded-box"><NavLink className={({ isActive }) =>
            isActive ? 'text-primary font-bold' : 'font-bold'} to="/">Home</NavLink></li>
        <li className="btn btn-primary bg-neutral-100 text-black font-bold rounded-box"><NavLink to="/allBooks">All Books</NavLink></li>
        <li className="btn btn-secondary bg-gray-100 text-black font-bold rounded-box"><NavLink to="/borrowedBooks">Borrowed Books</NavLink></li>
        <li className="btn btn-error bg-slate-100 text-black font-bold lg:ml-20 rounded-box"><NavLink to="/addbook">Add Book</NavLink></li>
        <li className="btn btn-warning bg-neutral-100 text-black  font-bold rounded-box"><NavLink to="/gallary">Gallary</NavLink></li>

    </>

    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu-sm gap-3 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                        <div className="lg:flex gap-1">
                            <img className="w-16 bg-white rounded-full" src="https://i.ibb.co/7Chj4HV/book-shop-store-logo-removebg-preview.png" alt="" />
                            <span className="text-primary mt-4">Book<span className="text-success">-</span><span className="text-error">Library</span></span>
                        </div>
                    </span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal gap-3 px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-1">
                <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div title={user?.displayName} className='w-10 rounded-full'>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />

                            </div>

                        </div>
                        <ul

                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36'
                        >
                            <li>
                                <h1 className={({ isActive }) =>
                                    isActive ? 'text-primary font-bold' : 'font-bold'

                                } to='/addVolunteer' >
                                  Update profile
                                </h1 >
                            </li>
                            <li>
                                <h2 className={({ isActive }) =>
                                    isActive ? 'text-primary font-bold' : 'font-bold'

                                } to='/managePost'>Manage my post</h2>
                            </li>
                        </ul>
                    </div>

                {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user && <img alt="Tailwind CSS Navbar component " src={user.photoURL} />

                            }
                        </div>
                    </div> */}
                {
                    user ?
                        <button onClick={handleLogOut} href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                            <span className="relative p-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                <span className="relative text-white">LogOut</span>
                            </span>
                        </button>
                        :
                        <Link to="/login">
                            <button href="#_" className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-error rounded-lg hover:bg-white group">
                                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-black rounded-full"></span>
                                <span className="relative w-full text-left transition-colors text-black duration-200 ease-in-out group-hover:text-white">Login</span>
                            </button>
                        </Link>

                }
                <label className='cursor-pointer grid place-items-center'>
                    <input
                        onChange={handleToggle}
                        type='checkbox'
                        className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
                    />
                    <svg
                        className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <circle cx='12' cy='12' r='5' />
                        <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
                    </svg>
                    <svg
                        className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
                    </svg>
                </label>

            </div>

        </div>
        </div >
    );
};

export default Navber;