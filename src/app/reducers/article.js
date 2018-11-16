import { getArticle, getArticleError, getArticleSuccess } from '../actions/articles';

export const initialArticleState = {
	data: null,
	done: false,
	error: '',
	pending: true,
};

export default function articleReducer(state = {}, action) {
	if (action.type === getArticle.type) {
		return {
			...state,
			[action.slug]: {
				...(state[action.slug] || initialArticleState),
				pending: true,
			},
		};
	}

	if (action.type === getArticleError.type) {
		return {
			...state,
			[action.slug]: {
				...state[action.slug],
				done: true,
				error: action.error,
				pending: false,
			},
		};
	}

	if (action.type === getArticleSuccess.type) {
		return {
			...state,
			[action.slug]: {
				...state[action.slug],
				data: action.article,
				done: true,
				pending: false,
			},
		};
	}

	return state;
}
