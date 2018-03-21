import './utils/cssLoader';

import express from 'express';
import React from 'react';

import articles from './articles';
import renderDocument from './utils/renderDocument';

import HomePage from '../app/components/HomePage';
import Root from '../app/components/Root';

const app = express();
app.disable('x-powered-by');

app.use(express.static(`${__dirname}/../public`));

app.get('/api/articles', (req, res) => {
	const out = [...articles]
		.map(({ date, excerpt, image, slug, tags, title }) => ({
			excerpt,
			image,
			slug,
			tags,
			title,
			date: date || new Date(),
		}))
		.sort((a, b) => {
			if (a.date.getTime() === b.date.getTime()) {
				return 0;
			}

			return a.date > b.date ? -1 : 1;
		})
		.slice(0, 3);

	res.json(out);
});

app.get('/api/articles/:slug', (req, res) => {
	const article = articles.find(art => art.slug === req.params.slug);
	res.json(article);
});

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
