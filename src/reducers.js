import { combineReducers } from 'redux';
import ACTION_TYPE from './actions';

const initialStateSearch = {
    searchField: '',
};

export const searchNews = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
    case ACTION_TYPE.CHANGE_SEARCH_FIELD:
        return { ...state, searchField: action.payload };
    default:
        return state;
    }
};

const initialStateNews = {
    isPending: false,
    news: [],
    error: '',
};

export const requestNews = (state = initialStateNews, action = {}) => {
    switch (action.type) {
    case ACTION_TYPE.REQUEST_NEWS_PENDING:
        return { ...state, isPending: true };
    case ACTION_TYPE.REQUEST_NEWS_SUCCESS:
        return { ...state, news: action.payload, isPending: false };
    case ACTION_TYPE.REQUEST_NEWS_FAILED:
        return { ...state, error: action.payload, isPending: false };
    default:
        return state;
    }
};


export default combineReducers({ searchNews, requestNews });
