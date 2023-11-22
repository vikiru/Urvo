'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[9671],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => u, kt: () => h });
			var o = r(7294);
			function n(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = r),
					e
				);
			}
			function i(e, t) {
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
			function a(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? i(Object(r), !0).forEach(function (t) {
								n(e, t, r[t]);
						  })
						: Object.getOwnPropertyDescriptors
						  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						  : i(Object(r)).forEach(function (t) {
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
							i = Object.keys(e);
						for (o = 0; o < i.length; o++) (r = i[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
						return n;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (o = 0; o < i.length; o++)
						(r = i[o]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
				}
				return n;
			}
			var l = o.createContext({}),
				c = function (e) {
					var t = o.useContext(l),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : a(a({}, t), e)), r;
				},
				u = function (e) {
					var t = c(e.components);
					return o.createElement(l.Provider, { value: t }, e.children);
				},
				p = 'mdxType',
				m = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return o.createElement(o.Fragment, {}, t);
					},
				},
				d = o.forwardRef(function (e, t) {
					var r = e.components,
						n = e.mdxType,
						i = e.originalType,
						l = e.parentName,
						u = s(e, ['components', 'mdxType', 'originalType', 'parentName']),
						p = c(r),
						d = n,
						h = p[''.concat(l, '.').concat(d)] || p[d] || m[d] || i;
					return r
						? o.createElement(h, a(a({ ref: t }, u), {}, { components: r }))
						: o.createElement(h, a({ ref: t }, u));
				});
			function h(e, t) {
				var r = arguments,
					n = t && t.mdxType;
				if ('string' == typeof e || n) {
					var i = r.length,
						a = new Array(i);
					a[0] = d;
					var s = {};
					for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
					(s.originalType = e), (s[p] = 'string' == typeof e ? e : n), (a[1] = s);
					for (var c = 2; c < i; c++) a[c] = r[c];
					return o.createElement.apply(null, a);
				}
				return o.createElement.apply(null, r);
			}
			d.displayName = 'MDXCreateElement';
		},
		1039: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => l,
					contentTitle: () => a,
					default: () => m,
					frontMatter: () => i,
					metadata: () => s,
					toc: () => c,
				});
			var o = r(7462),
				n = (r(7294), r(4137));
			const i = { slug: '/', id: 'intro', title: '\ud83d\udcd6 Introduction' },
				a = void 0,
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
				u = { toc: c },
				p = 'wrapper';
			function m(e) {
				let { components: t, ...r } = e;
				return (0, n.kt)(
					p,
					(0, o.Z)({}, u, r, { components: t, mdxType: 'MDXLayout' }),
					(0, n.kt)(
						'p',
						{ align: 'center', id: 'logos' },
						(0, n.kt)(
							'a',
							{ href: 'https://github.com/vikiru/Urvo' },
							(0, n.kt)('img', { src: 'logo.png', alt: 'Urvo Logo', width: '512' }),
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
						(0, n.kt)('br', null),
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
					(0, n.kt)('p', { align: 'center', id: 'badges' }),
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
							(0, n.kt)('strong', { parentName: 'li' }, '\ud83d\udcf7 Images'),
							': Enhance your mood with a random image of an animal from the available options or an image of coffee to boost your energy!',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('strong', { parentName: 'li' }, '\u2753 Information'),
							': Whether you\u2019re a fan of anime or manga, Digimon or Disney, or just curious about a term, you\u2019ll find everything you need here!',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('strong', { parentName: 'li' }, '\ud83d\ude02 Memes'),
							': Generate memes to enjoy with your friends, using easy prompts!',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('strong', { parentName: 'li' }, '\ud83d\udd79\ufe0f Minigames'),
							': The cure for boredom. Beat the bot and have a blast!',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('strong', { parentName: 'li' }, '\ud83d\udee1\ufe0f Moderation'),
							': Use these commands to manage the server effectively and efficiently!',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('strong', { parentName: 'li' }, '\ud83c\udfb2 Random'),
							': An assortment of commands that provide you with random pieces of information such as motivating you with a quote or making you laugh with a joke!',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('strong', { parentName: 'li' }, '\u2694\ufe0f Troopica'),
							': Rise to the top of your server by amassing wealth and troops!',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('strong', { parentName: 'li' }, '\ud83d\udee0\ufe0f Utility'),
							': Additional commands that can prove useful to yourself or the server!',
						),
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
			m.isMDXComponent = !0;
		},
	},
]);
