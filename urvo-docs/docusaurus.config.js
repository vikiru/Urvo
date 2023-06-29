// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Urvo Documentationn',
	tagline: 'Multi-purpose Discord Bot',
	favicon: 'img/favicon.ico',
	staticDirectories: ['public', 'static'],

	// Set the production url of your site here
	url: 'https://vikiru.github.io/',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/Urvo/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'vikiru',
	projectName: 'Urvo',

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	plugins: [require.resolve('@cmfcmf/docusaurus-search-local')],

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				hideOnScroll: true,
				title: 'Urvo',
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'docs',
						position: 'left',
						label: 'Home',
					},
					{
						href: 'https://github.com/vikiru/Urvo',
						class: 'fa-brands fa-github',
						position: 'right',
						'aria-label': 'GitHub repository',
					},
				],
			},
			docs: {
				sidebar: {
					hideable: true,
					autoCollapseCategories: true,
				},
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Getting Started',
						items: [
							{
								label: 'Introduction',
								to: '/',
							},
							{
								label: 'Prerequisites',
								to: '/prerequisites',
							},
							{
								label: 'Setup',
								to: '/setup',
							},
						],
					},
					{
						title: 'Commands',
						items: [
							{
								label: 'Category Overview',
								to: '/commands/category-overview',
							},
							{
								label: 'API References',
								to: '/commands/api-references',
							},
						],
					},
					{
						title: 'Conclusion',
						items: [
							{
								label: 'Acknowledgements',
								to: '/acknowledgements',
							},
							{
								label: 'GitHub Repository',
								to: 'https://github.com/vikiru/Urvo',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Urvo, Visakan Kirubakaran. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
