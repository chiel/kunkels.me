import PT from 'prop-types';

export const articleSummary = PT.shape({
	date: PT.instanceOf(Date),
	excerpt: PT.string,
	slug: PT.string,
	tags: PT.arrayOf(PT.string),
	title: PT.string,
});

export const state = PT.shape({
	done: PT.bool.isRequired,
	error: PT.string.isRequired,
	pending: PT.bool.isRequired,
});
