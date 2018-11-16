import { getArticles, getArticlesError, getArticlesSuccess } from '../actions/articles';

// const articles = [
// 	{
// 		title: 'Setting up Google Cloud Container Builder',
// 		image: 'https://static.pexels.com/photos/225769/pexels-photo-225769.jpeg',
// 	},
// 	{
// 		title: 'Development inside Docker',
// 		image: 'https://static.pexels.com/photos/225769/pexels-photo-225769.jpeg',
// 	},
// 	{
// 		title: 'Rearchitecting kunkels.me',
// 		image: 'https://static.pexels.com/photos/225769/pexels-photo-225769.jpeg',
// 	},
// ];

const initialState = {
	data: null,
	done: false,
	error: '',
	pending: false,
};

export default function articlesReducer(state = initialState, action) {
	if (action.type === getArticles.type) {
		return {
			...state,
			pending: true,
		};
	}

	if (action.type === getArticlesError.type) {
		return {
			...state,
			done: true,
			error: action.error,
			pending: false,
		};
	}

	if (action.type === getArticlesSuccess.type) {
		return {
			...state,
			data: action.articles,
			done: true,
			pending: false,
		};
	}

	return state;
}
