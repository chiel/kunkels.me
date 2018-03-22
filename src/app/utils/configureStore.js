import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import epic from '../epics';
import reducer from '../reducers';
import api from '../utils/api';

export default function configureStore(initialState) {
	const middleware = applyMiddleware(
		createEpicMiddleware(epic, {
			dependencies: { api },
		}),
	);

	return createStore(reducer, initialState, middleware);
}
