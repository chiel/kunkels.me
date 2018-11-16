/* eslint-disable react/no-danger */
import React from 'react';

import css from '../styles/article.css';
import * as types from '../types';

export default class Article extends React.PureComponent {
	static propTypes = {
		article: types.article.isRequired,
	};

	render() {
		const { article } = this.props;

		return (
			<article className={css.article}>
				<h1>{article.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: article.body }} />
			</article>
		);
	}
}
