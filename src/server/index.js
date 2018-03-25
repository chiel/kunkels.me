import './utils/cssLoader';

import express from 'express';
import React from 'react';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';

import articles from './articles';
import createStoreMiddleware from './utils/createStoreMiddleware';
import renderDocument from './utils/renderDocument';

import routes from '../app/routes';

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

app.use(createStoreMiddleware);

app.get('*', (req, res, next) => {
	match({ routes, location: req.url }, (err, redirect, props) => {
		if (err) return next(err);

		if (redirect) {
			return res.redirect(301, redirect.pathname + redirect.search);
		}

		if (!props) {
			return next();
		}

		const body = renderDocument(
			<Provider store={req.store}>
				<RouterContext {...props} />
			</Provider>,
			req.store.getState(),
		);
		res.send(body);
	});
});

const port = process.env.PORT || 14728;
app.listen(port, () => {
	console.info(`Listening on port ${port}`);
});
