import keymirror from './keymirror';

const ACTION_TYPE = keymirror({
    CHANGE_SEARCH_FIELD: null,
    REQUEST_NEWS_PENDING: null,
    REQUEST_NEWS_SUCCESS: null,
    REQUEST_NEWS_FAILED: null,
    SORT_NEWS: null,
});

export default ACTION_TYPE;

export const setSearchField = text => ({
    type: ACTION_TYPE.CHANGE_SEARCH_FIELD,
    payload: text,
}); // return object

export const requestNews = () => (dispatch) => {
    const country = 'us';
    const apiKey = '3c175cefc17b4f5cae396104e95ccac8';

    dispatch({ type: ACTION_TYPE.REQUEST_NEWS_PENDING });
    // const apiObj = {
    //     method: 'GET',
    //     body: {
    //         country,
    //         apiKey,
    //     },
    // };
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => dispatch({ type: ACTION_TYPE.REQUEST_NEWS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: ACTION_TYPE.REQUEST_NEWS_FAILED, payload: error }));
};

export const sortNews = () => ({
    type: ACTION_TYPE.SORT_NEWS,
});
