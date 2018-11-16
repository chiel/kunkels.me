import PT from 'prop-types';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import css from '../styles/slides.css';

const classNames = {
	enter: css.slideIn,
	enterActive: css.slideInActive,
	exit: css.slideOut,
	exitActive: css.slideOutActive,
};

export default class Slides extends React.PureComponent {
	static propTypes = {
		children: PT.node.isRequired,
		className: PT.string,
		loopInterval: PT.number,
	};

	static defaultProps = {
		className: undefined,
		loopInterval: undefined,
	};

	constructor() {
		super();

		this.state = { active: 0 };
	}

	componentDidMount() {
		if (this.props.loopInterval) {
			this.queue();
		}
	}

	componentWillUnmount() {
		clearTimeout(this.timeout);
	}

	goto(index) {
		if (index > this.props.children.length - 1) {
			index = 0;
		}

		if (index < 0) {
			index = this.props.children.length - 1;
		}

		this.setState({ active: index });
	}

	next() {
		this.goto(this.state.active + 1);
	}

	queue() {
		this.timeout = setTimeout(() => {
			this.next();
			this.queue();
		}, this.props.loopInterval);
	}

	render() {
		const { children, className } = this.props;
		const { active } = this.state;

		const item = children[active];

		return (
			<TransitionGroup className={className} component="div">
				<CSSTransition key={item.key} classNames={classNames} timeout={2000}>
					{item}
				</CSSTransition>
			</TransitionGroup>
		);
	}
}
