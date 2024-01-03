'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[6462],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => p, kt: () => f });
			var n = r(7294);
			function o(e, t, r) {
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
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? a(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
							: a(Object(r)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
								});
				}
				return e;
			}
			function l(e, t) {
				if (null == e) return {};
				var r,
					n,
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							a = Object.keys(e);
						for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (n = 0; n < a.length; n++)
						(r = a[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
				}
				return o;
			}
			var s = n.createContext({}),
				c = function (e) {
					var t = n.useContext(s),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : i(i({}, t), e)), r;
				},
				p = function (e) {
					var t = c(e.components);
					return n.createElement(s.Provider, { value: t }, e.children);
				},
				u = 'mdxType',
				d = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				m = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						a = e.originalType,
						s = e.parentName,
						p = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
						u = c(r),
						m = o,
						f = u[''.concat(s, '.').concat(m)] || u[m] || d[m] || a;
					return r
						? n.createElement(f, i(i({ ref: t }, p), {}, { components: r }))
						: n.createElement(f, i({ ref: t }, p));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = r.length,
						i = new Array(a);
					i[0] = m;
					var l = {};
					for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
					(l.originalType = e), (l[u] = 'string' == typeof e ? e : o), (i[1] = l);
					for (var c = 2; c < a; c++) i[c] = r[c];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = 'MDXCreateElement';
		},
		7438: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => s,
					contentTitle: () => i,
					default: () => d,
					frontMatter: () => a,
					metadata: () => l,
					toc: () => c,
				});
			var n = r(7462),
				o = (r(7294), r(4137));
			const a = { id: 'acknowledgements', title: 'Acknowledgements' },
				i = void 0,
				l = {
					unversionedId: 'acknowledgements',
					id: 'acknowledgements',
					title: 'Acknowledgements',
					description: '\u2728 Acknowledgments',
					source: '@site/docs/acknowledgements.md',
					sourceDirName: '.',
					slug: '/acknowledgements',
					permalink: '/Urvo/acknowledgements',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'acknowledgements', title: 'Acknowledgements' },
					sidebar: 'docs',
					previous: { title: 'Server Info', permalink: '/Urvo/commands/utility/server-info' },
					next: { title: 'API References', permalink: '/Urvo/commands/api-references' },
				},
				s = {},
				c = [{ value: '\u2728 Acknowledgments', id: '-acknowledgments', level: 2 }],
				p = { toc: c },
				u = 'wrapper';
			function d(e) {
				let { components: t, ...r } = e;
				return (0, o.kt)(
					u,
					(0, n.Z)({}, p, r, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: '-acknowledgments' }, '\u2728 Acknowledgments'),
					(0, o.kt)(
						'ul',
						null,
						(0, o.kt)(
							'li',
							{ parentName: 'ul' },
							(0, o.kt)(
								'a',
								{ parentName: 'li', href: 'https://old.discordjs.dev/#/docs/discord.js/14.11.0/general/welcome' },
								'discord.js Documentation',
							),
						),
						(0, o.kt)(
							'li',
							{ parentName: 'ul' },
							(0, o.kt)('a', { parentName: 'li', href: 'https://discordjs.guide/' }, 'discord.js Guide'),
						),
						(0, o.kt)(
							'li',
							{ parentName: 'ul' },
							(0, o.kt)('a', { parentName: 'li', href: 'https://docusaurus.io/' }, 'Docusaurus'),
						),
						(0, o.kt)(
							'li',
							{ parentName: 'ul' },
							(0, o.kt)('a', { parentName: 'li', href: 'https://pages.github.com/' }, 'GitHub Pages'),
						),
						(0, o.kt)(
							'li',
							{ parentName: 'ul' },
							(0, o.kt)('a', { parentName: 'li', href: 'https://eslint.org/' }, 'ESLint'),
						),
						(0, o.kt)(
							'li',
							{ parentName: 'ul' },
							(0, o.kt)('a', { parentName: 'li', href: 'https://prettier.io/' }, 'Prettier'),
						),
						(0, o.kt)(
							'li',
							{ parentName: 'ul' },
							(0, o.kt)('a', { parentName: 'li', href: 'https://github.com/badges/shields' }, 'Shields Badges'),
						),
						(0, o.kt)(
							'li',
							{ parentName: 'ul' },
							(0, o.kt)('a', { parentName: 'li', href: 'https://sequelize.org/docs/v6/' }, 'Sequelize Documentation'),
						),
					),
					(0, o.kt)(
						'p',
						null,
						'Additionally, the majority of the commands provided by this bot would not be possible without all of the various APIs that are being used, see ',
						(0, o.kt)('a', { parentName: 'p', href: 'commands/api-references' }, 'API Reference'),
						'.',
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
