/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Content from './Content';
import Header from './Header';

import css from '../styles/experience.css';

export default () => (
	<React.Fragment>
		<Header background="/assets/bg-work-experience.jpg">
			<h2>Work Experience</h2>
		</Header>

		<Content>
			<p>
				Over time I've had the privilege of working at many different companies, of
				various sizes. While I may not have stayed at all of them for a very long
				time (for a variety of reasons) it has allowed me to learn what it is I enjoy
				doing&mdash;building amazing products for users.
			</p>

			<header className={css.header}>
				<h3>Poki</h3>
				<p className={css.meta}>July 2016—now, Amsterdam</p>
			</header>
			<p>
				Poki’s mission is to let the world play. We’re working hard to build the world’s
				biggest playground which brings together kids of all ages, game developers and
				advertisers in an experience that works for all our target audiences.
			</p>
			<p>
				When I started at Poki, the product that was currently live was a big PHP-monolith
				which had been slowly tearing apart at the seams for a while due to changing
				requirements and inflexible code. My first order of business was to envision a new
				stack which would allow us to split the front- and back-end and allow us to cater
				to the business’ needs better.
			</p>
			<p>
				The rewrite was purely intended as a technical rewrite to see if our newly chosen
				tech stack was feasible for production use. We rewrote the backend in Go using a
				microservice architecture hosted on Google Cloud Platform’s Kubernetes Engine.
				The front-end was rewritten using primarily React and Redux.
			</p>
			<p>
				This first “phase” went live for the first couple of sites sometime in march 2017
				after many months of painstakingly testing things and ensuring revenues were up to
				par and was mostly concluded by the end of 2017.
			</p>
			<p>
				After this, we moved on to creating a project dubbed “playground”, in which we try
				to put our users first and give them a great experience while also allowing brands
				and game developers to add to, not detract from, their experience.
			</p>
			<p>
				While React is still a big player in this rewrite, RxJS is also being used which
				allows us to split out business logic from the React components, allowing us to
				better test this logic.
			</p>

			<header className={css.header}>
				<h3>Label A</h3>
				<p className={css.meta}>November 2015—July 2016, Amsterdam</p>
			</header>
			<p>
				Label A is an agency located in the heart of Amsterdam. At Label A I worked as
				a lead developer on a variety of client projects using various JavaScript
				libraries.  I played a part in bringing React into the fold to allow the other
				front-end developers and myself to be more productive.
			</p>
			<p>
				The biggest project I worked on during my time here was Grow-bee&mdash;a social
				network and e-learning tool aimed at businesses. It had the typical social features
				you'd expect, such as making posts and sharing images, but also had built in tools
				to create questionnaires for employees.
			</p>

			<header className={css.header}>
				<h3>Lifely</h3>
				<p className={css.meta}>April 2015—November 2015, Amsterdam</p>
			</header>
			<p>
				Lifely is a small group of people who are ridiculously passionate about making
				products that simply work. They fully invest themselves into each project and
				focus on delivering something that stays true to the concept.
			</p>
			<p>
				I joined Lifely as a frontend developer, contributing to the development of their
				latest project, Part-up, a startup that enables people to create short-term,
				project-based teams.
			</p>
			<p>
				All development for Part-up is being done in Meteor, a fairly young JavaScript
				framework which takes care of both front– and backend, as well as build tooling.
			</p>

			<header className={css.header}>
				<h3>Strangelove</h3>
				<p className={css.meta}>July 2014—April 2015, Amsterdam</p>
			</header>
			<p>
				Strangelove is an Amsterdam-based creative agency for the “always on” world. By
				using their knowledge of how businesses work they aim to provide solutions that
				are relevant, human-friendly, memorable and above all, simple.
			</p>
			<p>
				I was a digital developer at Strangelove. My first order of business was giving
				the company website a much-needed makeover. I worked together closely with the
				motion graphics designer and experimented a lot with scrolling animations.
			</p>
			<p>
				After that, my work shifted towards coming up with a CMS that would allow for a
				lot of customisation, while still allowing the developers to work on a core that
				is shared by most websites, eliminating duplicated efforts for each new project.
			</p>

			<header className={css.header}>
				<h3>TravelBird</h3>
				<p className={css.meta}>October 2013—April 2014, Amsterdam</p>
			</header>
			<p>
				TravelBird is a travel organisation that aims to solve the paradox of choice when
				it comes to picking a vacation destination. They work with partners situated
				throughout Europe to provide daily deals at excellent prices.
			</p>
			<p>
				At TravelBird I helped innovate the way we worked by splitting the front– and
				backend, communicating through an API. This enabled my fellow frontend engineers
				and I to work on a decoupled codebase in areas we had expertise.
			</p>

			<header className={css.header}>
				<h3>Beamly</h3>
				<p className={css.meta}>November 2012—April 2013, London</p>
			</header>
			<p>
				Previously Zeebox. Beamly creates a second-screen application for your phone or
				tablet that displays contextual information, twitter feeds and just about anything
				else based on what’s happening on your TV screen.
			</p>
			<p>
				At Beamly I worked in the Mission Control team, responsible for maintaining a tool
				which allowed editors to enhance programmes with various widgets and twitter feeds
				to make the TV-watching experience more engaging.
			</p>

			<header className={css.header}>
				<h3>QMetric</h3>
				<p className={css.meta}>July 2012—August 2012, London</p>
			</header>
			<p>
				QMetric is an insurance company that leverages technology in order to combat the
				often negative image insurance companies have. They prioritise their customers’
				needs and aim to provide the best service possible.
			</p>
			<p>
				At QMetric I worked on the Policy Expert website. Most of my time was spent on
				optimising the various forms that enabled users to manage all aspects of purchasing
				and managing their insurance, no matter what browser they used.
			</p>
			<p>
				I also helped think about decoupling the various components of the system into
				micro services. This would make it easier to develop, test and deploy smaller
				parts of the application rather than working with one monolithic codebase.
			</p>
			<p>
				It is during this time I started working on the first incarnation of informal&mdash;a
				JavaScript library that helps build forms based on a JSON schema. The schema could
				be shared with the backend to take care of validation.
			</p>

			<header className={css.header}>
				<h3>Spotify</h3>
				<p className={css.meta}>November 2010—June 2012, Stockholm</p>
			</header>
			<p>
				Spotify is a music streaming service that enables its users to listen to all the
				world’s music at the press of a button. It also offers various ways to discover
				new music through features such as Radio and Discover Weekly.
			</p>
			<p>
				To say I learnt a lot at Spotify would be an understatement&mdash;working here was a
				critical step in my career as a developer. Before Spotify, the command line and all
				its wonders were a scary place, shrouded in mystery.
			</p>
			<p>
				I was also introduced to Git. Despite making many mistakes along the way, the patience
				of my many awesome colleagues helped me overcome the arguably steep learning curve of
				this crucial piece of technology.
			</p>
			<p>
				I worked on a variety of projects—initially the regular (spotify.com) website followed
				by a more frontend-heavy role helping to implement the Spotify Apps API into the native
				client.
			</p>
			<p>
				This allowed me to experiment with CSS3 and HTML5 features for months while fleshing
				out an API layer around the raw calls exposed by the client code, offering third-party
				developers an awesome app-development experience.
			</p>
			<p>
				Lastly, I worked on the platform team creating the developer.spotify.com website and
				attending various events locally and abroad. I also did the occasional public speaking,
				evangelising the Spotify Apps API.
			</p>

			<header className={css.header}>
				<h3>Odd jobs</h3>
				<p className={css.meta}>March 2006—May 2010, Amsterdam Area</p>
			</header>
			<p>
				<strong>Mediamatic</strong>&mdash;At Mediamatic I worked on setting up new websites in
				their Anymeta community management system. Most of the work was quite simple and a
				little repetitive for my taste, with little opportunity to make a difference.
			</p>
			<p>
				<strong>Lucius Websystems</strong>&mdash;At Lucius I worked as a Drupal developer. I
				created HTML and CSS templates and prepped these to be attached to a Drupal backend.
				Occasionally I created small interactive components in JavaScript as well.
			</p>
			<p>
				<strong>Grrr</strong>&mdash;At Grrr, I worked as a front-end developer, creating
				HTML/CSS templates that would later be enriched by JavaScript. Work was mainly done
				for various museums and the well-known (in the Netherlands) museum night.
			</p>
			<p>
				<strong>Submarine</strong>&mdash;At Submarine I worked as an all-round web developer,
				mainly creating accessible and valid HTML/CSS.
			</p>
			<p>
				<strong>Synetic</strong>&mdash;At Synetic I worked on websites which were based on
				their CMS, Procreate. Most of my time was spent in PHP and MySQL, doing lots of
				under-the-hood work on thee CMS to improve performance and functionality.
			</p>
		</Content>
	</React.Fragment>
);
