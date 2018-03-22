import createAction from '../utils/createAction';

export const getArticles = createAction('articles/get_articles');
export const getArticlesSuccess = createAction('articles/get_articles_success');
export const getArticlesError = createAction('articles/get_articles_error');
