import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import './Article.scss';

const H2 = ({ children, ...props }: any) => {
    // console.log(children);
    return <h1>{children[0]}</h1>;
};

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
                <Markdown
                    id="Markdown"
                    children={markdown.md}
                    options={{
                        overrides: {
                            h2: {
                                component: H2,
                                props: {
                                    className: 'foo',
                                },
                            },
                        },
                    }}
                />
            )}
        </div>
    );
};
export default Article;
