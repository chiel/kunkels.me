import PT from 'prop-types';
import React from 'react';

import css from '../styles/content.css';

const Content = ({ children }) => (
	<div className={css.container}>
		<div className={css.content}>
			{children}
		</div>
	</div>
);

Content.propTypes = {
	children: PT.node.isRequired,
};

export default Content;
