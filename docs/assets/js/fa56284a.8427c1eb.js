'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[23],
	{
		4137: (e, n, t) => {
			t.d(n, { Zo: () => p, kt: () => f });
			var r = t(7294);
			function o(e, n, t) {
				return (
					n in e
						? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 })
						: (e[n] = t),
					e
				);
			}
			function a(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					n &&
						(r = r.filter(function (n) {
							return Object.getOwnPropertyDescriptor(e, n).enumerable;
						})),
						t.push.apply(t, r);
				}
				return t;
			}
			function i(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2
						? a(Object(t), !0).forEach(function (n) {
								o(e, n, t[n]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
							: a(Object(t)).forEach(function (n) {
									Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
								});
				}
				return e;
			}
			function c(e, n) {
				if (null == e) return {};
				var t,
					r,
					o = (function (e, n) {
						if (null == e) return {};
						var t,
							r,
							o = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
						return o;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++)
						(t = a[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
				}
				return o;
			}
			var l = r.createContext({}),
				m = function (e) {
					var n = r.useContext(l),
						t = n;
					return e && (t = 'function' == typeof e ? e(n) : i(i({}, n), e)), t;
				},
				p = function (e) {
					var n = m(e.components);
					return r.createElement(l.Provider, { value: n }, e.children);
				},
				u = 'mdxType',
				d = {
					inlineCode: 'code',
					wrapper: function (e) {
						var n = e.children;
						return r.createElement(r.Fragment, {}, n);
					},
				},
				s = r.forwardRef(function (e, n) {
					var t = e.components,
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						p = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
						u = m(t),
						s = o,
						f = u[''.concat(l, '.').concat(s)] || u[s] || d[s] || a;
					return t
						? r.createElement(f, i(i({ ref: n }, p), {}, { components: t }))
						: r.createElement(f, i({ ref: n }, p));
				});
			function f(e, n) {
				var t = arguments,
					o = n && n.mdxType;
				if ('string' == typeof e || o) {
					var a = t.length,
						i = new Array(a);
					i[0] = s;
					var c = {};
					for (var l in n) hasOwnProperty.call(n, l) && (c[l] = n[l]);
					(c.originalType = e), (c[u] = 'string' == typeof e ? e : o), (i[1] = c);
					for (var m = 2; m < a; m++) i[m] = t[m];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, t);
			}
			s.displayName = 'MDXCreateElement';
		},
		3444: (e, n, t) => {
			t.r(n),
				t.d(n, {
					assets: () => l,
					contentTitle: () => i,
					default: () => d,
					frontMatter: () => a,
					metadata: () => c,
					toc: () => m,
				});
			var r = t(7462),
				o = (t(7294), t(4137));
			const a = { id: 'pun', title: 'Random Pun' },
				i = void 0,
				c = {
					unversionedId: 'commands/random/pun',
					id: 'commands/random/pun',
					title: 'Random Pun',
					description: 'Overview',
					source: '@site/docs/commands/random/pun.md',
					sourceDirName: 'commands/random',
					slug: '/commands/random/pun',
					permalink: '/Urvo/commands/random/pun',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'pun', title: 'Random Pun' },
					sidebar: 'docs',
					previous: {
						title: 'Random Programming Joke Suggestion',
						permalink: '/Urvo/commands/random/programming-joke',
					},
					next: { title: 'Random Quote', permalink: '/Urvo/commands/random/quote' },
				},
				l = {},
				m = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				p = { toc: m },
				u = 'wrapper';
			function d(e) {
				let { components: n, ...a } = e;
				return (0, o.kt)(
					u,
					(0, r.Z)({}, p, a, { components: n, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Send a random pun.'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 10 seconds'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Required User Permission'), ': None'),
					(0, o.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, o.kt)('p', null, 'This command was made possible by the following API:'),
					(0, o.kt)(
						'ul',
						null,
						(0, o.kt)(
							'li',
							{ parentName: 'ul' },
							'JokeAPI (',
							(0, o.kt)('a', { parentName: 'li', href: 'https://v2.jokeapi.dev/' }, 'Documentation'),
							' | ',
							(0, o.kt)('a', { parentName: 'li', href: 'https://github.com/Sv443/JokeAPI' }, 'GitHub Repo'),
							')',
						),
					),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', { alt: 'Random Pun Command Demo GIF', src: t(81).Z, width: '1220', height: '954' }),
					),
				);
			}
			d.isMDXComponent = !0;
		},
		81: (e, n, t) => {
			t.d(n, { Z: () => r });
			const r = t.p + 'assets/images/pun-d1ad1dde5de3f1f8428c46fa8a04f9a2.gif';
		},
	},
]);
