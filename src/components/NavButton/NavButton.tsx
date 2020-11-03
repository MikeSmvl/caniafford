import React from 'react';
import { NavLink } from 'react-router-dom';
import * as constants from 'utils/constants.json';
import { useHistory } from 'react-router-dom';

interface Article {
	title: string;
	author: string;
	date: string;
	blogNumber: number;
	newest?: boolean;
}

interface INavButtonProps {
	type: string;
	articles: Article[];
}

const NavButton = (props: INavButtonProps) => {
	const { type, articles } = props;

	const [nextDisabled, setNextDisabled] = React.useState(false);
	const [nextPage, setNextPage] = React.useState('/blog');
	const [prevDisabled, setPrevDisabled] = React.useState(false);
	const [prevPage, setPrevPage] = React.useState('/blog');

	const history = useHistory();

	const handleClick = (e: any) => {
		if (type === 'next' && nextDisabled) e.preventDefault();
		if (type === 'prev' && prevDisabled) e.preventDefault();
	};

	const findMaxBlogNumber = React.useCallback(() => {
		let maxBlogNumber = 0;
		for (const article of articles) {
			if (article.blogNumber > maxBlogNumber) {
				maxBlogNumber = article.blogNumber;
			}
		}
		return maxBlogNumber;
	}, [articles]);

	const findNewestBlog = React.useCallback(() => {
		for (const article of articles) {
			if (article.newest) {
				return true;
			}
		}
		return false;
	}, [articles]);

	const handlePagination = () => {
		switch (type) {
			case 'next':
				return nextPage;
			case 'prev':
				return prevPage;
			default:
				return nextPage;
		}
	};

	React.useEffect(() => {
		const maxBlogNumber = findMaxBlogNumber();
		if (type === 'next') {
			setNextDisabled(false);
			const limitToLast = parseInt(constants.blog.params.limitToLast);
			const endAt = maxBlogNumber - limitToLast;
			if (typeof endAt === 'number' && Math.sign(endAt) === -1) {
				setNextDisabled(true);
			}
			const startAt =
				Math.sign(endAt - limitToLast) === -1 ? 0 : endAt - limitToLast;
			setNextPage(`/blog?startAt=${startAt}&endAt=${endAt}`);
		}

		if (type === 'prev') {
			setPrevDisabled(false);
			const urlParams = new URLSearchParams(window.location.search);
			const endAt = urlParams.get('endAt');
			if (endAt && findNewestBlog()) {
				history.replace('/blog');
			}
			if (
				endAt &&
				maxBlogNumber + parseInt(constants.blog.params.limitToLast) <
					parseInt(endAt) + parseInt(constants.blog.params.limitToLast)
			) {
				setPrevDisabled(true);
			}
			if (endAt) {
				setPrevPage(
					`/blog?endAt=${
						parseInt(endAt) + parseInt(constants.blog.params.limitToLast)
					}`
				);
			} else {
				setPrevDisabled(true);
			}
		}
	}, [type, findMaxBlogNumber, findNewestBlog, history]);

	let className;
	switch (type) {
		case 'next':
			className =
				'col-start-3 col-span-1 justify-center -ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150';
			if (nextDisabled) {
				className += ' cursor-not-allowed';
			}
			break;
		case 'prev':
			className =
				'col-start-2 col-span-1 justify-center relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150';
			if (prevDisabled) {
				className += ' cursor-not-allowed';
			}
			break;
		default:
			className = '';
	}

	return (
		<NavLink className={className} to={handlePagination} onClick={handleClick}>
			{type === 'prev' && (
				<svg
					className="h-5 w-5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			)}
			{type === 'next' && (
				<svg
					className="h-5 w-5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			)}
		</NavLink>
	);
};

export default NavButton;
