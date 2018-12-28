import React from 'react';
// import PropTypes from 'prop-types';
import News from './News';
import '../style/News.css';

// propTypes = {
//     articles: PropTypes.object.isRequired,
// };

const NewsList = ({ articles }) => {
    const newsArray = articles.map(article => (
        <News
            key={article.title}
            title={article.title}
            content={article.content}
            url={article.url}
            urlToImage={article.urlToImage}
            time={article.publishedAt}
        />
    ));

    return (
        <div className="newsList-wrapper">
            {newsArray}
        </div>
    );
};

export default NewsList;
