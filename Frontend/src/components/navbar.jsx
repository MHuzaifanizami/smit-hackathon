import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

    // Toggle function for mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-blue-600 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">
                    <Link to="/">Logo</Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="sm:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Tabs (for medium and larger screens) */}
                <div className="hidden sm:flex space-x-6 text-white text-lg">
                    <Link to="/" className="hover:text-gray-200">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-gray-200">
                        About
                    </Link>
                    <Link to="/contact" className="hover:text-gray-200">
                        Contact
                    </Link>
                </div>

                {/* Auth Buttons (for medium and larger screens) */}
                <div className="hidden sm:flex space-x-4">
                    <Link to={"/signup"}>
                        <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200">
                            Sign Up
                        </button>
                    </Link>
                    <Link to={"/login"}>
                        <button className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-600">
                            Log In
                        </button>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu (only visible when menu is open on mobile) */}
            <div
                className={`${isMenuOpen ? "block" : "hidden"
                    } sm:hidden bg-blue-600 text-white space-y-4 p-4`}
            >
                <Link to="/" className="block hover:text-gray-200">
                    Home
                </Link>
                <Link to="/about" className="block hover:text-gray-200">
                    About
                </Link>
                <Link to="/contact" className="block hover:text-gray-200">
                    Contact
                </Link>
                <div className="flex space-x-4">
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200">
                        Sign Up
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-600">
                        Log In
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
