import parseDate from 'date-fns/parse';
import React from 'react';

import ArticleSummary from './ArticleSummary';

import css from '../styles/articles.css';

export default function Articles() {
	const articles = [
		{
			slug: 'gcloud-container-builder',
			title: 'Setting up Google Cloud Container Builder',
			excerpt: 'There\'s a new kid on the continuous integration block: Google Cloud Container Builder. It takes a slightly different approach than most other services I\'ve used so I wanted to play around with it.',
			image: 'https://static.pexels.com/photos/225769/pexels-photo-225769.jpeg',
			published_at: parseDate('2018-01-03 22:03:35+01'),
			tags: ['tech', 'devops'],
		},
		{
			slug: 'development-inside-docker',
			title: 'Development inside Docker',
			excerpt: 'I\'m a big fan of deploying applications inside Docker containers. I love that the environment is isolated and reproducible. I really wanted the same while building the new version of my website.',
			image: 'https://static.pexels.com/photos/225769/pexels-photo-225769.jpeg',
			published_at: parseDate('2017-12-29 22:03:35+01'),
			tags: ['tech'],
		},
		{
			slug: 'rearchitectiny-kunkels-me',
			title: 'Rearchitecting kunkels.me',
			excerpt: 'It has been over 2 years since I\'ve touched my own site but since I wanted to experiment with some new tools and technologies I figured I may as well do so on my own website.',
			image: 'https://static.pexels.com/photos/225769/pexels-photo-225769.jpeg',
			published_at: parseDate('2017-12-22 22:03:35+01'),
			tags: ['tech'],
		},
	];

	return (
		<section className={css.container}>
			<h2>Stuff I have written recently(ish)</h2>
			{articles.map(article => <ArticleSummary key={article.slug} article={article} />)}
		</section>
	);
}
