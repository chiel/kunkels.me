import React from 'react';

import Slides from './Slides';

import css from '../styles/intro.css';

const titles = ['full-stack developer', 'devops enthusiast'];

export default class Intro extends React.PureComponent {
	constructor() {
		super();

		this.state = {
			height: 0,
			offset: 0,
		};
	}

	componentWillMount() {
		if (typeof window !== 'undefined') {
			this.setState({ height: window.innerHeight });
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		let offset = window.pageYOffset;
		if (window.pageYOffset > this.state.height) {
			offset = this.state.height;
		}

		if (offset !== this.state.offset) {
			this.setState({ offset });
		}
	}

	render() {
		const { height, offset } = this.state;
		const backgroundStyle = {
			transform: `translate3d(0, ${Math.round(offset * 0.33)}px, 0)`,
		};
		const contentStyle = {
			opacity: (offset ? (1 / height) * (height - offset) : 1).toFixed(2),
			transform: `translate3d(0, ${Math.round(offset * 0.5)}px, 0)`,
		};

		return (
			<section className={css.container}>
				<figure className={css.background} style={backgroundStyle} />
				<div className={css.content} style={contentStyle}>
					<h1>Chiel <span>Kunkels</span></h1>
					<Slides className={css.titles} loopInterval={3000}>
						{titles.map(title => <p key={title}>{title}</p>)}
					</Slides>
				</div>
			</section>
		);
	}
}
