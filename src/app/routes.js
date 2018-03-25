import HomePage from './components/HomePage';
import Root from './components/Root';

export default [
	{
		component: Root,
		childRoutes: [
			{
				path: '/',
				component: HomePage,
			},
		],
	},
];
