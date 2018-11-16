import parseDate from 'date-fns/parse';
import { createSelector } from 'reselect';

import { initialArticleState } from '../reducers/article';

export const selectFullArticle = createSelector(
	state => state.article,
	(state, slug) => slug,

	(articles, slug) => (articles[slug] || initialArticleState),
);

export const selectArticle = createSelector(
	selectFullArticle,

	article => (
		!article.data ? null : {
			...article.data,
			date: parseDate(article.data.date),
		}
	),
);

export const selectArticleState = createSelector(
	selectFullArticle,

	({ done, error, pending }) => ({ done, error, pending }),
);

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
