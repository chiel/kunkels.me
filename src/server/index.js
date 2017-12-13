import express from 'express';

import renderDocument from './utils/renderDocument';

const app = express();

app.get('/', (req, res) => {
	const body = renderDocument('Hello world.');
	res.send(body);
});

const port = process.env.PORT || 14728;
app.listen(port, () => {
	console.info(`Listening on port ${port}`);
});
