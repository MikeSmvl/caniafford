import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                className="block lg:hidden h-8 w-auto"
                                src={require('./mobile-logo.svg')}
                                alt="Housing Strategy logo"
                            />
                            <img
                                className="hidden lg:block h-8 w-auto"
                                src={require('./logo.svg')}
                                alt="Housing Strategy logo"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:flex">
                            <a
                                href="/"
                                className="inline-flex items-center px-1 pt-1 border-b-2 border-teal-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-teal-700 transition duration-150 ease-in-out"
                            >
                                Calculator
                            </a>
                            <button className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 opacity-50 cursor-not-allowed">
                                Blog
                            </button>
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            aria-label="Main menu"
                            aria-expanded="false"
                        >
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className="hidden h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="hidden sm:hidden">
                <div className="pt-2 pb-3">
                    <a
                        href="/"
                        className="block pl-3 pr-4 py-2 border-l-4 border-teal-500 text-base font-medium text-teal-700 bg-teal-50 focus:outline-none focus:text-teal-800 focus:bg-teal-100 focus:border-teal-700 transition duration-150 ease-in-out"
                    >
                        Dashboard
                    </a>
                    <a
                        href="/"
                        className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                    >
                        Team
                    </a>
                    <a
                        href="/"
                        className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                    >
                        Projects
                    </a>
                    <a
                        href="/"
                        className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                    >
                        Calendar
                    </a>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                    <div className="flex items-center px-4">
                        <div className="flex-shrink-0">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium leading-6 text-gray-800">
                                Tom Cook
                            </div>
                            <div className="text-sm font-medium leading-5 text-gray-500">
                                tom@example.com
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <a
                            href="/"
                            className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                        >
                            Your Profile
                        </a>
                        <a
                            href="/"
                            className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                        >
                            Settings
                        </a>
                        <a
                            href="/"
                            className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                        >
                            Sign out
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
