import PT from 'prop-types';
import React from 'react';

import ArticleSummary from './ArticleSummary';

import css from '../styles/articles.css';
import * as types from '../types';

export default class Articles extends React.PureComponent {
	static propTypes = {
		articles: PT.arrayOf(types.articleSummary).isRequired,
		articlesState: types.state.isRequired,
	};

	render() {
		const { articles, articlesState } = this.props;

		return (
			<section className={css.container}>
				<h2 className={css.title}>Stuff I have written recently(ish)</h2>
				{articlesState.error ? (
					<p>{articlesState.error}</p>
				) : articles.length ? (
					articles.map(article => (
						<ArticleSummary
							key={article.slug}
							article={article}
						/>
					))
				) : articlesState.done ? (
					<p>No articles found :(</p>
				) : (
					<p>Fetching articles...</p>
				)}
			</section>
		);
	}
}
