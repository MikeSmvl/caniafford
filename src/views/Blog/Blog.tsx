import React from 'react';
import './Blog.scss';
import * as constants from 'utils/constants.json';
import ArticleMetadata from 'components/ArticleMetadata/ArticleMetadata';

const createQueryParams = (params: any) => {
	return Object.keys(params)
		.map((k) => `${k}=${encodeURI(params[k])}`)
		.join('&');
};

interface Article {
	title?: string;
	author?: string;
	date?: string;
}

const Blog = () => {
	const [articles, setArticles] = React.useState([]);
	React.useEffect(() => {
		const getData = async () => {
			const response = await fetch(
				constants.blog.url + createQueryParams(constants.blog.params)
			);
			return response.json();
		};
		getData().then((data) => {
			let arrayData: any = Object.keys(data).map((key) => {
				return data[key];
			});
			arrayData.sort(function (a: Article, b: Article) {
				// Turn your strings into dates, and then subtract them
				// to get a value that is either negative, positive, or zero.
				if (typeof a.date == 'string' && typeof b.date == 'string') {
					return new Date(b.date).getTime() - new Date(a.date).getTime();
				}
				return null;
			});
			setArticles(arrayData);
		});
	}, []);

	return (
		<div className="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-4">
			<div
				id="Blog"
				className="col-span-3 md:col-start-2 md:col-span-4 xl:col-start-2 xl:col-span-2"
			>
				<div className="pb-5 border-b border-black-200 py-12">
					<h3 className="text-3xl leading-6 font-medium text-gray-900">
						Articles
					</h3>
				</div>
				<div id="Blog-Articles" className="space-y-6">
					{articles.length > 0 &&
						articles.map((article: any) => (
							<ArticleMetadata key={article.title} article={article} />
						))}
				</div>
			</div>
		</div>
	);
};

export default Blog;
