import React from 'react';
import './Blog.scss';
import * as constants from 'utils/constants.json';
import ArticleMetadata from 'components/ArticleMetadata/ArticleMetadata';
import NavButton from 'components/NavButton/NavButton';
import { useLocation, useHistory } from 'react-router-dom';

const createQueryParams = (params: any) => {
	return Object.keys(params)
		.map((k) => `${k}=${encodeURI(params[k])}`)
		.join('&');
};

interface Article {
	title: string;
	author: string;
	date: string;
	blogNumber: number;
}
const Blog = () => {
	const [articles, setArticles] = React.useState<Article[]>([]);
	const history = useHistory();
	const location = useLocation();

	React.useEffect(() => {
		const getData = async () => {
			try {
				const urlParams = new URLSearchParams(location.search);
				const startAt = urlParams.get('startAt');
				const endAt = urlParams.get('endAt');
				let url = constants.blog.url + createQueryParams(constants.blog.params);
				if (startAt && endAt) {
					url +=
						'&' +
						createQueryParams({
							startAt: parseInt(startAt),
							endAt: parseInt(endAt),
						});
				}
				const response = await fetch(url);
				if (response.status === 200) {
					return response.json();
				}
				console.log(response);
				history.push('/404');
			} catch (err) {
				console.log(err);
				history.push('/404');
			}
		};
		getData().then((data) => {
			if (!data || data === null) {
				history.push('/404');
				return;
			}
			let arrayData: any = Object.keys(data).map((key) => {
				return data[key];
			});
			arrayData.sort(function (a: Article, b: Article) {
				// Turn your strings into dates, and then subtract them
				// to get a value that is either negative, positive, or zero.
				if (typeof a.date === 'string' && typeof b.date === 'string') {
					return new Date(b.date).getTime() - new Date(a.date).getTime();
				}
				return null;
			});
			setArticles(arrayData);
		});
	}, [location, history]);

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
				{articles.length > 0 && (
					<div className="grid grid-cols-4">
						<NavButton type="prev" articles={articles} />
						<NavButton type="next" articles={articles} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Blog;
