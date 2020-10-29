import React from 'react';
import './ArticleMetadata.scss';

interface ArticleMetadata {
    title: string;
    author: string;
    date: string;
}

interface IArticleMetadataProps {
    article?: ArticleMetadata;
}

const ArticleMetadata = (props: IArticleMetadataProps) => {
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
                        href={
                            article &&
                            '/blog/' + encodeURIComponent(article.title)
                        }
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
                                                className="svg-icon"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fill="none"
                                                    d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"
                                                ></path>
                                                <path
                                                    fill="none"
                                                    d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"
                                                ></path>
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
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
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

export default ArticleMetadata;
