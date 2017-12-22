import React from 'react';

import Articles from './Articles';
import Intro from './Intro';

export default function HomePage() {
	return (
		<React.Fragment>
			<Intro />
			<Articles />
		</React.Fragment>
	);
}
