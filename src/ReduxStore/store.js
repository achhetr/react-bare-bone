import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import auth from './reducers/auth';

const rootReducers = combineReducers({
	auth,
});

export default createStore(rootReducers, applyMiddleware(thunk));
