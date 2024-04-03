'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[3727],
	{
		4137: (e, r, n) => {
			n.d(r, { Zo: () => p, kt: () => g });
			var t = n(7294);
			function o(e, r, n) {
				return (
					r in e
						? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 })
						: (e[r] = n),
					e
				);
			}
			function a(e, r) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var t = Object.getOwnPropertySymbols(e);
					r &&
						(t = t.filter(function (r) {
							return Object.getOwnPropertyDescriptor(e, r).enumerable;
						})),
						n.push.apply(n, t);
				}
				return n;
			}
			function i(e) {
				for (var r = 1; r < arguments.length; r++) {
					var n = null != arguments[r] ? arguments[r] : {};
					r % 2
						? a(Object(n), !0).forEach(function (r) {
								o(e, r, n[r]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
							: a(Object(n)).forEach(function (r) {
									Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
								});
				}
				return e;
			}
			function m(e, r) {
				if (null == e) return {};
				var n,
					t,
					o = (function (e, r) {
						if (null == e) return {};
						var n,
							t,
							o = {},
							a = Object.keys(e);
						for (t = 0; t < a.length; t++) (n = a[t]), r.indexOf(n) >= 0 || (o[n] = e[n]);
						return o;
					})(e, r);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (t = 0; t < a.length; t++)
						(n = a[t]), r.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
				}
				return o;
			}
			var l = t.createContext({}),
				c = function (e) {
					var r = t.useContext(l),
						n = r;
					return e && (n = 'function' == typeof e ? e(r) : i(i({}, r), e)), n;
				},
				p = function (e) {
					var r = c(e.components);
					return t.createElement(l.Provider, { value: r }, e.children);
				},
				d = 'mdxType',
				s = {
					inlineCode: 'code',
					wrapper: function (e) {
						var r = e.children;
						return t.createElement(t.Fragment, {}, r);
					},
				},
				u = t.forwardRef(function (e, r) {
					var n = e.components,
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						p = m(e, ['components', 'mdxType', 'originalType', 'parentName']),
						d = c(n),
						u = o,
						g = d[''.concat(l, '.').concat(u)] || d[u] || s[u] || a;
					return n
						? t.createElement(g, i(i({ ref: r }, p), {}, { components: n }))
						: t.createElement(g, i({ ref: r }, p));
				});
			function g(e, r) {
				var n = arguments,
					o = r && r.mdxType;
				if ('string' == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = u;
					var m = {};
					for (var l in r) hasOwnProperty.call(r, l) && (m[l] = r[l]);
					(m.originalType = e), (m[d] = 'string' == typeof e ? e : o), (i[1] = m);
					for (var c = 2; c < a; c++) i[c] = n[c];
					return t.createElement.apply(null, i);
				}
				return t.createElement.apply(null, n);
			}
			u.displayName = 'MDXCreateElement';
		},
		2293: (e, r, n) => {
			n.r(r),
				n.d(r, {
					assets: () => l,
					contentTitle: () => i,
					default: () => s,
					frontMatter: () => a,
					metadata: () => m,
					toc: () => c,
				});
			var t = n(7462),
				o = (n(7294), n(4137));
			const a = { id: 'programming-joke', title: 'Random Programming Joke Suggestion' },
				i = void 0,
				m = {
					unversionedId: 'commands/random/programming-joke',
					id: 'commands/random/programming-joke',
					title: 'Random Programming Joke Suggestion',
					description: 'Overview',
					source: '@site/docs/commands/random/programming-joke.md',
					sourceDirName: 'commands/random',
					slug: '/commands/random/programming-joke',
					permalink: '/Urvo/commands/random/programming-joke',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'programming-joke', title: 'Random Programming Joke Suggestion' },
					sidebar: 'docs',
					previous: { title: 'Random Joke', permalink: '/Urvo/commands/random/joke' },
					next: { title: 'Random Pun', permalink: '/Urvo/commands/random/pun' },
				},
				l = {},
				c = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				p = { toc: c },
				d = 'wrapper';
			function s(e) {
				let { components: r, ...a } = e;
				return (0, o.kt)(
					d,
					(0, t.Z)({}, p, a, { components: r, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Send a random programming joke.'),
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
						(0, o.kt)('img', {
							alt: 'Random Programming Joke Command Demo GIF',
							src: n(4181).Z,
							width: '1220',
							height: '954',
						}),
					),
				);
			}
			s.isMDXComponent = !0;
		},
		4181: (e, r, n) => {
			n.d(r, { Z: () => t });
			const t = n.p + 'assets/images/programming-joke-6782de22bbba7584ded2660422dab69d.gif';
		},
	},
]);
