import formatDate from 'date-fns/format';
import PT from 'prop-types';
import React from 'react';

import css from '../styles/article-summary.css';

export default class ArticleSummary extends React.PureComponent {
	static propTypes = {
		article: PT.shape({
			title: PT.string.isRequired,
			excerpt: PT.string.isRequired,
			image: PT.string.isRequired,
			published_at: PT.instanceOf(Date).isRequired,
			tags: PT.arrayOf(PT.string).isRequired,
		}).isRequired,
	};

	render() {
		const { article } = this.props;

		return (
			<article className={css.article}>
				<h3 className={css.title}>{article.title}</h3>
				<div className={css.meta}>
					<time>
						{formatDate(article.published_at, 'dddd, MMMM Do, YYYY')}
					</time>
					<ul className={css.tags}>
						{article.tags.map(tag => <li key={tag}>{tag}</li>)}
					</ul>
				</div>
				<p>{article.excerpt}</p>
			</article>
		);
	}
}
