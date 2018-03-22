import parseDate from 'date-fns/parse';
import { createSelector } from 'reselect';

export const selectArticles = createSelector(
	state => state.articles.data,

	articles => (articles || [])
		.map(article => ({
			...article,
			date: parseDate(article.date),
		})),
);

export const selectArticlesState = createSelector(
	state => state.articles,

	({ done, error, pending }) => ({ done, error, pending }),
);
