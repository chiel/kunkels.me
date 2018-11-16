import { of } from 'rxjs/observable/of';

import {
	getArticle,
	getArticleError,
	getArticleSuccess,
	getArticles,
	getArticlesError,
	getArticlesSuccess,
} from '../actions/articles';

export function getArticleEpic(action$, store, { api }) {
	return action$.ofType(getArticle.type)
		.switchMap(({ slug }) => (
			api(`/articles/${slug}`)
				.map(({ response }) => (
					getArticleSuccess({ article: response, slug })
				))
				.catch(() => of(
					getArticleError({ slug, error: 'Failed to get article :(' }),
				))
		));
}

export function getArticlesEpic(action$, store, { api }) {
	return action$.ofType(getArticles.type)
		.switchMap(() => api('/articles'))
		.map(({ response }) => (
			getArticlesSuccess({ articles: response })
		))
		.catch(() => of(getArticlesError('Failed to fetch articles :(')));
}
