import React from 'react';
import PropTypes from 'prop-types';
import '../style/SearchBox.css';

export default class SearchBox extends React.PureComponent {
    static propTypes = {
        searchChange: PropTypes.func.isRequired,
    }

    render() {
        const { searchChange } = this.props;
        return (
            (
                <div className="searchBox">
                    <input
                        className="ba b--green bg-lightest-blue input"
                        type="search"
                        placeholder="search news"
                        onChange={searchChange}
                    />
                </div>
            )
        );
    }
}
