import './utils/cssLoader';

import express from 'express';
import React from 'react';

import renderDocument from './utils/renderDocument';

import HomePage from '../app/components/HomePage';
import Root from '../app/components/Root';

const app = express();
app.disable('x-powered-by');

app.use(express.static(`${__dirname}/../public`));

app.get('/', (req, res) => {
	const body = renderDocument(
		<Root>
			<HomePage />
		</Root>,
	);
	res.send(body);
});

const port = process.env.PORT || 14728;
app.listen(port, () => {
	console.info(`Listening on port ${port}`);
});
