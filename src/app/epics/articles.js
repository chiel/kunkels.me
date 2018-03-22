import { of } from 'rxjs/observable/of';

import { getArticles, getArticlesError, getArticlesSuccess } from '../actions/articles';

export function getArticlesEpic(action$, store, { api }) {
	return action$.ofType(getArticles.type)
		.switchMap(() => api('/articles'))
		.map(({ response }) => (
			getArticlesSuccess({ articles: response })
		))
		.catch(response => of(getArticlesError('Failed to fetch articles :(')));
}
