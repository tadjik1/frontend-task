import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

function campaignsReducer(state = {}, action) {
  return state;
}

function productsReducer(state = {}, action) {
  return state;
}

function categoriesReducer(state = {}, action) {
  return state;
}

export const reducer = combineReducers({
  campaigns: campaignsReducer,
  products: productsReducer,
  categories: categoriesReducer,
});

export default createStore(reducer, applyMiddleware(thunk, logger));
