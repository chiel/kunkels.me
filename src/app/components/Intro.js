import React from 'react';

import Slides from './Slides';

import css from '../styles/intro.css';

export default function Intro() {
	const titles = ['full-stack developer', 'devops enthusiast'];

	return (
		<section className={css.container}>
			<h1>
				Chiel <span>Kunkels</span>
			</h1>
			<Slides className={css.titles} loopInterval={3000}>
				{titles.map(title => <p key={title}>{title}</p>)}
			</Slides>
		</section>
	);
}
