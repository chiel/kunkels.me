import formatDate from 'date-fns/format';
import React from 'react';

import css from '../styles/article-summary.css';
import * as types from '../types';

export default class ArticleSummary extends React.PureComponent {
	static propTypes = {
		article: types.articleSummary.isRequired,
	};

	render() {
		const { article } = this.props;

		return (
			<article className={css.article}>
				<h3 className={css.title}>{article.title}</h3>
				<div className={css.meta}>
					<time>
						{formatDate(article.date, 'dddd, MMMM Do, YYYY')}
					</time>
					{article.tags && article.tags.length && (
						<ul className={css.tags}>
							{article.tags.map(tag => <li key={tag}>{tag}</li>)}
						</ul>
					)}
				</div>
				<p>{article.excerpt}</p>
			</article>
		);
	}
}
