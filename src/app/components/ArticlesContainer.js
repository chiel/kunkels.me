import PT from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Articles from './Articles';

import { getArticles } from '../actions/articles';
import { selectArticles, selectArticlesState } from '../selectors/articles';
import * as types from '../types';

export class ArticlesContainer extends React.PureComponent {
	static propTypes = {
		articles: PT.arrayOf(types.articleSummary).isRequired,
		articlesState: types.state.isRequired,
	};

	componentDidMount() {
		this.props.dispatch(getArticles());
	}

	render() {
		const { articles, articlesState } = this.props;

		return (
			<Articles
				articles={articles}
				articlesState={articlesState}
			/>
		);
	}
}

export default connect(state => ({
	articles: selectArticles(state),
	articlesState: selectArticlesState(state),
}))(ArticlesContainer);
