import React from 'react';
import './Navbar.scss';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	const [menuHidden, setMenuHidden] = React.useState(true);
	return (
		<nav className="bg-white shadow">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex">
						<div className="flex-shrink-0 flex items-center">
							<Link to="/">
								<img
									className="block lg:hidden h-8 w-auto"
									src={require('./mobile-logo.svg')}
									alt="Can I Afford logo"
								/>
								<img
									className="hidden lg:block h-8 w-auto"
									src={require('./logo.svg')}
									alt="Can I Afford logo"
								/>
							</Link>
						</div>
						<div className="hidden sm:ml-6 sm:flex">
							<NavLink
								exact
								activeClassName="border-teal-500"
								to="/"
								className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out"
							>
								Home
							</NavLink>
							<NavLink
								exact
								activeClassName="border-teal-500"
								to="/blog"
								className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out"
							>
								Blog
							</NavLink>
						</div>
					</div>
					<div className="-mr-2 flex items-center sm:hidden">
						<button
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
							aria-label="Main menu"
							aria-expanded="false"
							onClick={() => setMenuHidden(!menuHidden)}
						>
							<svg
								className="block h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
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
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			<div className={`${menuHidden && 'hidden'} sm:hidden`}>
				<div className="pt-2 pb-3">
					<NavLink
						to="/"
						onClick={() => setMenuHidden(!menuHidden)}
						className="block pl-3 pr-4 py-2 border-l-4 border-teal-500 text-base font-medium text-teal-700 bg-teal-50 focus:outline-none focus:text-teal-800 focus:bg-teal-100 focus:border-teal-700 transition duration-150 ease-in-out"
					>
						Home
					</NavLink>
					<NavLink
						to="/blog"
						onClick={() => setMenuHidden(!menuHidden)}
						className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
					>
						Blog
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
