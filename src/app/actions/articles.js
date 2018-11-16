import createAction from '../utils/createAction';

export const getArticle = createAction('articles/get_article');
export const getArticleSuccess = createAction('articles/get_article_success');
export const getArticleError = createAction('articles/get_article_error');
export const getArticles = createAction('articles/get_articles');
export const getArticlesSuccess = createAction('articles/get_articles_success');
export const getArticlesError = createAction('articles/get_articles_error');
