import '../app/styles/base.css';

import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import HomePage from '../app/components/HomePage';
import Root from '../app/components/Root';
import configureStore from '../app/utils/configureStore';

const store = configureStore(window.INITIAL_STATE);
window.store = store;

hydrate(
	<Provider store={store}>
		<Root>
			<HomePage />
		</Root>
	</Provider>,
	document.getElementById('app-root'),
);
