import PT from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Article from './Article';

import { getArticle } from '../actions/articles';
import { selectArticle, selectArticleState } from '../selectors/articles';
import * as types from '../types';

export class ArticleContainer extends React.PureComponent {
	static propTypes = {
		article: types.article,
		articleState: types.state.isRequired,
		dispatch: PT.func.isRequired,
		params: PT.shape({
			slug: PT.string.isRequired,
		}).isRequired,
	};

	static defaultProps = {
		article: null,
	};

	componentDidMount() {
		const { dispatch, params: { slug } } = this.props;
		dispatch(getArticle({ slug }));
	}

	render() {
		const { article, articleState } = this.props;

		if (articleState.error) {
			return <div>{articleState.error}</div>;
		}

		if (article) {
			return <Article article={article} />;
		}

		if (articleState.pending) {
			return <div>Fetching article...</div>;
		}

		return (
			<div>Article not found :(</div>
		);
	}
}

export default connect((state, { params }) => ({
	article: selectArticle(state, params.slug),
	articleState: selectArticleState(state, params.slug),
}))(ArticleContainer);
