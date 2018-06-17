import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const history = createBrowserHistory();

const initialState = {};
const middleware = [thunk, routerMiddleware(history)];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composeEnhancer(applyMiddleware(...middleware))
);