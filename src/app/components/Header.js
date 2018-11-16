import PT from 'prop-types';
import React from 'react';

import css from '../styles/header.css';

const Header = ({ background, children }) => (
	<header className={css.header} style={{ backgroundImage: `url(${background})` }}>
		{children}
	</header>
);

Header.propTypes = {
	background: PT.string.isRequired,
	children: PT.node.isRequired,
};

export default Header;
