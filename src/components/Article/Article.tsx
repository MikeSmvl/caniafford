import React from 'react';
import './Article.scss';

interface Article {
    title?: string;
    author?: string;
    date?: string;
}

interface IArticleProps {
    article?: Article;
}

const Article = (props: IArticleProps) => {
    const { article } = props;

    const createRandomSize = () => {
        let randomSize = Math.round((Math.random() + 0.5) * 100).toString();
        return randomSize + 'x' + randomSize;
    };

    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul>
                <li>
                    <a
                        href="/"
                        className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                    >
                        <div className="flex items-center px-4 py-4 sm:px-6">
                            <div className="min-w-0 flex-1 flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-20 w-20"
                                        src={
                                            'https://source.unsplash.com/random/' +
                                            createRandomSize()
                                        }
                                        alt=""
                                    />
                                </div>
                                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                    <div>
                                        <div className="text-xl leading-5 font-medium text-gray-900 truncate">
                                            {article && article.title}
                                        </div>
                                        <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                                            <svg
                                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                            <span className="truncate">
                                                {article && article.author}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div>
                                            <div className="text-sm leading-5 text-gray-900 flex justify-center">
                                                <time>
                                                    {article &&
                                                        article.date &&
                                                        new Date(
                                                            article.date
                                                        ).toLocaleDateString(
                                                            'en-US',
                                                            {
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric',
                                                            }
                                                        )}
                                                </time>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <svg
                                    className="h-5 w-5 text-gray-400"
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
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Article;
