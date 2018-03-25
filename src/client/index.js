import '../app/styles/base.css';

import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';

import routes from '../app/routes';
import configureStore from '../app/utils/configureStore';

const store = configureStore(window.INITIAL_STATE);
window.store = store;

hydrate(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app-root'),
);
