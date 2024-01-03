'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[9671],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => m, kt: () => g });
			var o = r(7294);
			function n(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = r),
					e
				);
			}
			function a(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					t &&
						(o = o.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						r.push.apply(r, o);
				}
				return r;
			}
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? a(Object(r), !0).forEach(function (t) {
								n(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
							: a(Object(r)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
								});
				}
				return e;
			}
			function s(e, t) {
				if (null == e) return {};
				var r,
					o,
					n = (function (e, t) {
						if (null == e) return {};
						var r,
							o,
							n = {},
							a = Object.keys(e);
						for (o = 0; o < a.length; o++) (r = a[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
						return n;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (o = 0; o < a.length; o++)
						(r = a[o]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
				}
				return n;
			}
			var l = o.createContext({}),
				c = function (e) {
					var t = o.useContext(l),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : i(i({}, t), e)), r;
				},
				m = function (e) {
					var t = c(e.components);
					return o.createElement(l.Provider, { value: t }, e.children);
				},
				u = 'mdxType',
				p = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return o.createElement(o.Fragment, {}, t);
					},
				},
				d = o.forwardRef(function (e, t) {
					var r = e.components,
						n = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						m = s(e, ['components', 'mdxType', 'originalType', 'parentName']),
						u = c(r),
						d = n,
						g = u[''.concat(l, '.').concat(d)] || u[d] || p[d] || a;
					return r
						? o.createElement(g, i(i({ ref: t }, m), {}, { components: r }))
						: o.createElement(g, i({ ref: t }, m));
				});
			function g(e, t) {
				var r = arguments,
					n = t && t.mdxType;
				if ('string' == typeof e || n) {
					var a = r.length,
						i = new Array(a);
					i[0] = d;
					var s = {};
					for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
					(s.originalType = e), (s[u] = 'string' == typeof e ? e : n), (i[1] = s);
					for (var c = 2; c < a; c++) i[c] = r[c];
					return o.createElement.apply(null, i);
				}
				return o.createElement.apply(null, r);
			}
			d.displayName = 'MDXCreateElement';
		},
		1039: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => l,
					contentTitle: () => i,
					default: () => p,
					frontMatter: () => a,
					metadata: () => s,
					toc: () => c,
				});
			var o = r(7462),
				n = (r(7294), r(4137));
			const a = { slug: '/', id: 'intro', title: '\ud83d\udcd6 Introduction' },
				i = void 0,
				s = {
					unversionedId: 'intro',
					id: 'intro',
					title: '\ud83d\udcd6 Introduction',
					description: 'Overview',
					source: '@site/docs/intro.md',
					sourceDirName: '.',
					slug: '/',
					permalink: '/Urvo/',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { slug: '/', id: 'intro', title: '\ud83d\udcd6 Introduction' },
					sidebar: 'docs',
					next: { title: '\ud83d\udcdd Prerequisites', permalink: '/Urvo/prerequisites' },
				},
				l = {},
				c = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'License', id: 'license', level: 2 },
				],
				m = { toc: c },
				u = 'wrapper';
			function p(e) {
				let { components: t, ...r } = e;
				return (0, n.kt)(
					u,
					(0, o.Z)({}, m, r, { components: t, mdxType: 'MDXLayout' }),
					(0, n.kt)(
						'div',
						{ align: 'center', id: 'logo' },
						(0, n.kt)(
							'a',
							{ href: 'https://github.com/vikiru/Urvo' },
							(0, n.kt)('img', { src: 'logo.png', alt: 'Urvo Logo' }),
						),
					),
					(0, n.kt)(
						'p',
						{ align: 'center', id: 'badges' },
						(0, n.kt)(
							'a',
							{ href: 'https://github.com/vikiru/Urvo/blob/main/LICENSE' },
							(0, n.kt)('img', { src: 'https://img.shields.io/badge/license-MIT-green', alt: 'MIT License' }),
						),
						(0, n.kt)(
							'a',
							{ href: 'https://vikiru.github.io/Urvo/' },
							(0, n.kt)('img', {
								src: 'https://img.shields.io/badge/documentation-docs-orange',
								alt: 'Documentation Link',
							}),
						),
						(0, n.kt)(
							'a',
							{ href: 'https://github.com/prettier/prettier' },
							(0, n.kt)('img', {
								src: 'https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square',
								alt: 'Code Style Prettier',
							}),
						),
						(0, n.kt)(
							'a',
							{ href: 'https://github.com/vikiru/Urvo/releases' },
							(0, n.kt)('img', { src: 'https://img.shields.io/github/v/release/vikiru/Urvo', alt: 'Release' }),
						),
						(0, n.kt)(
							'a',
							{ href: 'https://github.com/vikiru/Urvo/issues?q=is%3Aissue+is%3Aclosed' },
							(0, n.kt)('img', {
								src: 'https://img.shields.io/github/issues-closed/vikiru/Urvo',
								alt: 'Closed Issues',
							}),
						),
						(0, n.kt)(
							'a',
							{ href: 'https://github.com/vikiru/Urvo/pulls?q=is%3Apr+is%3Aclosed' },
							(0, n.kt)('img', {
								src: 'https://img.shields.io/github/issues-pr-closed/vikiru/Urvo?label=closed%20prs',
								alt: 'Closed PRs',
							}),
						),
					),
					(0, n.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, n.kt)(
						'p',
						null,
						(0, n.kt)('strong', { parentName: 'p' }, 'Urvo'),
						' is a versatile Discord bot that offers over 65 commands across 8 categories to enhance your Discord experience!',
					),
					(0, n.kt)(
						'ul',
						null,
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)(
								'strong',
								{ parentName: 'li' },
								'\ud83d\udcf7 ',
								(0, n.kt)('a', { parentName: 'strong', href: '/Urvo/commands/images/bird' }, 'Images'),
							),
							': Enhance your mood with a random image of an animal from the available options or an image of coffee to boost your energy!',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)(
								'strong',
								{ parentName: 'li' },
								'\u2753 ',
								(0, n.kt)('a', { parentName: 'strong', href: '/Urvo/commands/info/anime' }, 'Information'),
							),
							': Whether you\u2019re a fan of anime or manga, Digimon or Disney, or just curious about a term, you\u2019ll find everything you need here!',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)(
								'strong',
								{ parentName: 'li' },
								'\ud83d\ude02 ',
								(0, n.kt)('a', { parentName: 'strong', href: '/Urvo/commands/memes/buzz' }, 'Memes'),
							),
							': Generate memes to enjoy with your friends, using easy prompts!',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)(
								'strong',
								{ parentName: 'li' },
								'\ud83d\udd79\ufe0f ',
								(0, n.kt)('a', { parentName: 'strong', href: '/Urvo/commands/minigames/flip' }, 'Minigames'),
							),
							': The cure for boredom. Beat the bot and have a blast!',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)(
								'strong',
								{ parentName: 'li' },
								'\ud83d\udee1\ufe0f ',
								(0, n.kt)('a', { parentName: 'strong', href: '/Urvo/commands/moderation/ban' }, 'Moderation'),
							),
							': Use these commands to manage the server effectively and efficiently!',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)(
								'strong',
								{ parentName: 'li' },
								'\ud83c\udfb2 ',
								(0, n.kt)('a', { parentName: 'strong', href: '/Urvo/commands/random/advice' }, 'Random'),
							),
							': An assortment of commands that provide you with random pieces of information such as motivating you with a quote or making you laugh with a joke!',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)(
								'strong',
								{ parentName: 'li' },
								'\u2694\ufe0f ',
								(0, n.kt)('a', { parentName: 'strong', href: '/Urvo/commands/troopica/attack' }, 'Troopica'),
							),
							': Rise to the top of your server by amassing wealth and troops!',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)(
								'strong',
								{ parentName: 'li' },
								'\ud83d\udee0\ufe0f ',
								(0, n.kt)('a', { parentName: 'strong', href: '/Urvo/commands/utility/calculate' }, 'Utility'),
							),
							': Additional commands that can prove useful to yourself or the server!',
						),
					),
					(0, n.kt)(
						'p',
						{ align: 'justify' },
						'A comprehensive overview detailing all available commands can be located within the documentation under the ',
						(0, n.kt)('strong', null, (0, n.kt)('a', { href: './commands/category-overview' }, 'Category Overview')),
						' section. Each command has a dedicated page detailing its usage, including optional parameters, cooldowns (if any), required user permissions, any associated external APIs, and finally, a demonstration of the command is also provided for clarity.',
					),
					(0, n.kt)('h2', { id: 'license' }, 'License'),
					(0, n.kt)(
						'p',
						null,
						'The contents of this repository are licensed under the terms and conditions of the ',
						(0, n.kt)('a', { parentName: 'p', href: 'https://choosealicense.com/licenses/mit/' }, 'MIT'),
						' license.',
					),
					(0, n.kt)(
						'p',
						null,
						(0, n.kt)('a', { parentName: 'p', href: 'https://github.com/vikiru/Urvo/blob/main/LICENSE' }, 'MIT'),
						' \xa9 2021-present Visakan Kirubakaran.',
					),
				);
			}
			p.isMDXComponent = !0;
		},
	},
]);
