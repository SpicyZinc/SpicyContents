import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const loggerMiddleware = createLogger({
	predicate: () => process.env.NODE_ENV === 'development'
});

const configureStore = (initialState = {}) => {
	const enhancers = [ applyMiddleware(thunk, loggerMiddleware) ];
	const store = createStore(reducers, initialState, compose(...enhancers));
	
	return store;
};

const store = configureStore();

export default store;


// const reducers = combineReducers({
// 	routing: routerReducer,
// 	form: formReducer,
// 	c: cReducer
// });

// const store = createStore(reducers, initialState, applyMiddleware());