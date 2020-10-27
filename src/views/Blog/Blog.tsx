import React from 'react';
import './Blog.scss';
import * as constants from 'utils/constants.json';
import Article from 'components/Article/Article';

const createQueryParams = (params: any) => {
    return Object.keys(params)
        .map((k) => `${k}=${encodeURI(params[k])}`)
        .join('&');
};

function Blog() {
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
            setArticles(arrayData);
        });
    }, []);

    return (
        <div id="Blog">
            <div className="pb-5 border-b border-black-200 py-12">
                <h3 className="text-3xl leading-6 font-medium text-gray-900">
                    Articles
                </h3>
            </div>
            <div id="Blog-Articles" className="space-y-6">
                {articles.length > 0 &&
                    articles.map((article: any) => (
                        <Article
                            key={article.constructor.name}
                            article={article}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Blog;
