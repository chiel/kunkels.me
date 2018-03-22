import React from 'react';

import ArticlesContainer from './ArticlesContainer';
import Intro from './Intro';

export default function HomePage() {
	return (
		<React.Fragment>
			<Intro />
			<ArticlesContainer />
		</React.Fragment>
	);
}
