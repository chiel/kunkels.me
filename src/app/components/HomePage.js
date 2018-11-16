import React from 'react';

import About from './About';
import Experience from './Experience';
import Intro from './Intro';
import Skills from './Skills';

export default () => (
	<React.Fragment>
		<Intro />
		<About />
		<Skills />
		<Experience />
	</React.Fragment>
);
