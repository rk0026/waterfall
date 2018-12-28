import React from 'react';
import PropTypes from 'prop-types';
import '../style/News.css';

function alerttion(e) {
    e.preventDefault();
    console.warn(e);
}

function handleClick(url) {
    window.location.href = url;
}

const getTime = (time) => {
    const [date, timing] = time.split('T');
    const [year, month, day] = date.split('-');
    return `${year}年${month}月${day}號${timing.substr(0, timing.length - 1)}`;
};

const News = ({ title, content, url, urlToImage, time }) => (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s news-wrapper">
        <button className="bg-light-green news-button" type="button" onClick={() => handleClick(url)}>
            <img className="image" alt={title} src={urlToImage} />
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
                <p>{getTime(time)}</p>
            </div>
        </button>
    </div>
);

News.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};
// src={`https://robohash.org/${id}?200*200`} >> ES6 expression
export default News;
