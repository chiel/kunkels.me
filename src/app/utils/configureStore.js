import { createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import reducer from '../reducers';

export default function configureStore(initialState) {
	return createStore(reducer, initialState);
}
