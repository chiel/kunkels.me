/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Content from './Content';
import Header from './Header';

import css from '../styles/skills.css';

export default () => (
	<React.Fragment>
		<Header background="/assets/bg-values-skills.jpg">
			<h2>Values &amp; Skills</h2>
		</Header>

		<Content>
			<p className={css.tldr}>
				<strong>TL;DR:</strong> All-round developer specialised in JavaScript, React,
				RxJS and software architecture.
			</p>

			<p>
				As an all-round developer I currently spend most of my time coding in JavaScript,
				HTML, CSS, Go and various database systems.
			</p>

			<p>
				Besides coding I also enjoy fiddling around with build tooling, continuous
				integration + deployment and cloud administration&mdash;basically anything that
				takes the code I write from my local development environment to production. My
				usual “stack” for this is npm + webpack, Google Cloud Platform’s Container Builder
				and Kubernetes.
			</p>

			<p>
				I really enjoy building web apps using React, Redux and RxJS&mdash;this gives me
				a great development experience and makes it much easier to split my code up and
				reason about it.
			</p>

			<p>
				Redux allows me to keep my application state centralised, React allows me to render
				a graphical representation of the application state and RxJS allows me keep business
				logic easily testable and out of my React components.
			</p>

			<p>
				In the past I’ve been dubbed “the gitfather” due to my extensive knowledge of Git,
				its workflows, my obsession with a clean history and willingness to educate others
				on these topics.
			</p>

			<p>
				While writing code I always try to think about proper software architecture and the
				implications that arise from decoupling and modularising a codebase. I always try
				to make my code as extensible as possible while being pragmatic about what's
				currently needed.
			</p>
		</Content>
	</React.Fragment>
);
