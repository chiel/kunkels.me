import '../app/styles/base.css';

import React from 'react';
import { hydrate } from 'react-dom';

import HomePage from '../app/components/HomePage';
import Root from '../app/components/Root';

hydrate(
	<Root>
		<HomePage />
	</Root>,
	document.getElementById('app-root'),
);
