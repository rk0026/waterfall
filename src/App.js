import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import PropTypes from 'prop-types';
import SearchBox from './components/SearchBox';
import { setSearchField, requestNews } from './actions';
import NewsList from './components/NewsList';

const mapStateToProps = state => ({
    searchField: state.searchNews.searchField,
    news: state.requestNews.news,
    isPending: state.requestNews.isPending,
    error: state.requestNews.error,
});

const mapDispatchToProps = dispatch => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestNews: () => dispatch(requestNews()),
});

class App extends Component {
    static propTypes = {
        onRequestNews: PropTypes.func.isRequired,
        searchField: PropTypes.string.isRequired,
        news: PropTypes.object.isRequired,
        isPending: PropTypes.bool.isRequired,
        //   error: PropTypes.string.isRequired,
        onSearchChange: PropTypes.func.isRequired,
    }

    state = {
        sortBy: '',
    }

    componentDidMount() {
        this.props.onRequestNews();
    }

    handleSortByAlpha = () => {
        this.setState({ sortBy: 'alpha' });
    }

    handleSortByTime = () => {
        this.setState({ sortBy: 'time' });
    }

    newsSort = (filteredNews) => {
        if (filteredNews) {
            switch (this.state.sortBy) {
            case 'alpha':
                return filteredNews.sort((a, b) => {
                    const nameA = a.title.toUpperCase(); // ignore upper and lowercase
                    const nameB = b.title.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                });
            case 'time':
                return filteredNews.sort((a, b) => b.publishedAt - a.publishedAt);
            default:
                return filteredNews;
            }
        }
        return null;
    }

    render() {
        const { searchField, onSearchChange, isPending, news } = this.props;
        const { articles } = news;
        let filteredNews;
        if (articles) {
            filteredNews = articles.filter(aNew => aNew.title.toLowerCase().includes(searchField.toLowerCase()));
            filteredNews = this.newsSort(filteredNews);
        }

        return isPending
            ? <h1>loading</h1>
            : (
                <div className="App">
                    <header className="App-header">
                        <div className="">Waterfall Practice</div>
                        <SearchBox
                            searchChange={onSearchChange}
                        />
                        <button
                            className="sort-button"
                            type="button"
                            onClick={() => this.handleSortByAlpha()}
                        >sort by alphabetical order
                        </button>
                        <button
                            className="sort-button"
                            type="button"
                            onClick={() => this.handleSortByTime()}
                        >sort by time order
                        </button>
                    </header>
                    <div className="news-container">
                        {articles ? <NewsList articles={filteredNews} /> : null}
                    </div>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
