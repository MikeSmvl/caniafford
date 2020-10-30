import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import './Article.scss';

interface ParamTypes {
	article: string;
}

const Article = () => {
	const history = useHistory();
	let { article } = useParams<ParamTypes>();
	const [markdown, setMarkdown] = React.useState({ md: '' });

	React.useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(
					`https://housingstrategy.firebaseio.com/home/blog/markdown/${article}.json`,
					{ method: 'GET' }
				);
				return response.json();
			} catch (err) {
				console.log(err);
			}
		};
		getData().then((data) => {
			if (!data) {
				history.push('/404');
			}
			setMarkdown(data);
		});
	}, [article, history]);

	return (
		<div id="Article">
			{markdown && markdown.md && (
				<div id="Markdown">
					<h1 id="Title">{decodeURIComponent(article)}</h1>
					<Markdown
						className="space-y-8"
						children={markdown.md}
						options={{
							overrides: {
								h2: {
									props: {
										className: 'sub-title',
									},
								},
								a: {
									props: {
										className: 'blog-post-anchor',
									},
								},
							},
						}}
					/>
				</div>
			)}
		</div>
	);
};
export default Article;
