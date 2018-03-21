import { readdirSync, readFileSync } from 'fs';
import yaml from 'js-yaml';
import markdown from 'markdown-it';
import frontmatter from 'markdown-it-front-matter';

const articleRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}-(.*)\.md$/;

const articlesDir = `${__dirname}/../articles`;
const articles = readdirSync(articlesDir)
	.filter(file => articleRegex.test(file))
	.map(file => {
		let meta;
		const md = markdown().use(frontmatter, fm => { meta = yaml.safeLoad(fm); });
		const content = readFileSync(`${articlesDir}/${file}`, 'utf-8');

		return {
			body: md.render(content),
			slug: file.match(articleRegex)[1],
			...meta,
		};
	});

export default articles;
